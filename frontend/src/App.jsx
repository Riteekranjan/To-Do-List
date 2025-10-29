import { useEffect, useState } from "react";
import { getTasks, addTask, deleteTask } from "./api";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  const handleAdd = async () => {
    if (!title) return;
    await addTask(title);
    setTitle("");
    loadTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>To-Do App</h1>
      <div id="input-section">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <TaskList tasks={tasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
