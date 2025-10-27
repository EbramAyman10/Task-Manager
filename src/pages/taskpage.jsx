import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/taskitemRow";
export default function TasksPage({ tasks, setTasks }) {
  const [message, setMessage] = useState("");
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    if (!message) return;
    const taskMessage = setTimeout(() => {
      setMessage("");
    }, 8000);
    return () => clearTimeout(taskMessage);
  }, [message]);

  const addTask = (task) => {
    const newTask = { ...task, id: uuidv4() };
    setTasks((prev) => [newTask, ...prev]);
    setMessage("Task added");
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    setMessage("task Deleted");
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const saveEdit = (updated) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === updated.id ? { ...t, ...updated } : t))
    );
    setEdit(null);
    setMessage("Task Updated");
  };

  const startEdit = (task) => setEdit(task);
  return (
    <div className="container text-center d-flex flex-column justify-content-center align-item-center">
      <h2>Tasks</h2>
      {edit ? (
        <div>
          <h3 className="mt-3">Edit Task</h3>
          <TaskForm
            initial={edit}
            onSave={(data) => saveEdit({ ...edit, ...data })}
            sumbitLabel="Update"
          />
          <button
            className="btn btn-primary mb-4 p-3"
            onClick={() => setEdit(null)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <h3 className="mt-3">Add Task</h3>
          <TaskForm onSave={addTask} />
        </div>
      )}
      <div>
        <table className="text-center d-flex flex-column text-center align-items-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length == 0 ? (
              <tr>
                <td>No Tasks Yet</td>
              </tr>
            ) : (
              tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onToggle={toggleTask}
                  onEdit={startEdit}
                  onDelete={deleteTask}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
