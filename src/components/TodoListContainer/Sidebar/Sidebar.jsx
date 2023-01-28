import React, { useContext } from "react";
import { TodoContext } from "../../../contexts/TodoDataProvider";
import { getStoredTodo } from "../../../utilities/crudInLocalStorage";

const Sidebar = () => {
  const {
    tags,
    todoList,
    setTodoList,
    filteredTodoList,
    setFilteredTodoList,
    setCompletedTodo,
  } = useContext(TodoContext);

  //   Filter Task Based on Tags
  const filterTodo = (tag) => {
    const filteredTodo = todoList.filter((todo) => todo.todoTags.includes(tag));
    setFilteredTodoList(filteredTodo);
  };

  //   Filter Tasks Based on Completed
  const handleHideDoneTodo = (e) => {
    let incompleteTodos;
    if (filteredTodoList) {
      incompleteTodos = filteredTodoList.filter(
        (todo) => todo.completed === false
      );
    } else {
      incompleteTodos = todoList.filter((todo) => todo.completed === false);
    }

    if (e.target.checked) {
      setCompletedTodo(incompleteTodos);
    } else {
      setCompletedTodo(null);
    }
  };

  return (
    <div className="col-span-1">
      <h1 className="text-primary text-xl">Filter</h1>
      <div className="flex md:flex-col gap-3 my-5 flex-wrap justify-center">
        <div
          onClick={() => {
            setTodoList(getStoredTodo().sort((a, b) => a.id - b.id));
            setCompletedTodo(null);
            setFilteredTodoList(null);
          }}
        >
          <input
            type="radio"
            name="tag"
            id="all-todo"
            defaultChecked
            className="peer hidden"
          />
          <label
            htmlFor="all-todo"
            className="flex items-center cursor-pointer peer-checked:bg-gray-200 py-2 peer-checked:px-3 rounded-md"
          >
            <div
              className={`w-7 md:w-10 h-7 md:h-10 bg-orange-200 rounded-full inline-block mr-2`}
            ></div>
            <span className="text-primary">All Todo</span>
          </label>
        </div>
        {/* Displaying Tags for Filtering */}
        {tags.map((tag) => (
          <div onClick={() => filterTodo(tag.tagName)} key={tag.id}>
            <input
              type="radio"
              name="tag"
              id={tag.tagName}
              value={tag.tagName}
              className="peer hidden"
            />
            <label
              htmlFor={tag.tagName}
              className="flex items-center peer-checked:bg-gray-200 py-2 cursor-pointer peer-checked:px-3 rounded-md"
            >
              <div
                className={`w-7 md:w-10 h-7 md:h-10 ${tag.color} rounded-full inline-block mr-2`}
              ></div>
              <span className="text-primary">{tag.tagName}</span>
            </label>
          </div>
        ))}
      </div>
      <label htmlFor="hide-done-todo" className="cursor-pointer text-primary">
        <input
          onChange={handleHideDoneTodo}
          type="checkbox"
          id="hide-done-todo"
          className="mr-1"
        />
        Hide Done Tasks
      </label>
    </div>
  );
};

export default Sidebar;
