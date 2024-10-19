import React,{useState}from 'react';
function Counter()
{
    const [count ,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    const reset=()=>{
        setCount(0);
    }
    return(
<div>
<p>{count}</p>
<button onClick={increment} className="incre">Increment</button>
<button onClick={decrement} className="decre">Decrement</button>
<button onClick={reset} className="reset">Reset</button>
    </div>
    );
}
export default Counter;