import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import { useEffect, useState } from "react";
import Tasks from "./pages/taskpage";
import TasksPage from "./pages/taskpage";
import "./App.css";
function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem("tasks");
    if (raw) setTasks(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home tasks={tasks} />} />
        <Route
          path="/tasks"
          element={<TasksPage tasks={tasks} setTasks={setTasks} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
