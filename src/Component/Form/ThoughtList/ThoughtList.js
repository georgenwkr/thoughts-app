import React from "react";
import classes from "./ThoughtList.module.css";
import ThoughtItem from "../ThoughtItem/ThoughtItem";

const ThoughtList = (props) => {
  return (
    <ul className={classes["listed-thoughts"]}>
      {props.items.map((thought) => (
        <ThoughtItem
          key={thought.id}
          id={thought.id}
          username={thought.username}
          thinking={thought.thinking}
          onDelete={props.onDeleteThought}
        />
      ))}
    </ul>
  );
};

export default ThoughtList;
