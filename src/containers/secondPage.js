import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Header} from "../components/header";
import MyForm from "./form";
import Canvas from "./canvas";
import {MyTable} from "../components/table";
import {Button} from "react-toolbox/lib/button";
import {Panel} from "react-toolbox/lib/layout";
import {setOpenedComponent} from "../actions/pageActions";
import axios from "axios";
import { Redirect } from 'react-router';

class SecondPage extends Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleBackButton = this.handleBackButton.bind(this);
    }

    handleButtonClick(e){
        this.props.setOpenedComponent(e.target.value);
        console.log(e.target.value);
    }

    handleBackButton(e){
        axios.get("/logout", {
            withCredentials: true,
        })
            .then(result => console.log(result))
            .catch(result => console.log(result));
        this.props.history.push("/")
    }

    render() {
        const {header, page, style, history} = this.props;
        return (
            <div className="secondPage">
                <Header
                    firstName={header.firstName}
                    secondName={header.secondName}
                    patronymicName={header.patronymicName}
                    variant={header.variant}
                    topic={header.topic}
                    style={style}/>
                {page.device_type!=="phone" && <MyForm/>}
                {page.device_type!=="phone" && <Canvas/>}
                {page.device_type!=="phone" && <MyTable table={page.table} style={style}/>}
                {page.device_type==="phone" && <Panel style={style.style.myComponents.mobilePanel}>
                    {page.device_type==="phone" && <Button
                        label={"FORM"}
                        value={"FORM"}
                        onClick={this.handleButtonClick}
                        style={page.mobileOpenedComponent==="FORM" ? style.style.myComponents.checkedMobileButton : style.style.myComponents.mobileButton}/>}
                    {page.device_type==="phone" && <Button
                        label={"CANVAS"}
                        value={"CANVAS"}
                        onClick={this.handleButtonClick}
                        style={page.mobileOpenedComponent==="CANVAS" ? style.style.myComponents.checkedMobileButton : style.style.myComponents.mobileButton}/>}
                    {page.device_type==="phone" && <Button
                        label={"TABLE"}
                        value={"TABLE"}
                        onClick={this.handleButtonClick}
                        style={page.mobileOpenedComponent==="TABLE" ? style.style.myComponents.checkedMobileButton : style.style.myComponents.mobileButton}/>}
                </Panel>}
                {page.mobileOpenedComponent==="FORM"&& <MyForm/>}
                {page.mobileOpenedComponent==="CANVAS" && <Canvas/>}
                {page.mobileOpenedComponent==="TABLE" && <MyTable table={page.table} style={style}/>}
                <Panel style={style.style.myComponents.backPanel}>
                    <Button label={"BACK"} style={style.style.myComponents.button} onClick={this.handleBackButton}/>
                </Panel>
            </div>
        )
    };
}

const mapStateToProps = store => {
    return {
        header: store.header,
        page: store.page,
        style: store.style,
    }
};

const mapDispatchToProps = dispatch => {
    return{
        setOpenedComponent: component => dispatch(setOpenedComponent(component)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SecondPage)