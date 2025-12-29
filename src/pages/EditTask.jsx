import { useParams } from "react-router-dom";
import TaskForm from "../components/TaskForm";

const EditTask = () => {
  const { id } = useParams();

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.heading}>✏️ Edit Task</h2>
        <TaskForm taskId={id} />
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
    background: "linear-gradient(135deg, #43cea2, #185a9d)",
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

export default EditTask;
