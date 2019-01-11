import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

const fieldStyles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

const ToDoForm = props => {
  const { classes } = props;
  return (
    <form onSubmit={props.addToDo} className="form">
      <input
        className="input"
        onChange={props.change}
        type="text"
        placeholder="New ToDo"
        value={props.toDoItem}
        name="toDoItem"
      />
      <div className="buttons">
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={props.addToDo}
        >
          Add ToDo
        </Button>

        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={props.deleteToDo}
        >
          Clear Completed
        </Button>
      </div>
    </form>
  );
};

export default withStyles(styles)(ToDoForm);
