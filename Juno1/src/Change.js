import React, {useState } from 'react'
function Change(){

    const[name,setName]=useState('Welcome')
    const handlechange=()=>{
        if (name==="Welcome"){
            setName("Hello world")
        }
        else{
            setName("Welcome")
        }
    }

    return (
      <div>
          {name}
          <button onClick={handlechange}>change</button>
      </div>
    )
    
    }

export default Change;