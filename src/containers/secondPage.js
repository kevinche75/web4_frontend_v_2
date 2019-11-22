import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Header} from "../components/header";
import MyForm from "./form";

class SecondPage extends Component {
    render() {
        const {user, page, header} = this.props;
        return (
            <div className="secondPage">
                <Header
                    firstName={header.firstName}
                    secondName={header.secondName}
                    patronymicName={header.patronymicName}
                    variant={header.variant}
                    topic={header.topic}/>
                <MyForm/>
            </div>
        )
    };
}

const mapStateToProps = store => {
    return {
        user: store.user,
        page: store.page,
        header: store.header
    }
}

export default connect(mapStateToProps)(SecondPage)