import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { FcDataSheet } from "react-icons/fc";
import { FaCopyright, FaGithubAlt, FaTwitter } from "react-icons/fa";
import appLogo from "/tasks-app.svg";

function App() {
  const currentYear = new Date().getFullYear()
  return (
    <main id="App" className="px-12 py-16 bg-gray-700 min-h-screen w-full">
      <nav className="mb-10">
        <h1 className="text-white text-6xl font-bold uppercase border-b-2 border-white">
          <img src={appLogo} alt="TaskApp Logo" width="80px" height="80px" className="inline mr-2" /> <span className="text-slate-800">TASKS</span>APP
        </h1>
      </nav>
      <TaskForm />
      <TaskList />
      <footer className="py-8 w-full flex flex-col justify-center items-center text-white bg-transparent">
        <p className="text-center text-md">
          <FaCopyright className="inline mb-1" /> {currentYear} <span className="text-slate-800 font-bold">SoftwareDevOne</span>. All rights reserved
        </p>
        <div className="text-4xl">
          <a href="https://github.com/Karls92" target="_blank" title="My Github" className="text-slate-900 px-2"><FaGithubAlt className="inline mb-1 scale-100 transition-transform duration-500 ease-out hover:scale-125" /></a>
          <a href="https://twitter.com/softwareDevOne" target="_blank" title="My Twitter" className="text-sky-400 px-2"><FaTwitter className="inline mb-1 scale-100 transition-transform duration-500 ease-out hover:scale-125" /></a>
        </div>
      </footer>
    </main>
  );
}
export default App;
