import AllTodos from "./AllTodos/AllTodos";
import Sidebar from "./Sidebar/Sidebar";

const TodoListContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 md:gap-14 lg:gap-10 gap-y-10">
      <Sidebar />
      <AllTodos />
    </div>
  );
};

export default TodoListContainer;
