import React, { Component, useState } from "react";
import MessageOptions from "./MessageOptions";
import moment from "moment";

class Message extends Component {
  // const [isMenuShown, showMenu] = useState(0);
  constructor(props) {
    super(props);
    this.state = {
      isMenuShown: false
    };
    console.log("time", moment().format("llll"));

  }
  getMsgBoxStyle(msg, userId) {
    let className = "p-1 my-1 mx-3 rounded shadow-sm message-item ";
    if (msg.sender === userId) className += "self bg-white align-self-end";
    else className += "bg-white  align-self-start";
    return className;
  }
  toggleMenu = (e) => {
    e.preventDefault();
    this.setState({ isMenuShown: !this.state.isMenuShown });
  };
  getDate(time) {
    var dateObj = new Date(time);
    var momentObj = moment(dateObj);
    var momentString = momentObj.format("LT");
    console.log(momentString);
    return momentString;
  }
  render() {
    let { message: msg, userId } = this.props;
    let { isMenuShown } = this.state;
    let msgBoxClass = this.getMsgBoxStyle(msg, userId);
    let date = this.getDate(msg.time);
    console.log("time", moment().format("llll"));

    return (
      <div className={msgBoxClass}>
        <div className="options">
          {/* <a href="/#" onClick={(e) => {e.preventDefault();this.showMenu(msg, userId)}}> */}
          <a href="/#" onClick={this.toggleMenu}>
            <i className="fas fa-angle-down text-muted px-2"></i>
          </a>
          {isMenuShown && <MessageOptions message={msg} />}
        </div>
        <div className="d-flex flex-row">
          <div className="body m-1 mr-2">{msg.body}</div>
          <div
            className="time ml-auto small text-right flex-shrink-0 align-self-end text-muted"
            style={{ width: "75px" }}
          >
            {date}
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
