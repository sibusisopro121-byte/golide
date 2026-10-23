import React, { useState } from "react";

function App() {
const [count,setCount] = useState(1)
  return(
    <div>
      <p>Now {count}</p>
      <button onClick={()=> setCount (count +1)}>Click</button>
      <button onClick={()=> setCount (count -1)}>reClick</button>
    </div>
  );
}

export default App;