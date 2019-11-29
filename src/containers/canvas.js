import React, {Component} from 'react';
import { connect } from 'react-redux';
import {setMessageR} from "../actions/pageActions";
import axios from "axios";

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.handleClickCanvas = this.handleClickCanvas.bind(this);
    }

    sendPoint(x,y,r){
        let body = new FormData();
        body.set('x', x);
        body.set('y', y);
        body.set('r', r);
        axios({
            url: '/table',
            data: body,
            withCredentials: true,
            method: 'post',
        })
            .then(data => console.log(data))
            .catch(data => console.log(data));
    }

    handleClickCanvas(e){
        this.props.setMessageR("");
        if(this.props.page.r === 0){
            this.props.setMessageR("You should choose R")
        } else {
            let width = this.refs.canvas.width;
            let r = this.props.page.r;
            console.log(e.pageX-this.refs.canvas.offsetLeft);
            console.log(linCoefficient*width);
            console.log(rCoefficient*width);
            let x = (e.pageX-this.refs.canvas.offsetLeft-linCoefficient*width)/(rCoefficient*width);
            let y = -(e.pageY-this.refs.canvas.offsetTop-linCoefficient*width)/(rCoefficient*width);
            this.sendPoint(x,y,r);
        }
    }

    drawPicture(){
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        drawBackground(ctx, this.props.page.r, this.refs.canvas.width);
        makeDots(ctx, this.props.page.table, this.props.page.r, this.refs.canvas.width)
    }

    componentDidMount() {
        this.drawPicture();
    }

    componentDidUpdate(){
        this.drawPicture();
    }

    render() {
        const {style, page} = this.props;
        return (
            <div className="canvas" style={style.style.myCanvas.main}>
               <canvas width={page.canvasWidth} height={page.canvasWidth} ref="canvas" onClick={this.handleClickCanvas} style={style.style.myCanvas.canvas}/>
            </div>
        )
    };
}

const rCoefficient = 25/270;
const rectCoefficient = 135.5/270;
const linCoefficient = 135/270;
const arrowCoefficientFirst = 130/270;
const arrowCoefficientSecond = 8/270;
const arrowCoefficientThird = 140/270;
const arrowCoefficientForth = 262/270;
const sketchCoefficient = 10/270;
const xCoefficientSecond = 150/270;
const xCoefficientFirst = 260/270;
const yCoefficient = 145/270;
const dotRCoefficient = 3/270;

function drawBackground(ctx, R, width) {
    R = R*rCoefficient*width;
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, width, width);
    ctx.fillStyle = "#66C1FF";
    ctx.fillRect(rectCoefficient*width - R/2, rectCoefficient*width, R/2, R);
    ctx.beginPath();
    ctx.arc(rectCoefficient*width, rectCoefficient*width, R/2, Math.PI * 3 / 2, 2 * Math.PI, false);
    ctx.lineTo(rectCoefficient*width, rectCoefficient*width);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(linCoefficient*width, linCoefficient*width);
    ctx.lineTo(linCoefficient*width, linCoefficient*width - R / 2);
    ctx.lineTo(linCoefficient*width - R/2, linCoefficient*width);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(linCoefficient*width, width);
    ctx.lineTo(linCoefficient*width, 0);
    ctx.moveTo(arrowCoefficientFirst*width, arrowCoefficientSecond*width);
    ctx.lineTo(linCoefficient*width, 0);
    ctx.lineTo(arrowCoefficientThird*width, arrowCoefficientSecond*width);

    ctx.moveTo(0, linCoefficient*width);
    ctx.lineTo(width, linCoefficient*width);
    ctx.moveTo(arrowCoefficientForth*width, arrowCoefficientFirst*width);
    ctx.lineTo(width, linCoefficient*width);
    ctx.lineTo(arrowCoefficientForth*width, arrowCoefficientThird*width);
    let jCoefficient = sketchCoefficient*width;
    for (let i = 0; i < 11; i += 1) {
        ctx.moveTo(jCoefficient, arrowCoefficientFirst*width);
        ctx.lineTo(jCoefficient, arrowCoefficientThird*width);
        ctx.moveTo(arrowCoefficientFirst*width, jCoefficient);
        ctx.lineTo(arrowCoefficientThird*width, jCoefficient);
        jCoefficient+=rCoefficient*width;
    }
    ctx.stroke();
    ctx.font = "bold 12px sans-serif";
    ctx.fillText("x", xCoefficientFirst*width, xCoefficientSecond*width);
    ctx.fillText("y", yCoefficient*width, sketchCoefficient*width);
}

function paintPoint(ctx, x, y, color, width){
    ctx.fillStyle = color;
    let xPoint = x*rCoefficient*width + linCoefficient*width;
    let yPoint = -y*rCoefficient*width+linCoefficient*width;
    ctx.beginPath();
    ctx.arc(xPoint, yPoint, dotRCoefficient*width, 0, Math.PI*2, false);
    ctx.closePath();
    ctx.fill();
}

function makeDots(ctx, table, r, width) {
    for(const dot of table){
        if (dot.r == r){
            if(dot.hit){
                paintPoint(ctx, dot.x, dot.y, 'green', width)
            } else {
                paintPoint(ctx, dot.x, dot.y, 'red', width)
            }
        } else {
            paintPoint(ctx, dot.x, dot.y, 'grey', width)
        }
    }
}

const mapStateToProps = store => {
    return {
        page: store.page,
        style: store.style
    }
}

const mapDispatchToProps = dispatch => {
    return{
        setMessageR: messageR => dispatch(setMessageR(messageR)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Canvas)