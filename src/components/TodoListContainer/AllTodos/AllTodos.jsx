import React, { useContext } from "react";
import { TodoContext } from "../../../contexts/TodoDataProvider";
import SingleTodo from "./SingleTodo/SingleTodo";

const AllTodos = () => {
  const { todoList, filteredTodoList, completedTodo } = useContext(TodoContext);
  //   console.log(todoList);
  return (
    <div className="col-span-4">
      <h2 className="text-primary text-xl mb-5">All Todo</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {completedTodo
          ? completedTodo.map((todo) => (
              <SingleTodo key={todo.id} todo={todo} />
            ))
          : filteredTodoList
          ? filteredTodoList.map((todo) => (
              <SingleTodo key={todo.id} todo={todo} />
            ))
          : todoList?.map((todo) => <SingleTodo key={todo.id} todo={todo} />)}
      </div>
    </div>
  );
};

export default AllTodos;
