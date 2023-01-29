import React, { useContext, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { TodoContext } from "../../../../contexts/TodoDataProvider";
import {
  getStoredTodo,
  removeFromDb,
} from "../../../../utilities/crudInLocalStorage";

const SingleTodo = ({ todo }) => {
  const [showMenu, setShowMenu] = useState(false);
  const {
    tags,
    todoList,
    setTodoList,
    filteredTodoList,
    setFilteredTodoList,
    completedTodo,
    setCompletedTodo,
  } = useContext(TodoContext);
  const { todoTitle, todoDescription, todoTags, completed, id } = todo;

  //   Handle Done Tasks
  const handleTaskDone = (e, id) => {
    const matchedTodo = todoList.filter((todo) => todo.id === id);
    const remainingTodos = todoList.filter((todo) => todo.id !== id);
    if (e.target.checked) {
      matchedTodo[0].completed = true;
    } else {
      matchedTodo[0].completed = false;
    }
    const newTodos = [...remainingTodos, matchedTodo[0]];
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodoList(getStoredTodo().sort((a, b) => a.id - b.id));
  };

  //   Delete a Todo
  const handleTodoDelete = (id) => {
    const consent = confirm("Do you want to remove the todo?");
    if (consent) {
      removeFromDb(id);
      if (completedTodo) {
        const remainingTodoList = completedTodo.filter(
          (todo) => todo.id !== id
        );
        setCompletedTodo(remainingTodoList);
      } else if (filteredTodoList) {
        const remainingTodoList = filteredTodoList.filter(
          (todo) => todo.id !== id
        );
        setFilteredTodoList(remainingTodoList);
      } else {
        setTodoList(getStoredTodo().sort((a, b) => a.id - b.id));
      }
    }
  };

  return (
    <div className="bg-secondary p-5 rounded-lg  text-primary">
      <div className="flex justify-between gap-10 items-start relative">
        <h2
          className={`text-lg text-bold w-5/6 ${
            completed ? "line-through" : null
          }`}
        >
          {todoTitle}
        </h2>
        <BsThreeDots
          onClick={() => setShowMenu(!showMenu)}
          className="cursor-pointer opacity-90 text-lg"
        />
        {showMenu ? (
          <div className="absolute right-0 top-5 bg-white py-2 rounded-lg">
            <ul>
              {/* <li className="px-8 py-1 cursor-pointer">Edit</li>
              <hr /> */}
              <li
                onClick={() => handleTodoDelete(id)}
                className="px-8 py-1 cursor-pointer"
              >
                Delete
              </li>
            </ul>
          </div>
        ) : null}
      </div>
      <p className={`my-3 ${completed ? "line-through" : null}`}>
        {todoDescription}
      </p>

      <div className="flex justify-between items-center">
        <div>
          {todoTags.map((todoTag, i) => {
            const matchedTag = tags.filter((tag) => tag.tagName === todoTag);
            return (
              <div
                key={i}
                className={`w-10 h-10 ${matchedTag[0].color} rounded-full inline-block mr-2`}
              ></div>
            );
          })}
        </div>
        <div>
          <label
            htmlFor={todoTitle}
            className={`${completed ? "opacity-70" : "opacity-100"}`}
          >
            <input
              onChange={(e) => handleTaskDone(e, id)}
              className="mr-1"
              type="checkbox"
              id={todoTitle}
              defaultChecked={completed}
            />
            Done
          </label>
        </div>
      </div>
    </div>
  );
};

export default SingleTodo;
