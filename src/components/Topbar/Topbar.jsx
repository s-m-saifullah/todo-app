import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { TodoContext } from "../../contexts/TodoDataProvider";

const Topbar = () => {
  const { setCreateNewTodo } = useContext(TodoContext);

  return (
    <div className="flex justify-between py-5 text-primary text-4xl">
      <p className="font-bold">todo</p>
      <div
        onClick={() => {
          setCreateNewTodo((prevState) => !prevState);
        }}
        className="cursor-pointer"
      >
        <FaPlus />
      </div>
    </div>
  );
};

export default Topbar;
