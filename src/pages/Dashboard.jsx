//main task manager page

import { useEffect, useState } from "react";
import { TaskForm } from "../components/TaskForm";
import { TaskList } from "../components/TaskList";
import ClockClass from "../components/ClockClass";
import FocusInput from "../components/FocusInput";
// import { LoginForm } from "../components/loginForm";


export function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:4000/api/tasks")
    .then(res => res.json())
    .then(data => setTasks(data))
    .catch(err => console.error("Error fetching tasks:",err))
  }, []);

  const addTasks = (task) => {
    setTasks(prev => [...prev, task]);
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <ClockClass />
      <FocusInput />
      <TaskForm onAddTask={addTasks}/>
      <TaskList tasks={tasks} />
      {/* <LoginForm /> */}
    </div>
  )
}