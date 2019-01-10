import React from "react";

const ToDo = props => {
  return (
    <div
      className={props.item}
      style={{ textDecoration: props.isCompleted ? "line-through" : "none" }}
      onClick={() => props.completed(props.motherID)}
    >
      {props.text}
    </div>
  );
};

export default ToDo;
