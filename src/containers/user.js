import React, {Component} from 'react';
import Input from 'react-toolbox/lib/input';
import Button from "react-toolbox/lib/button";

export class User extends Component{
    render() {
        return(
            <div className="user">
                <Input type='email' hint="Email" maxLengs={20}/>
                <br/>
                <Input type="password" hint="Password" maxLength={20}/>
                <br/>
                <Button label="Login"/>
                <Button label="Register"/>
            </div>
        )
    }
}