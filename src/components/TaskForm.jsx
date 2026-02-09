//form to add tasks

import { useState } from "react";
import { useTaskStore } from "../store/taskStore";

export function TaskForm({onAddTask}) {
  const [title, setTitle] = useState("");

  const addTask = useTaskStore((state)=> state.addTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title.trim()) return;
    
    const newTask = {
      id: Date.now(), // temporary ID until backend integration
      title,
      status: "pending",
    };

    addTask(newTask);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter task title" value={title} onChange={(e)=> setTitle(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  )
}