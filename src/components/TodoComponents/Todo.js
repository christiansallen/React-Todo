import React from "react";

const ToDo = props => {
  return (
    <div
      style={{ textDecoration: props.isCompleted ? "line-through" : "none" }}
      onClick={e => props.completed(e, props.motherID)}
    >
      {props.text}
    </div>
  );
};

export default ToDo;
