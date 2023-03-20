import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskList() {
  const { tasksList } = useContext(TaskContext);

  if (tasksList.length === 0) {
    return <h3 className="text-4xl font-bold text-slate-400">No hay tareas disponibles...</h3>;
  }
  return (
    <section className=" w-full">
      <h2 className="text-white text-4xl font-semibold">All Tasks</h2>
      <ul id="task-list" className="grid grid-cols-4 gap-2 py-8">
        {tasksList.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </ul>
    </section>
  );
}
