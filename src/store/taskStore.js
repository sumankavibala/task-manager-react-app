import { create } from 'zustand';
//zustand store for tasks
export const useTaskStore = create((set) => ({
  tasks: [],

  // //Actions
  // setTasks: (tasks) => set({ tasks }),

  // addtask: (task) => set((state) => ({ 
  //   tasks: [...state.tasks, task] 
  // })),

  // removeTask: (id) => set((state) =>
  // ({ tasks: state.tasks.filter((t)=> t.id !== id) }
  // )),

  // updateTask: (id, updatedTask)=> set((state)=>({
  //   tasks: state.tasks.map((t)=>
  //     t.id === id ? { ...t, ...updatedTask } : t
  //   )
  // })), 


  //Fetch tasks from backend
  fetchTasks: async() => {
    try {
      const res = await fetch('http://localhost:4000/api/tasks');
      const data = await res.json();
      set({tasks: data});
    } catch (error) {
      console.error('Error fetching tasks:',error)
    }
  },

  //Add task to backend
  addTask: async(task) => {
    try {
      const res = await fetch('http://localhost:4000/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(task),
      });
      const newTask = await res.json();
      set((state) => ({tasks: [...state.tasks, newTask]}));
    } catch (error) {
      console.error("Error adding task:",error);
    };
  },

  updateTask: async(id, updatedTask) => {
    try {
      const res = await fetch(`http://localhost:4000/api/tasks/${id}`,{
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updatedTask)
      });
      const data = await res.json();
      set((state) => ({
        tasks: state.tasks.map((i)=> (i.id === id ? data : i))
      }));
    } catch (error) {
      console.error('Error updating task:',error);
    }
  },

  removeTask: async(id) => {
    try {
      const res = await fetch(`http://localhost:4000/api/tasks/${id}`,{
        method: 'DELETE',
      });
      set((state)=> ({
        tasks: state.tasks.filter((t)=> t.id !== id)
      }));
    } catch (error) {
      console.error('Error deleting task:',error)
    }
  }
}));
