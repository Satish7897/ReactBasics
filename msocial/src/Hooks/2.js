import React from 'react'
import {useState} from 'react'
function UseContextExample() {
    const initialValue=0;
    const[count,setCount]=useState(initialValue);
    return (
        <div>
            Count:{count}
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>Increamet</button>
            <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
            <button onClick={()=>setCount(initialValue)}>Reset</button>
        </div>
    )
}

export default UseContextExample
