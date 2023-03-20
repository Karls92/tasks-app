import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { HiArchiveBoxArrowDown, HiOutlineCheck, HiClock } from "react-icons/hi2";

export default function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  let taskStatusStyle = 'uppercase px-4 py-px border-none rounded-xl '
  taskStatusStyle += task.completed ? 'bg-green-500' : 'bg-orange-500'
  const icon = task.completed ? <HiOutlineCheck className="inline mb-1" /> : <HiClock className="inline mb-1" />

  return (
    <li className="flex flex-col justify-between bg-gray-800 text-white p-4 rounded-md shadow-none transition-all duration-300 ease-linear hover:shadow-md hover:shadow-slate-300">
      <div>
        <h3 className="text-xl font-bold capitalize leading-tight mb-4">{task.title}</h3>
        <p className="text-sm text-gray-400 mb-4 leading-normal">{task.description}</p>
      </div>
      <div className="flex justify-between items-center">
      <span className={taskStatusStyle }>
        { task.completed ? 'Completed' : 'Pending' } { icon }
      </span>
      <button className="text-red-600 text-4xl bg-transparent border-none rounded-none py-2 transition-colors duration-200 ease-in hover:text-red-400" onClick={(e) => deleteTask(task.id)}>
        <HiArchiveBoxArrowDown />
      </button>
      </div>
    </li>
  );
}
