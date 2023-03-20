import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { HiOutlineSquaresPlus } from "react-icons/hi2";

export default function TaskForm() {
  const { createTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description, status);
    setTitle("");
    setDescription("");
    setStatus(false);
  };
  return (
    <section className="py-8 max-w-md">
      <form
        className="p-8 border-2 rounded-lg border-gray-400"
        onSubmit={handleSubmit}
      >
        <h2 className="text-white text-4xl font-semibold mb-8">
          Create new task
        </h2>
        <input
          className="bg-slate-800 border-none rounded-md py-2 px-4 w-full text-white text-sm mb-4"
          type="text"
          placeholder="Task title..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-800 border-none rounded-md py-2 px-4 w-full text-white text-sm mb-4"
          placeholder="Task description..."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <select
          className="bg-slate-800 border-none rounded-md py-2 px-4 w-full text-white text-sm mb-4"
          onChange={e => setStatus(e.target.value)} value={status}
        >
          <option value={false}>Pending</option>
          <option value={true}>Completed</option>
        </select>
        <button className="px-8 py-2 text-white text-lg bg-sky-500 transition-colors duration-200 ease-in hover:bg-sky-700">
          Save Task <HiOutlineSquaresPlus className="inline text-2xl mb-px" />{" "}
        </button>
      </form>
    </section>
  );
}
