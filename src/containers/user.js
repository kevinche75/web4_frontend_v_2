import React, {Component} from 'react';
import Input from 'react-toolbox/lib/input';
import Button from "react-toolbox/lib/button";
import {connect} from "react-redux";

export class MyUser extends Component{
    render() {
        const {style, user} = this.props;
        return(
            <div className="user" style={style.style.user.main}>
                <Input type='email' placeholder="Email" maxlengs={20} style={style.style.myComponents.input}/>
                <div className="userMessage" style={style.style.user.message}>
                    {user.userMessage==="" ? <br/> : user.userMessage}
                </div>
                <Input type="password" placeholder="Password" maxlength={20} style={style.style.myComponents.input}/>
                <br/>
                <Button label="LOGIN" style={style.style.myComponents.button}/>
                <Button label="REGISTER" style={style.style.myComponents.button}/>
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

export default connect(
    mapStateToProps,
)(MyUser)