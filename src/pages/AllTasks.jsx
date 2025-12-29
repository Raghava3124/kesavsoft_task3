import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllTasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/delete-task/${id}`);
    fetchTasks();
  };

  return (
    <div className="container">
      <h2 className="page-title">All Tasks</h2>

      <div className="task-list">
        {tasks.map(task => (
          <div key={task._id} className="task-card">
            <h4 className="task-title">{task.title}</h4>
            <p className="task-desc">{task.description}</p>

            <div className="task-actions">
              <Link to={`/edit/${task._id}`} className="btn edit-btn">Edit</Link>
              <button onClick={() => deleteTask(task._id)} className="btn delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
