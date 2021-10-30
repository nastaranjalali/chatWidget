import React from "react";
import AdminMessage from "./AdminMessage";
import "./ChatBox.styles.css";
import UserMessage from "./UserMessage";
import SendIcon from "../assets/icons/sendIcon.png";
import { useState } from "react";

export default function ChatBox({ isComponentVisible }) {
  const [chatList, setChatList] = useState([]);
  var [InputMessage, setInputMessage] = useState("");

  const sendMessage = () => {
    setChatList(
      chatList.concat(
        <div key={chatList.length}>
          <UserMessage message={InputMessage} />
          <AdminMessage message="hi this is admin how can I help you?" />
        </div>
      )
    );
  };

  return (
    isComponentVisible && (
      <div onBlur={(e) => e.stopPropagation} className="containerChat">
        <div className="message">
          <AdminMessage message="hi this is admin how can I help you?" />
          {chatList}
          {}
        </div>
        <div className="inputContainer">
          <input
            required
            type="text"
            className="chatInput"
            value={InputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button type="submit" className="sendButton" onClick={sendMessage}>
            <img src={SendIcon} className="sendIcon" alt="ss" />
          </button>
        </div>
      </div>
    )
  );
}
