// use local storage to manage todo data
const addToDb = (todo) => {
  let todos = [];

  //get todos from local storage
  const storedTodo = localStorage.getItem("todos");
  todos = JSON.parse(storedTodo);

  if (storedTodo) {
    const todoIds = todos.map((todo) => todo.id).sort((a, b) => a - b);
    console.log(todoIds);
    todo.id = todoIds[todos.length - 1] + 1;
    todos = [...todos, todo];
  } else {
    todo.id = 1;
    todos = [todo];
  }

  localStorage.setItem("todos", JSON.stringify(todos));
};

const getStoredTodo = () => {
  let todos = [];

  //get todo from local storage
  const todoLocal = localStorage.getItem("todos");
  if (todoLocal) {
    todos = JSON.parse(todoLocal);
  }
  return todos;
};

const removeFromDb = (id) => {
  const storedTodo = localStorage.getItem("todos");
  if (storedTodo) {
    const todos = JSON.parse(storedTodo);
    const remainingTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(remainingTodos));
  }
};

const deleteTodo = () => {
  localStorage.removeItem("todos");
};

export { addToDb, getStoredTodo, removeFromDb, deleteTodo };
