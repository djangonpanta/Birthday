import React, { useState } from "react";
import Todo from "./Todo";

const App = () => {
  const [todo, setTodo] = useState(" ");
  const [lists, setLists] = useState([]);
  const addItems = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = () => {
    setLists((oldItems) => {
      return [...oldItems, todo];
    });
    setTodo(" ");
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List </h1>
          <br />
          <input
            type="text"
            placeholder="Add a items"
            onChange={addItems}
            value={todo}
          />
          <button onClick={onSubmit}> + </button>
          <ol>
            {lists.map((list, index) => {
              return <Todo key={index} id={index} text={list} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
