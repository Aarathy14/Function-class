import React, { useState} from 'react';
import './Count.css'
function Count(){
const[count,setCount]= useState(0);
    
    const handleIncrement = () => {
        setCount(count + 1 )
    }
   const handleDecrement = () => {
        setCount(count - 1 )
    }
    
        return (
            <div>
                <h2>count is:{count}</h2>
                <button class="cnt" onClick={handleIncrement}>Increment</button>
                <button class="cnt1" onClick={handleDecrement}>Decrement</button>
            </div>
        )
    }


export default Count