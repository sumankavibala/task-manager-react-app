//React.memo demo

import React, { useMemo } from "react";

//React.memo prevents re-render if props haven't changed
const OptimizedTaskItem = React.memo(({task}) => {
  console.log('Rendered:', task.title);
  return(
    <ul>
      {task.title} - {task.status}
    </ul>
  );
});

export default OptimizedTaskItem;