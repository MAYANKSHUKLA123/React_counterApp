import React, { useState } from 'react'
import './App.css'

const App=()=>{

    const [count,setCount]=useState(0)
    return(
        <div className="counter">
            <h1>This is my first Application on State</h1>
            <h1>This is my counter value {count}</h1>
            <button onClick={()=>(count>10? "":setCount(count+1))}>Increment</button>
            <button onClick={()=>(count<1? "":setCount(count-1))}>Decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    )
}
export default App;