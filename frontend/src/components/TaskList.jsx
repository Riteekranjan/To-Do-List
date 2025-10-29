
export default function TaskList({ tasks, onDelete }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task) => (
        <li
          key={task._id}
          style={{
            marginTop:"1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "8px",
            padding: "8px",
            border: "1px solid #060000ff",
            borderRadius: "5px",
            width: "300px",
          }}
        >
          <span>{task.title}</span>
          <button
            onClick={() => onDelete(task._id)}
            style={{
              background: "black",
              color: "white",
              border: "none",
              borderRadius: "4px",
              padding: "4px 8px",
              cursor: "pointer",
            }}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}
