import React from "react";
import "./Card.css";

const Card = ({ emoji, title, body }) => {
  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span>{title}</span>
      <span>{body}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;
