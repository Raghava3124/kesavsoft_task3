import TaskForm from "../components/TaskForm";

const AddTask = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.heading}>➕ Add New Task</h2>
        <TaskForm />
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    padding: "40px"
  },

  card: {
    width: "100%",
    maxWidth: "500px",
    background: "#fff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.2)"
  },

  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#333"
  }
};

export default AddTask;
