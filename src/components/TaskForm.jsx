import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./TaskForm.css"; // <-- new CSS file

const TaskForm = ({ taskId }) => {
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: "",
    description: ""
  });

  useEffect(() => {
    if (taskId) {
      axios.get("http://localhost:5000/tasks")
        .then(res => {
          const found = res.data.find(t => t._id === taskId);
          if (found) setTask(found);
        });
    }
  }, [taskId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (taskId) {
      await axios.put(`http://localhost:5000/update-task/${taskId}`, task);
    } else {
      await axios.post("http://localhost:5000/add-task", task);
    }

    navigate("/tasks");
  };

  return (
    <div className="task-form-container">
      <h2>{taskId ? "Edit Task" : "Create New Task"}</h2>
      <form onSubmit={handleSubmit} className="task-form">
        <label>
          Title
          <input
            type="text"
            placeholder="Enter task title"
            value={task.title}
            onChange={e => setTask({ ...task, title: e.target.value })}
            required
          />
        </label>

        <label>
          Description
          <textarea
            placeholder="Enter task description"
            value={task.description}
            onChange={e => setTask({ ...task, description: e.target.value })}
            required
          />
        </label>

        <button type="submit" className="submit-btn">
          {taskId ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
