import React from "react";
import "./Card.css";

const Card = ({ icon, title, body }) => {
  return (
    <div className="card">
      <span>{icon}</span>
      <span>{title}</span>
      <span>{body}</span>

      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;
