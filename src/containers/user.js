import React, {Component} from 'react';
import Input from 'react-toolbox/lib/input';
import Button from "react-toolbox/lib/button";
import {connect} from "react-redux";
import {login, register, setUserMessage} from "../actions/userActions";

export class MyUser extends Component{

    constructor(props) {
        super(props);
        this.props.setUserMessage("");
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
            let butch = {
                username: login,
                password: password,
            };
            this.props.login(butch);
        }
    }

    handleRegister(e){
        this.props.setUserMessage("");
        let login = document.getElementById("login").value;
        let password = document.getElementById("password").value;
        if(login===null||login===""||password===null||password===""){
            this.props.setUserMessage("Please, write all information")
        } else {
            let butch = {
                username: login,
                password: password,
            };
            this.props.register(butch);
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
        register: butch => dispatch(register(butch)),
        login: butch => dispatch(login(butch)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyUser)