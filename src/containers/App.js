import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from "react-router-dom";
import FirstPage from './firstPage';
import SecondPage from './secondPage'
import {setStyle} from "../actions/styleActions";
import {styleDeskTop} from "../styles/desktop";
import {stylePhone} from "../styles/phone";
import {styleTablet} from "../styles/tablet";
import {setCanvasWidth, setDeviceType} from "../actions/pageActions";

class App extends Component {

    constructor(props) {
        super(props);
        let width = window.screen.availWidth;
        if(width>=1113){
            this.props.setStyle(styleDeskTop);
            this.props.setCanvasWidth(window.screen.availWidth*0.20);
            this.props.setDeviceType('desktop');
        } else {
            if(width<=763){
                this.props.setStyle(stylePhone);
                this.props.setCanvasWidth(window.screen.availWidth*0.80);
                this.props.setDeviceType('phone');
            } else {
                this.props.setStyle(styleTablet);
                this.props.setCanvasWidth(window.screen.availWidth*0.20);
                this.props.setDeviceType('tablet');
            }
        }
    }

    render() {
        return (
                <BrowserRouter>
                    <Route exact={true} strict={true} path="/" component={FirstPage}/>
                    <Route exact={true} strict={true} path="/hello" component={SecondPage}/>
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
        setCanvasWidth: width => dispatch(setCanvasWidth(width)),
        setDeviceType: type => dispatch(setDeviceType(type)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    )(App)