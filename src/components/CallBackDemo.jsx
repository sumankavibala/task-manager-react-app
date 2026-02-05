//useCallback Demo

import React, { useCallback, useMemo, useState } from "react";

function Child ({onClick}) {
  console.log('Child rendered');
  return <button onClick={onClick}>Click me</button>
};

const MemoizeChild = React.memo(Child);

function CallbackDemo() {
  const [count, setCount] = useState(0);

  //useCallback memoizes the function reference
  const handleClick = useCallback(()=> {
    setCount(c => c+1);
  }, []);

  return (
    <div>
      <h3>useCallback Demo</h3>
      <p>Count: {count}</p>
      <MemoizeChild onClick={handleClick} />
    </div>
  )
}

export default CallbackDemo;

//Benefit: Without useCallback, the child would re-render every time because the function reference changes.