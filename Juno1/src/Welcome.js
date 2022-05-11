import React, {useState} from 'react'
function Welcome (){
  
    return (
     <div>
      <div className='text-center m-3 p-3'>
       <h1>WELCOME !</h1>
       </div>
       <div className='d-flex justify-content-center'>
       <div>       
       <div className='m-5'><h1>ALREADY REGISTERED?</h1></div>
       <div className='m-5'><input type='text' placeholder='Email'></input><br/></div>
       <div className='m-5'><input type='text' placeholder='Password'></input><br/></div>
       <div className='m-5'><button className='ti'>Sign In </button></div>
       </div>
       <div className='border border-1 border-solid border-dark'></div>
       <div >
        <div className='m-5'><h1>NEW CUSTOMER?</h1></div>
        <div className='m-5'><input type='text' placeholder='Username'></input><br/></div>
       <div className='m-5'> <input type='text' placeholder='Password'></input><br/></div>
        <div className='m-5'><button className='or'>Create Account</button></div>
        </div></div>
        </div>
    )
  }


export default Welcome;