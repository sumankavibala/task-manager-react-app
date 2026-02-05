//root component with routing

import { TaskProvider } from "./context/TaskContext";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";

export function App() {
  return (
    <TaskProvider>
      <div>
        <h1> Task Manager Frontend</h1>
        <Home />
        <Dashboard />
      </div>
    </TaskProvider>
  )
}