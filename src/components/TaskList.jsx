//shows list of tasks

import OptimizedTaskItem from "./OptimizedTaskItem";

export function TaskList({ tasks }) {
  console.log('tasks--->>',tasks);
  return (
    <div>
      <h3>Tasks</h3>
      <ul>
        {tasks.map(task => (
          <OptimizedTaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  )
}
