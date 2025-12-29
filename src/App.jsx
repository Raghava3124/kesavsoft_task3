import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import AllTasks from "./pages/AllTasks";
import EditTask from "./pages/EditTask";

function App() {
  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/tasks" element={<AllTasks />} />
        <Route path="/edit/:id" element={<EditTask />} />
      </Routes>
  
    </>
  );
}

export default App;
