import { useEffect, useRef } from "react";


function FocusInput() {
  const inputRef = useRef(null);

  useEffect(()=> {
    console.log('inputRef.current.focus();-->>',inputRef.current.focus());
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} placeholder="Auto-focused input" />
    </div>
  )
}

export default FocusInput;