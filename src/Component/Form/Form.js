import React from "react";
import classes from "./Form.module.css";
import { useState } from "react";

const Form = (props) => {
  const [userNameText, setUserNameText] = useState("");
  const [userThought, setUserThought] = useState("");

  const userNameChangeHandler = (e) => {
    setUserNameText(e.target.value);
  };

  const userThoughtHandler = (e) => {
    setUserThought(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const thoughtData = {
      id: userNameText,
      username: userNameText,
      thinking: userThought,
    };

    props.onSubmitFormHandler(thoughtData);

    setUserNameText("");
    setUserThought("");
  };

  return (
    <div className={classes["form-container"]}>
      <form className={classes["thought-form"]} onSubmit={formSubmitHandler}>
        <div className={classes["username-input"]}>
          <input
            type="text"
            className={classes.username}
            placeholder="@username"
            onChange={userNameChangeHandler}
            value={userNameText}
          />
        </div>
        <div className={classes["write-thought-input"]}>
          <textarea
            className={classes["write-thought"]}
            name="thought"
            cols="20"
            rows="1"
            placeholder="what's on your mind?"
            onChange={userThoughtHandler}
            value={userThought}
          />
        </div>
        <div className={classes["think-btn-container"]}>
          <input type="submit" className={classes["think-btn"]} value="post" />
        </div>
      </form>
    </div>
  );
};

export default Form;
