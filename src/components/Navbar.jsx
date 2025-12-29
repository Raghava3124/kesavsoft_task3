import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h3 style={styles.logo}>Task Manager</h3>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/add" style={styles.link}>
          Add Task
        </Link>
        <Link to="/tasks" style={styles.link}>
          All Tasks
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 40px",
    background: "linear-gradient(135deg, #1d2671, #c33764)",
    color: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
    position: "sticky",
    top: 0,
    zIndex: 1000
  },

  logo: {
    fontSize: "1.5rem",
    fontWeight: "700",
    letterSpacing: "1px"
  },

  links: {
    display: "flex",
    gap: "25px"
  },

  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "500",
    padding: "6px 14px",
    borderRadius: "20px",
    transition: "all 0.3s ease",
  }
};

export default Navbar;
