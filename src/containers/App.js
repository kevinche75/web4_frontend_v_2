import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from "react-router-dom";
import FirstPage from './firstPage';
import SecondPage from './secondPage'

class App extends Component {

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
}

export default connect(mapStateToProps)(App)