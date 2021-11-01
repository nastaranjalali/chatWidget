import React, { useRef, useEffect } from "react";
import AdminMessage from "./AdminMessage";
import "./ChatBox.styles.css";
import UserMessage from "./UserMessage";
import SendIcon from "../assets/icons/sendIcon.png";
import { useState } from "react";

export default function ChatBox({ isComponentVisible }) {
  const [chatList, setChatList] = useState([]);
  var [InputMessage, setInputMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    setChatList(
      chatList.concat(
        <div key={chatList.length}>
          <UserMessage message={InputMessage} />
          <AdminMessage message="hi this is admin how can I help you?" />
        </div>
      )
    );
    setInputMessage("");
  };

  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };
  return (
    isComponentVisible && (
      <div onBlur={(e) => e.stopPropagation} className="containerChat">
        <div className="message">
          <AdminMessage message="hi this is admin how can I help you?" />
          {chatList}
          <AlwaysScrollToBottom />
        </div>
        <div className="inputContainer">
          <form className="form">
            <input
              required
              type="text"
              className="chatInput"
              value={InputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              name="message"
              placeholder="Type your message here ..."
            />
            <button type="submit" className="sendButton" onClick={sendMessage}>
              <img src={SendIcon} className="sendIcon" alt="ss" />
            </button>
          </form>
        </div>
      </div>
    )
  );
}
