import React from "react";

const Todo = (props) => {
  const { text } = props;
  return (
    <>
      <li> {text} </li>
    </>
  );
};

export default Todo;
