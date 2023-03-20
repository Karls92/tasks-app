import { createContext, useEffect, useState } from "react";
import { tasks } from "../data/tasks";

export const TaskContext = createContext(); // nombre del contexto

export function TaskContextProvider(props) {
  const [taskList, setTaskList] = useState([]);

  // tasks will be used for this component when this one is fully loaded.
  useEffect(() => {
    setTaskList(tasks);
  }, []);

  function createTask(taskTitle, taskDescription, taskStatus) {
    const lastTask = taskList.length === 0 ? { id: 0 } : taskList[taskList.length - 1];
    const newTask = {
      id: lastTask.id + 1,
      title: taskTitle,
      description: taskDescription,
      completed: taskStatus
    };
    setTaskList([...taskList, newTask]);
    alert("A new task has been created!");
  }
  function deleteTask(taskId) {
    const newTaskList = taskList.filter((task) => task.id !== taskId);
    setTaskList(newTaskList);
    alert("Task has been removed!");
  }
  return (
    <TaskContext.Provider
      value={{ tasksList: taskList, createTask, deleteTask }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
