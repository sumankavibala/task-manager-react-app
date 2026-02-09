import { create } from 'zustand';
//zustand store for tasks
export const useTaskStore = create((set) => ({
  tasks: [],

  //Actions
  setTasks: (tasks) => set({ tasks }),

  addtask: (task) => set((state) => ({ 
    tasks: [...state.tasks, task] 
  })),

  removeTask: (id) => set((state) =>
  ({ tasks: state.tasks.filter((t)=> t.id !== id) }
  )),

  updateTask: (id, updatedTask)=> set((state)=>({
    tasks: state.tasks.map((t)=>
      t.id === id ? { ...t, ...updatedTask } : t
    )
  })), 
}));
