import React, {Component} from 'react';
import { connect } from 'react-redux';
import {setMessageR} from "../actions/pageActions";


class Canvas extends Component {
    constructor(props) {
        super(props);
        this.handleClickCanvas = this.handleClickCanvas.bind(this);
    }

    handleClickCanvas(e){
        // console.log(e.clientX);
        // console.log(e.clientY);
        this.props.setMessageR("");
        if(this.props.page.r === 0){
            this.props.setMessageR("You should choose R")
        } else {
            //TODO отправка на сервер
        }
    }

    drawPicture(){
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        drawBackground(ctx, this.props.page.r);
        makeDots(ctx, this.props.page.table, this.props.page.r)
    }

    componentDidMount() {
        this.drawPicture();
    }

    componentDidUpdate(){
        this.drawPicture();
    }

    render() {
        const {style} = this.props;
        return (
            <div className="canvas" style={style.style.myCanvas.main}>
               <canvas width={270} height={270} ref="canvas" onClick={this.handleClickCanvas} style={style.style.myCanvas.canvas}/>
            </div>
        )
    };
}

function drawBackground(ctx, R) {
    R = R*25;
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, 270, 270);
    ctx.fillStyle = "#66C1FF";
    ctx.fillRect(135.5 - R/2, 135.5, R/2, R);
    ctx.beginPath();
    ctx.arc(135.5, 135.5, R/2, Math.PI * 3 / 2, 2 * Math.PI, false);
    ctx.lineTo(135.5, 135.5);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(135, 135);
    ctx.lineTo(135, 135 - R / 2);
    ctx.lineTo(135 - R/2, 135);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(135, 270);
    ctx.lineTo(135, 0);
    ctx.moveTo(130, 8);
    ctx.lineTo(135, 0);
    ctx.lineTo(140, 8);

    ctx.moveTo(0, 135);
    ctx.lineTo(270, 135);
    ctx.moveTo(262, 130);
    ctx.lineTo(270, 135);
    ctx.lineTo(262, 140);
    for (let i = 10; i < 261; i += 25) {
        ctx.moveTo(i, 130);
        ctx.lineTo(i, 140);
        ctx.moveTo(130, i);
        ctx.lineTo(140, i);
    }
    ctx.stroke();
    ctx.font = "bold 12px sans-serif";
    ctx.fillText("x", 260, 145);
    ctx.fillText("y", 145, 10);
}

function paintPoint(ctx, x, y, color){
    ctx.fillStyle = color;
    let xPoint = x*25 + 135;
    let yPoint = -y*25+135;
    ctx.beginPath();
    ctx.arc(xPoint, yPoint, 3, 0, Math.PI*2, false);
    ctx.closePath();
    ctx.fill();
}

function makeDots(ctx, table, r) {
    for(const dot of table){
        if (dot.r == r){
            if(dot.hit){
                paintPoint(ctx, dot.x, dot.y, 'green')
            } else {
                paintPoint(ctx, dot.x, dot.y, 'red')
            }
        } else {
            paintPoint(ctx, dot.x, dot.y, 'grey')
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