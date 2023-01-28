import React, { createContext, useState } from "react";
import { getStoredTodo } from "../utilities/crudInLocalStorage";

export const TodoContext = createContext();

const TodoDataProvider = ({ children }) => {
  const [createNewTodo, setCreateNewTodo] = useState(false);
  const [todoList, setTodoList] = useState(
    getStoredTodo().sort((a, b) => a.id - b.id)
  );
  const [filteredTodoList, setFilteredTodoList] = useState(null);
  const [completedTodo, setCompletedTodo] = useState(null);

  const tags = [
    { id: 1, tagName: "work", color: "bg-purple-200" },
    { id: 2, tagName: "study", color: "bg-sky-200" },
    { id: 3, tagName: "entertainment", color: "bg-red-200" },
    { id: 4, tagName: "family", color: "bg-green-200" },
  ];

  const todoInfo = {
    createNewTodo,
    setCreateNewTodo,
    tags,
    todoList,
    setTodoList,
    filteredTodoList,
    setFilteredTodoList,
    completedTodo,
    setCompletedTodo,
  };
  return (
    <TodoContext.Provider value={todoInfo}>{children}</TodoContext.Provider>
  );
};

export default TodoDataProvider;
