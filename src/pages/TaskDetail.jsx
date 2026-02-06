import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function TaskDetail() {
  const {id} = useParams();
  const [task, setTask] = useState(null);

  useEffect(()=> {
    fetch(`http://localhost:4000/api/tasks/${id}`)
    .then(res => res.json())
    .then(data => setTask(data))
    .catch(err => console.log('error while fetching task:',err));
  }, [id]);

  if(!task) return <p>Loading task...</p>

  return(
    <div>
      <h2>Task Detail</h2>
      <p><strong>ID:</strong> {task.id} </p>
      <p><strong>Title:</strong> {task.title} </p>
      <p><strong>Status:</strong> {task.status} </p>
    </div>
  )
}

export default TaskDetail;