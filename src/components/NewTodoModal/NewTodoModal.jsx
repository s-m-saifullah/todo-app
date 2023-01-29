import React, { useContext, useState } from "react";
import { TodoContext } from "../../contexts/TodoDataProvider";
import { addToDb, getStoredTodo } from "../../utilities/crudInLocalStorage";

const NewTodoModal = () => {
  const { setCreateNewTodo, tags, setTodoList } = useContext(TodoContext);
  const [checked, setChecked] = useState([]);

  // Add/Remove checked item from list
  const handleChecked = (e) => {
    let updatedList = [...checked];

    // Setting checked tags based on user input
    if (e.target.checked) {
      // Add a tag to checked tag list
      updatedList = [...checked, e.target.value];
    } else {
      // Remove a tag from checked tag list
      updatedList.splice(checked.indexOf(e.target.value), 1);
    }
    setChecked(updatedList);
  };

  //   Close Add Todo Modal
  const closeModal = () => {
    setCreateNewTodo((prevState) => !prevState);
  };

  //   Add New Todo
  const handleAddTodo = (e) => {
    e.preventDefault();

    const form = e.target;
    const todoTitle = form.todoTitle.value;
    const todoDescription = form.todoDescription.value;

    // New Todo Object
    const todos = {
      todoTitle,
      todoDescription,
      todoTags: checked,
      completed: false,
    };

    addToDb(todos); // Add todo to local storage
    setCreateNewTodo(false);
    // Getting todos from local storage
    const prevTodos = getStoredTodo("todos");

    // Updating todo list for UI rerendering
    setTodoList([...prevTodos]);
  };

  return (
    <div
      onClick={closeModal}
      className="absolute z-10 inset-0 top-20 md:top-0 grid md:py-10 lg:place-items-center md:bg-black md:bg-opacity-70"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full md:w-3/4 lg:w-1/2 rounded-2xl mx-auto py-4 md:py-8 px-7 md:px-14 shadow-lg h-max"
      >
        <form onSubmit={handleAddTodo}>
          <div className="flex justify-between mb-5">
            <button onClick={closeModal} className="text-primary">
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primary px-10 py-3 rounded-xl text-white"
            >
              Add
            </button>
          </div>
          {/* Title Input */}
          <div className="mb-5">
            <label
              htmlFor="todo-title"
              className="text-primary font-bold text-xl block mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="todo-title"
              name="todoTitle"
              className="bg-input w-full rounded-lg px-5 py-3 text-primary placeholder:text-[#7C7970]"
              placeholder="add a title"
              required
            />
          </div>

          {/* Description Input */}
          <div className="mb-5">
            <label
              htmlFor="todo-description"
              className="text-primary font-bold text-xl block mb-2"
            >
              Description
            </label>
            <textarea
              type="text"
              name="todoDescription"
              id="todo-description"
              className="bg-input w-full rounded-lg px-5 py-3 h-28 text-primary placeholder:text-[#7C7970]"
              placeholder="add a description"
              required
            />
          </div>

          {/* Tag Input */}
          <div>
            <p
              htmlFor="todo-description"
              className="text-primary font-bold text-xl block mb-2"
            >
              Tags
            </p>
            <div className="flex flex-wrap md:flex-nowrap md:gap-3">
              {tags.map((tag) => (
                <div key={tag.id} className="w-1/2">
                  <input
                    onChange={handleChecked}
                    type="checkbox"
                    name="tag"
                    id={tag.tagName}
                    value={tag.tagName}
                    className="peer hidden"
                  />
                  <label
                    htmlFor={tag.tagName}
                    className={`flex items-center cursor-pointer peer-checked:bg-gray-200 px-3 py-2 rounded-lg`}
                  >
                    <div
                      className={`w-10 h-10 ${tag.color} rounded-full inline-block mr-2`}
                    ></div>

                    <span>{tag.tagName}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTodoModal;
