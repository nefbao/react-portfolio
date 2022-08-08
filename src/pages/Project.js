import React from "react";
import "./Project.css";

export default function Project(props) {
  return (
    <div className={props.direction}>
      <div className="col description">
        <h2>{props.title}</h2>
        <p className="projectDescription">{props.text}</p>
        <a href={props.link} target="_blank" rel="noreferrer">
          Check out {props.title}
        </a>
      </div>
      <div className="col image">
        <img src={props.image} alt={props.title} />
      </div>
    </div>
  );
}
