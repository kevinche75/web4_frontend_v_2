import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Button} from "react-toolbox/lib/button";
import {Panel} from "react-toolbox/lib/layout";
import {Input} from "react-toolbox/lib/input";
import {Drawer} from "react-toolbox/lib/drawer";
import {setMessageR, setR, setX} from "../actions/pageActions";

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.handleClickR = this.handleClickR.bind(this);
        this.handleClickX = this.handleClickX.bind(this);
        this.handleClickSubmit = this.handleClickSubmit.bind(this);
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
        //TODO сделать выделение кнопки через CSS
    }
    handleClickSubmit(e){
        
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
                        <br/>
                        <div className={"messageX"}>
                            {page.messageX}
                        </div>
                    </Panel>
                    <Panel>
                        Set Y:
                        <br/>
                        <Input ref={"inputY"}/>
                        <br/>
                        <div className={"messageY"}>
                            {page.messageY}
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
                        <br/>
                        <div className={"messageR"}>
                            {page.messageR}
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
        user: store.user,
        page: store.page,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setR: r => dispatch(setR(r)),
        setX: x => dispatch(setX(x)),
        setMessageR: messageR => dispatch(setMessageR(messageR)),
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyForm)