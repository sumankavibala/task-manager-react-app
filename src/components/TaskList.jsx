//shows list of tasks

import { Link } from "react-router-dom";
import OptimizedTaskItem from "./OptimizedTaskItem";

export function TaskList({ tasks }) {
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
          </li>
        ))}
      </ul>
    </div>
  )
}
