import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Header} from "../components/header";
import MyUser from "./user";
import {Redirect} from "react-router";

class FirstPage extends Component {

  render() {
      const {style, header, history, user} = this.props;
      return (
          <div className="firstPage">
              {user.isLogin && <Redirect to={"/hello"}/>}
              <Header
                  firstName={header.firstName}
                  secondName={header.secondName}
                  patronymicName={header.patronymicName}
                  variant={header.variant}
                  topic={header.topic}
                  style={style}
              />
              <MyUser history={history}/>
          </div>
      )
  };
}

const mapStateToProps = store => {
    return {
        user: store.user,
        header: store.header,
        style: store.style,
    }
};

export default connect(mapStateToProps)(FirstPage)
