import React from "react";
import classes from "./ThoughtItem.module.css";
import image from "../../../Assets/close-icon.svg";

const ThoughtItem = (props) => {
  const deleteThought = () => {
    props.onDelete(props.id);
  };

  return (
    <li className={classes["thought-post"]} onClick={deleteThought}>
      <div className={classes["tpost-head"]}>
        <h3>{props.username}</h3>
        <img src={image} alt="delete" />
      </div>
      <p>{props.thinking}</p>
    </li>
  );
};

export default ThoughtItem;
