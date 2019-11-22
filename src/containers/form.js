import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Button} from "react-toolbox/lib/button";
import {Panel} from "react-toolbox/lib/layout";
import {Input} from "react-toolbox/lib/input";
import {setMessageR, setR, setX, setMessageX, setMessageY, setY} from "../actions/pageActions";

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.handleClickR = this.handleClickR.bind(this);
        this.handleClickX = this.handleClickX.bind(this);
        this.handleClickSubmit = this.handleClickSubmit.bind(this);
        this.handleChangeY = this.handleChangeY.bind(this);
    }
    handleClickR(e){
        if(e.target.value<=0){
            this.props.setMessageR("Radius cann't be below or equal ziro");
            return
        }
        this.props.setMessageR("");
        this.props.setR(e.target.value);
        //TODO сделать выделение кнопки через CSS
    }
    handleClickX(e){
        this.props.setX(e.target.value);
        this.props.setMessageX("");
        //TODO сделать выделение кнопки через CSS
    }
    handleChangeY(e){
        this.props.setY(e.trim());
        this.props.setMessageY("");
    }
    handleClickSubmit(e){
        this.props.setMessageX("");
        this.props.setMessageY("");
        this.props.setMessageR("");
        let flag = true;
        if(this.props.page.x===null){
            this.props.setMessageX("You should choose X");
            flag = false;
        }
        let y = this.props.page.y;
        if(y=="" || y===null){
            this.props.setMessageY("You should set Y");
            flag = false;
        } else {
            if(!/^(-?\d+)([.,]\d+)?$/.test(y)) {
            } else {
                y = y.replace(',','.');
                y = Number(y);
                if (!(y > -5 && y < 3)) {
                    flag = false;
                    this.props.setMessageY("Y should be in area (-3;5)");
                }
            }
        }
        if(this.props.page.r===0){
            flag = false;
            this.props.setMessageR("You should choose R");
        }
        //TODO отправка на сервер
    }
    render() {
        const {page} = this.props;
        return (
            <div className="form">
                <Panel>
                    <Panel>
                        Choose X:
                        <br/>
                        <Button type={"button"} label="-4" onClick={this.handleClickX} value={-4}/>
                        <Button type={"button"} label="-3" onClick={this.handleClickX} value={-3}/>
                        <Button type={"button"} label="-2" onClick={this.handleClickX} value={-2}/>
                        <Button type={"button"} label="-1" onClick={this.handleClickX} value={-1}/>
                        <Button type={"button"} label="0" onClick={this.handleClickX} value={0}/>
                        <Button type={"button"} label="1" onClick={this.handleClickX} value={1}/>
                        <Button type={"button"} label="2" onClick={this.handleClickX} value={2}/>
                        <Button type={"button"} label="3" onClick={this.handleClickX} value={3}/>
                        <Button type={"button"} label="4" onClick={this.handleClickX} value={4}/>
                        <div className={"messageX"}>
                            {page.messageX==="" ? <br/> : page.messageX}
                        </div>
                    </Panel>
                    <Panel>
                        Set Y(-5;3):
                        <br/>
                        <Input onChange={this.handleChangeY} maxlength={14}/>
                        <div className={"messageY"}>
                            {page.messageY==="" ? <br/> : page.messageY}
                        </div>
                    </Panel>
                    <Panel>
                        Choose R:
                        <br/>
                        <Button type={"button"} label="-4" onClick={this.handleClickR} value={-4}/>
                        <Button type={"button"} label="-3" onClick={this.handleClickR} value={-3}/>
                        <Button type={"button"} label="-2" onClick={this.handleClickR} value={-2}/>
                        <Button type={"button"} label="-1" onClick={this.handleClickR} value={-1}/>
                        <Button type={"button"} label="0" onClick={this.handleClickR} value={0}/>
                        <Button type={"button"} label="1" onClick={this.handleClickR} value={1}/>
                        <Button type={"button"} label="2" onClick={this.handleClickR} value={2}/>
                        <Button type={"button"} label="3" onClick={this.handleClickR} value={3}/>
                        <Button type={"button"} label="4" onClick={this.handleClickR} value={4}/>
                        <div className={"messageR"}>
                            {page.messageR==="" ? <br/> : page.messageR}
                        </div>
                    </Panel>
                    <Panel>
                        <Button label={"ADD"} type={"submit"} onClick={this.handleClickSubmit}/>
                    </Panel>
                </Panel>
            </div>
        )
    };
}

const mapStateToProps = store => {
    return {
        page: store.page,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setR: r => dispatch(setR(r)),
        setX: x => dispatch(setX(x)),
        setY: y => dispatch(setY(y)),
        setMessageR: messageR => dispatch(setMessageR(messageR)),
        setMessageX: messageX => dispatch(setMessageX(messageX)),
        setMessageY: messageY => dispatch(setMessageY(messageY)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyForm)