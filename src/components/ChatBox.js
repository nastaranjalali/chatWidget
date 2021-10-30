import React from "react";
import AdminMessage from "./AdminMessage";
import "./ChatBox.styles.css";
import UserMessage from "./UserMessage";

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
          <button
            type="submit"
            className="button"
            onClick={handleClick}
          ></button>
        </div>
      </div>
    )
  );
}
