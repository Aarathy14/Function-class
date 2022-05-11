import React, { useState } from 'react';
import './Reg.css'
function Reg(){
const[firstname,setFirstname]=useState('')
const[Lastname,setlastname]=useState('')
const[Name,setname]=useState('')
const[city,setcity]=useState('')
const[phoneNumber,setphoneNumber ]=useState('')
const[Email,setEmail]=useState('')
const[State,setState ]=useState('')
const[Zip,setZip ]=useState('')
const[Country,setCountry]=useState('')
const[Topic,setTopic]=useState('')

 
    return (
      <div className='t'>
          <h1><center>Register New Account</center></h1>
          <div className='dv'>
               
              <div><input type='text' placeholder='First Name'></input></div>
            
              <div><input type='text' placeholder='Last Name'></input></div>
            </div>  
            <div className='cv'>
              
                <input type='text'  placeholder="Name"></input>
            </div>
            <div className='hf'>
                <input type='text' placeholder='City'></input>
            </div>
            <div className='rf'>
                
                <input type='text' placeholder='Phone Number'></input>
            </div>
            <div className='rt'>
              
                <input type='email' placeholder='E-mail'></input>
                </div>
            <div className='nj'>
                <div className='grad'>
            <button className='jn' >Create Account</button>
            </div></div>    




            
        </div>

    )
}
  

export default Reg;