import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Header} from "../components/header";
import MyForm from "./form";
import Canvas from "./canvas";
import {MyTable} from "../components/table";
import {Button} from "react-toolbox/lib/button";
import {Panel} from "react-toolbox/lib/layout";
import {
    getTable,
    setMessageR,
    setMessageX,
    setMessageY,
    setOpenedComponent,
    setR,
    setX,
    setY
} from "../actions/pageActions";
import {Redirect} from 'react-router';
import {logout} from "../actions/userActions";

class SecondPage extends Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleBackButton = this.handleBackButton.bind(this);
        this.props.setMessageX("");
        this.props.setMessageY("");
        this.props.setMessageR("");
        this.props.setX(null);
        this.props.setY(null);
        this.props.setR(0);
    }

    getTable(){
        this.props.getTable();
    }

    componentDidMount() {
        this.getTable()
    }

    handleButtonClick(e){
        this.props.setOpenedComponent(e.target.value);
        console.log(e.target.value);
    }

    handleBackButton(e){
       this.props.logout()
    }

    render() {
        const {header, page, style, user} = this.props;
        return (
            <div className="secondPage">
                {!user.isLogin && <Redirect to={"/~s264433/"}/>}
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
        user: store.user,
    }
};

const mapDispatchToProps = dispatch => {
    return{
        setOpenedComponent: component => dispatch(setOpenedComponent(component)),
        logout: () => dispatch(logout()),
        setR: r => dispatch(setR(r)),
        setX: x => dispatch(setX(x)),
        setY: y => dispatch(setY(y)),
        setMessageR: messageR => dispatch(setMessageR(messageR)),
        setMessageX: messageX => dispatch(setMessageX(messageX)),
        setMessageY: messageY => dispatch(setMessageY(messageY)),
        getTable: () => dispatch(getTable()),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SecondPage)