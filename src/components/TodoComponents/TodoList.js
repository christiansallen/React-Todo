// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import ToDo from "./Todo";

const ToDos = props => {
  return (
    <div>
      {props.ToDoList.map(toDo => {
        return (
          <ToDo
            completed={props.completed}
            text={toDo.toDo}
            key={toDo.id}
            motherID={toDo.id}
            isCompleted={toDo.completed}
          />
        );
      })}
    </div>
  );
};

export default ToDos;
