import { useEffect, useState } from "react";

export default function TaskForm({
  onSave,
  initial = {
    title: "",
    desc: "",
    due: "",
    priority: "medium",
    completed: false,
  },
  sumbitLabel = "Save",
}) {
  const [title, setTitle] = useState(initial.title || "");
  const [desc, setDesc] = useState(initial.desc || "");
  const [due, setDue] = useState(initial.due || "");
  const [priority, setPriority] = useState(initial.priority || "");
  const [error, setError] = useState("");

  useEffect(() => {
    setTitle(initial.title || "");
    setDesc(initial.desc || "");
    setDue(initial.due || "");
    setPriority(initial.priority || "");
    setError("");
  }, [initial?.id]);

  const submit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    const payload = {
      ...(initial?.id ? { id: initial.id } : {}),
      title: title.trim(),
      desc: desc.trim(),
      due,
      // normalize priority, default to initial priority or 'medium'
      priority: (priority || initial.priority || "medium").toLowerCase(),
      completed: initial.completed || false,
    };

    onSave(payload);
    if (!initial?.id) {
      setTitle("");
      setDesc("");
      setDue("");
      // reset to default priority after save for a better UX
      setPriority(initial.priority || "medium");
    }
    setError("");
  };

  return (
    <>
      <form
        onSubmit={submit}
        className="form task-form d-flex text-center justify-content-center align-items-center my-3"
      >
        <div>
          <label htmlFor="task-title" className="visually-hidden">
            Title
          </label>
          <input
            id="task-title"
            className="m-2"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            aria-label="Task title"
            required
          />
        </div>

        <div>
          <label htmlFor="task-desc" className="visually-hidden">
            Description
          </label>
          <input
            id="task-desc"
            className="m-2"
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Enter description"
            aria-label="Task description"
          />
        </div>

        <div>
          <label htmlFor="task-due" className="visually-hidden">
            Due date
          </label>
          <input
            id="task-due"
            className="m-2"
            type="date"
            value={due}
            onChange={(e) => setDue(e.target.value)}
            aria-label="Due date"
          />
        </div>
        <div>
          <label htmlFor="task-priority" className="visually-hidden">
            Priority
          </label>
          <select
            id="task-priority"
            className="m-2"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            aria-label="Priority"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <button className="btn btn-primary m-2 p-3" type="submit">
            {sumbitLabel}
          </button>
        </div>
        {error && <div className="form-error">{error}</div>}
      </form>
    </>
  );
}
