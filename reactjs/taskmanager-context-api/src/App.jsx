import React from "react";
import { useTasks } from "./Context/TaskContext";

const App = () => {
  const { tasks, addTask, toggleTaskCompletion, deleteTask, fetchTasks } =
    useTasks();
  return <div>App</div>;
};

export default App;
