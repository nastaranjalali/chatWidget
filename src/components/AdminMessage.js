import React from "react";
import "./AdminMessage.styles.css";

export default function AdminMessage({ message }) {
  return (
    <div className="AdminMessageContainer">
      <div className="Adminblock">
        <p className="adminMessage">{message}</p>
      </div>
    </div>
  );
}
