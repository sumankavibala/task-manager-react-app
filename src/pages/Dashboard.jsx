//main task manager page

import { useContext, useEffect, useState } from "react";
import { TaskForm } from "../components/TaskForm";
import { TaskList } from "../components/TaskList";
import ClockClass from "../components/ClockClass";
import FocusInput from "../components/FocusInput";
import TaskReducerDemo from "../components/TaskReducerDemo";
import { TaskContext } from "../context/TaskContext";
import MemoDemo from "../components/MemoDemo";
import CallbackDemo from "../components/CallBackDemo";
// import { LoginForm } from "../components/loginForm";


export function Dashboard() {
  const {tasks, setTasks} = useContext(TaskContext);

  useEffect(()=>{
    fetch("http://localhost:4000/api/tasks")
    .then(res => res.json())
    .then(data => setTasks(data))
    .catch(err => console.error("Error fetching tasks:",err))
  }, [setTasks]);

  const addTasks = (task) => {
    setTasks(prev => [...prev, task]);
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <ClockClass />
      <FocusInput />
      <TaskReducerDemo />
      <CallbackDemo />
      <MemoDemo />
      <TaskForm onAddTask={addTasks}/>
      <TaskList tasks={tasks} />
    </div>
  )
}