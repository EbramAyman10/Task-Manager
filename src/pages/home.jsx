
export default function Home({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  return (
    <>
      <div className="home container-fluid ms-3 mt-3 text-center">
        <h2>Welcome to Task Manager</h2>
        <div style={{ display: "flex", gap: 12 }}>
          <div className="box">
            <h2>total tasks</h2>
            <h2>{total}</h2>
          </div>
          <div className="box">
            <h2>completed tasks</h2>
            <h2>{completed}</h2>
          </div>
        </div>
      </div>
    </>
  );
}
