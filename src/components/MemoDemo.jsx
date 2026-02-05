// useMemo Demo

import { useMemo, useState } from "react";

function MemoDemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  //Expensive computation simulated
  const doubleNumber = useMemo(()=> {
    console.log('Computing...');
    return number * 2;
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
    padding: '10px',
    marginTop: '10px'
  };

  return (
    <div>
      <h3>useMemo Demo</h3>
      <input type="number" value={number} onChange={(e)=> setNumber(parseInt(e.target.value))} />
      <button onClick={()=> setDark(prev => !prev)}>Toggle Theme</button>
      <div style={themeStyles}>Double: {doubleNumber}</div>
    </div>
  );
};

export default MemoDemo;

//Benefit: The expensive computation only runs when number changes, not when theme toggles.