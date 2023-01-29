import React, { useContext } from "react";
import { TodoContext } from "../../../contexts/TodoDataProvider";
import SingleTodo from "./SingleTodo/SingleTodo";

const AllTodos = () => {
  const { todoList, filteredTodoList, completedTodo } = useContext(TodoContext);
  return (
    <div className="col-span-4">
      <h2 className="text-primary text-xl mb-5">All Todo</h2>
      {completedTodo > 0 || filteredTodoList > 0 || todoList.length > 0 ? ( // Checking whether any todo is available
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
      ) : (
        <div className="grid place-items-center h-96 text-2xl">
          You haven't added any todo. Please, add some todo first.
        </div>
      )}
    </div>
  );
};

export default AllTodos;
