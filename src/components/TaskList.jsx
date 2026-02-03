//shows list of tasks

export function TaskList({ tasks }) {
  console.log('tasks--->>',tasks);
  return (
    <div>
      <h3>Tasks</h3>
      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            {t.title} - {t.status}
          </li>
        ))}
      </ul>
    </div>
  )
}
