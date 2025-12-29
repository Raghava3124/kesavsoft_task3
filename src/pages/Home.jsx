import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Task Management Application</h1>
        <p style={styles.subtitle}>
          Add, View, Edit and Delete tasks easily.
        </p>

        <div style={styles.features}>
  <Link to="/add" style={styles.link}>
    <div style={styles.card}>📝 Create Tasks</div>
  </Link>

  <Link to="/tasks" style={styles.link}>
    <div style={styles.card}>✏️ Edit Tasks</div>
  </Link>

  <Link to="/tasks" style={styles.link}>
    <div style={styles.card}>🗑️ Delete Tasks</div>
  </Link>

  <Link to="/tasks" style={styles.link}>
    <div style={styles.card}>📋 View All Tasks</div>
  </Link>
</div>

      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: "85vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    padding: "40px",
    color: "#fff"
  },

  hero: {
    textAlign: "center",
    maxWidth: "900px"
  },

  title: {
    fontSize: "3rem",
    fontWeight: "800",
    marginBottom: "15px"
  },

  subtitle: {
    fontSize: "1.2rem",
    opacity: 0.9,
    marginBottom: "40px"
  },

  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px"
  },

  card: {
    background: "rgba(255,255,255,0.12)",
    padding: "25px",
    borderRadius: "16px",
    fontSize: "1.1rem",
    fontWeight: "600",
    backdropFilter: "blur(8px)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    transition: "0.3s"
  }
};

export default Home;
