//form to add tasks

import { useState } from "react";

export function TaskForm({onAddTask}) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title.trim()) return;
    
    const newTask = {
      id: Date.now(), // temporary ID until backend integration
      title,
      status: "pending",
    };

    onAddTask(newTask);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter task title" value={title} onChange={(e)=> setTitle(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  )
}