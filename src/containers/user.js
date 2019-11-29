import React, {Component} from 'react';
import Input from 'react-toolbox/lib/input';
import Button from "react-toolbox/lib/button";
import {connect} from "react-redux";
import axios from 'axios';
import {setUserMessage} from "../actions/userActions";

export class MyUser extends Component{

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleLogin(e){
        this.props.setUserMessage("");
        let login = document.getElementById("login").value.trim();
        let password = document.getElementById("password").value.trim();
        if(login===null||login===""||password===null||password===""){
            this.props.setUserMessage("Please, write all information")
        } else {
            let body = new FormData();
            body.set("username", login);
            body.set("password", password);
            axios({
                url: '/login',
                method: 'post',
                data: new URLSearchParams(body),
                Authorisation: 'Basic ' + btoa(login + ':' + password),
                withCredentials: true,
            })
                .then(result => console.log(result))
                .catch(result => console.log(result));
            // this.props.history.push("/hello")
        }
    }

    handleRegister(e){
        this.props.setUserMessage("");
        let login = document.getElementById("login").value;
        let password = document.getElementById("password").value;
        if(login===null||login===""||password===null||password===""){
            this.props.setUserMessage("Please, write all information")
        } else {
            let body = new FormData();
            body.set("username", login);
            body.set("password", password);
            axios({
                method: "post",
                url: '/register',
                withCredentials: true,
                data: body,
            })
                .then(result => console.log(result))
                .catch(result => console.log(result));
        }
    }

    render() {
        const {style, user} = this.props;
        return(
            <div className="user" style={style.style.user.main}>
                <Input type='email' placeholder="Login" maxlengs={20} style={style.style.myComponents.input} id={"login"}/>
                <div className="userMessage" style={style.style.myComponents.message}>
                    {user.userMessage==="" ? <br/> : user.userMessage}
                </div>
                <Input type="password" placeholder="Password" maxlength={20} style={style.style.myComponents.input} id={"password"}/>
                <br/>
                <Button label="LOGIN" style={style.style.myComponents.button} onClick={this.handleLogin}/>
                <Button label="REGISTER" style={style.style.myComponents.button} onClick={this.handleRegister}/>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        user: store.user,
        style: store.style
    }
};

const mapDispatchToProps = dispatch => {
    return{
        setUserMessage: userMessage => dispatch(setUserMessage(userMessage)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyUser)