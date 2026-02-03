//root component with routing

import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";

export function App() {
  return (
    <div>
      <h1> Task Manager Frontend</h1>
      <Home />
      <Dashboard />
    </div>
  )
}