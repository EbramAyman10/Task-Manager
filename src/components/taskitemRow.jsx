export default function TaskItem({ task, onToggle, onEdit, onDelete }) {
  return (
    <tr className={task.completed? 'task done m-3' : 'task m-3'}>
      <td>
        <input 
        className='m-3'
          type="checkbox"
          checked={!!task.completed}
          onChange={() => onToggle(task.id)}
        />
      </td>
      <td>{task.title}</td>
      <td>{task.desc}</td>
      <td>{task.due}</td>
      <td>{task.priority}</td>
      <td>
        <button className="btn btn-warning m-3" onClick={() => onEdit(task)}>Edit</button>
        <button className="btn btn-danger m-3" onClick={() => onDelete(task.id)}>Delete</button>
      </td>
    </tr>
  );
}
