//useReducer demo

import { useReducer } from "react";
import { TaskList } from "./TaskList";

function reducer(state, action) {
  switch  (action.type) {
    case 'ADD': return [...state, {id: Date.now(), title: action.title, status: "Pending"}];
    case 'REMOVE': return state.filter(task=> task.id !== action.id);
    default: return state;
  }
}

function TaskReducerDemo() {
  const [tasks, dispatch] = useReducer(reducer, []);

  return (
    <div>
      <h3>useReducer Demo</h3>
      <button onClick={()=> dispatch({type: 'ADD', title: 'New Task'})}>Add Task</button>
      <TaskList tasks={tasks} />
      {tasks.length > 0 && (
        <button onClick={()=> dispatch({type: 'REMOVE', id: tasks[0].id})}>Remove First Task</button>
      )}
    </div>
  )
}

export default TaskReducerDemo;