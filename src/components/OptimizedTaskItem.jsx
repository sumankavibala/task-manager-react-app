//React.memo demo

import React, { useMemo } from "react";

//React.memo prevents re-render if props haven't changed
const OptimizedTaskItem = React.memo(({task}) => {
  debugger;
  console.log('Rendered:', task.title);
  return(
    <li>
      {task.title} - {task.status}
    </li>
  );
});

export default OptimizedTaskItem;