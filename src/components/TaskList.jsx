//shows list of tasks

import { Link } from "react-router-dom";
import OptimizedTaskItem from "./OptimizedTaskItem";

export function TaskList({ tasks, onUpdateTask, onDeleteTask  }) {
  // console.log('tasks--->>', tasks);
  return (
    <div>
      <h3>Tasks</h3>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <Link to={`/dashboard/${task.id}`}>
              <OptimizedTaskItem task={task} />
            </Link>
            <button onClick={()=> onUpdateTask(task.id, {status: "Done"})}>Mark Done</button>
            <button onClick={()=> onDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
