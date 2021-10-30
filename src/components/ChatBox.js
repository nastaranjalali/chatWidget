import React from "react";
import AdminMessage from "./AdminMessage";
import "./ChatBox.styles.css";
import UserMessage from "./UserMessage";
import SendIcon from "../assets/icons/sendIcon.png";

export default function ChatBox({ isComponentVisible }) {
  return (
    isComponentVisible && (
      <div onBlur={(e) => e.stopPropagation} className="containerChat">
        <div className="message">
          <AdminMessage message="hi this is admin" />
          <UserMessage message="hi this is user" />
        </div>
        <div className="inputContainer">
          <input type="text" className="chatInput" />
          <button type="submit" className="sendButton">
            <img src={SendIcon} className="sendIcon" />
          </button>
        </div>
      </div>
    )
  );
}
