import React from "react";
import "./UserMessage.styles.css";

export default function UserMessage({ message }) {
  return (
    <div className="userMessageContainer">
      <div className="userBlock">
        <p className="userMessage">{message}</p>
      </div>
    </div>
  );
}
