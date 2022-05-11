import React, { useState } from 'react'
function Student(){
    const[student,setStudent]=useState('Aarathy')
    const[age,setAge]=useState(21)


    return (
      <div className='text-danger fst-italic'>
          My name is  <span >{student}</span>	
          <br/>
          My Age is<span className='text-info'>{age}</span>	
      </div>
    )
  
}

export default Student