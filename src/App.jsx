import { useContext } from "react";
import NewTodoModal from "./components/NewTodoModal/NewTodoModal";
import TodoListContainer from "./components/TodoListContainer/TodoListContainer";
import Topbar from "./components/Topbar/Topbar";
import { TodoContext } from "./contexts/TodoDataProvider";

function App() {
  const { createNewTodo } = useContext(TodoContext);
  return (
    <div className="container mx-auto px-5 lg:px-0">
      <Topbar />
      {createNewTodo ? <NewTodoModal /> : null}
      <TodoListContainer />
    </div>
  );
}

export default App;
