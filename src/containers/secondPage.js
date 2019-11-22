import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Header} from "../components/header";
import MyForm from "./form";
import Canvas from "./canvas";
import {MyTable} from "../components/table";

class SecondPage extends Component {
    render() {
        const {header, page} = this.props;
        return (
            <div className="secondPage">
                <Header
                    firstName={header.firstName}
                    secondName={header.secondName}
                    patronymicName={header.patronymicName}
                    variant={header.variant}
                    topic={header.topic}/>
                <MyForm/>
                <Canvas/>
                <MyTable table={page.table}/>
            </div>
        )
    };
}

const mapStateToProps = store => {
    return {
        header: store.header,
        page: store.page
    }
}

export default connect(mapStateToProps)(SecondPage)