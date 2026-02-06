//root component with routing

import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { TaskProvider } from "./context/TaskContext";
import TaskDetail from "./pages/TaskDetail";

// import { TaskProvider } from "./context/TaskContext";
// import { Dashboard } from "./pages/Dashboard";
// import { Home } from "./pages/Home";

// export function App() {
//   return (
//     <TaskProvider>
//       <div>
//         <h1> Task Manager Frontend</h1>
//         <Home />
//         <Dashboard />
//       </div>
//     </TaskProvider>
//   )
// }


export function App() {
  return (
    <Router>
      <TaskProvider>
        <div>
          <h1>Task Manager Frontend</h1>
          {/*Navigation Menu */}
          <nav>
            <Link to="/">Home</Link> | {" "}
            <Link to="/dashboard">Dashboard</Link>
          </nav>

          {/* Define routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/:id" element={<TaskDetail />} />
          </Routes>
        </div>
      </TaskProvider>
    </Router>
  )
}