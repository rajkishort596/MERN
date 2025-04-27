import {useState} from 'react'

const Counter = () => {
    const [count ,setCount]= useState(0);  
    console.log("component rendered");
    const increment = ()=>{
        setCount(count + 1);
        console.log(`count: ${count}`);
    } 
    const decrement = ()=>{
        setCount(count - 1);
    } 
    const reset = ()=>{
        setCount(0);
    } 

  return (
    <div className='counter'>
        <h1 style={{fontSize: "5rem"}}>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter