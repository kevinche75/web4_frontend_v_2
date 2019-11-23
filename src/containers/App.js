import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from "react-router-dom";
import FirstPage from './firstPage';
import SecondPage from './secondPage'
import {setStyle} from "../actions/styleActions";
import {styleDeskTop} from "../styles/desktop";
import {stylePhone} from "../styles/phone";
import {styleTablet} from "../styles/tablet";

class App extends Component {

    constructor(props) {
        super(props);
        let width = window.screen.availWidth;
        if(width>=1113){
            this.props.setStyle(styleDeskTop)
        } else {
            if(width<=763){
                this.props.setStyle(stylePhone)
            } else {
                this.props.setStyle(styleTablet)
            }
        }
    }

    render() {
        const {user} = this.props; //TODO ограничить доступ к hello
        return (
                <BrowserRouter>
                    <Route exact={true} path="/" component={FirstPage}/>
                    <Route exact={true} path="/hello" component={SecondPage}/>
                </BrowserRouter>
        )
    };
}

const mapStateToProps = store => {
    return {
        user: store.user
    }
};

const mapDispatchToProps = dispatch => {
    return{
        setStyle: style => dispatch(setStyle(style)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    )(App)