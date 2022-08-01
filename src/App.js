import React, { useState } from 'react';  
      
export default function CountApp() {  
  
  const [count, setCount] = useState(0);  
  const handleButtonClick = () => {
		setCount(count + 1)	
  }
  const handleButtonClickmoins = () => {
		setCount(count - 1)
     }	
 return (  
    <div>
      <p> clicke {count} fois.</p>
      <button onClick={handleButtonClick}>+</button>
      <button onClick={handleButtonClickmoins}>-</button>
    </div>
  );
}

