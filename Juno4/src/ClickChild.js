import React, { useState } from 'react'

function Clickchild(props){
    const[showinfo,setShowInfo]=useState(false)
    const handleshow=(e)=>{setShowInfo(!showinfo)}
  
    return (
      <div className='aaru'>
          <div><h4>{props.title}<button className='dhanu'onClick={handleshow}>{showinfo?'-':'+'}</button></h4></div>
        {   showinfo && <div className='Archu'>
               {props.info}
               </div>
  }
      </div>
    )
  }


export default Clickchild