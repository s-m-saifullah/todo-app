import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TodoDataProvider from "./contexts/TodoDataProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoDataProvider>
      <App />
    </TodoDataProvider>
  </React.StrictMode>
);
