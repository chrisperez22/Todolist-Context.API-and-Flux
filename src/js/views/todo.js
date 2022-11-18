import React, { useState, useEffect, useContext } from "react";

import "../../styles/todo.css";

import { Context } from "../store/appContext";

export const Todo = () => {
  const [, setCount] = useState(0);
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="main-div">
        <p>To Do's</p>
        <div className="input-div">
          <div className="row">
            <div className="col-10">
              <input
                type="text"
                onKeyDown={(e) => actions.keyPress(e)}
                onChange={(e) => actions.updateTaskToEnter(e.target.value)}
                value={store.inputValue}
              ></input>
            </div>
            <div className="col-1">
              <button id="my_add_btn" onClick={() => actions.addTodo()}>
                Task
              </button>
            </div>
          </div>
          <ul id="my-list" className="todo-container">
            {store.globalList.length > 0 ? (
              store.globalList.map((item, i) => (
                <li key={i}>
                  {item}&nbsp;
                  <button
                    id="delete-btn"
                    type="button"                    
                    onClick={() => actions.handleRemove(i)}
                  >
                    x
                  </button>
                </li>
              ))
            ) : (
              <h2>No tasks, add a task</h2>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
