import React from "react";

import "./chatwidget.styles.css";
import { ReactComponent as Icon } from "../assets/icons/chat.svg";
import ChatBox from "./ChatBox";
import useComponentVisible from "../costumeHooks/useComponentVisible";

export default function ChatWidget() {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  return (
    <div className="container" ref={ref}>
      <ChatBox className="chatbox" isComponentVisible={isComponentVisible} />
      <button
        onClick={() => setIsComponentVisible(!isComponentVisible)}
        className="button"
      >
        <Icon className="icon" />
      </button>
    </div>
  );
}
