import React, { useState } from 'react'

function Confirm(){
    const[title,setTitle]=useState('')
    const[fname,setFirstName]=useState('')
    const[lname,setLastName]=useState('')
    const[date,setDate]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[confirmPassword,setConfirmpassword]=useState('')
    const[submit, setSubmit]=useState(false)


const handleRegister=()=>{
  if(password === confirmPassword)
  setSubmit({submit:true})
  else
alert('Password should match')
}
const handleReset=(e)=>{
{setTitle('');setFirstName('');setLastName('');setDate('');setEmail('');setPassword('');setConfirmpassword('')}
}
  
    return (
      <div className='d-flex'>
        <div>{!submit && (
      <div className='w-50 m-3 p-3 rounded border border-5 border-dark'>
        <form className='row'>
          <div className='col-2'>
            <label className='form-label'>Title</label>
           <select className='form-select' name="title" onChange={(e)=>setTitle (e.target.value)} value={title}>
            <option></option>
            <option>Mr.</option>           <option>Ms.</option>
          </select>
         </div>
          <div className='col-5'>
            <label className='form-label'>First Name</label>
            <input type="text" class="form-control" name="fname" onChange={(e)=>setFirstName (e.target.value)} value={fname}></input>
          </div>
          <div className='col-5'>
            <label className='form-label'>Last Name</label>
            <input type="text" class="form-control" name="lname" onChange={(e)=>setLastName (e.target.value)} value={lname}></input>
          </div>
        <div className='col-6'>
              <label class="form-label">Date</label>
              <input type="date" class="form-control" name="date" onChange={(e)=>setDate (e.target.value)} value={date}>
              </input></div>
            <div className="col-6">
              <label class="form-label">Email</label>
              <input type="email" class="form-control" name="email" onChange={(e)=>setEmail (e.target.value)} value={email}></input>
          </div>
          <div class="col-6">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" name="password" onChange={(e)=>setPassword (e.target.value)} value={password}></input>
          </div>
          <div class="col-6">
            <label class="form-label">Confirm Password</label>
            <input type="password" class="form-control" name="confirmPassword" onChange={(e)=>setConfirmpassword (e.target.value)} value={confirmPassword}></input>
          </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label class="form-check-label" for="flexCheckDefault">Accept Terms and Conditions</label>
        </div>
        <button class="col-2 btn btn-primary" onClick={handleRegister}>Register</button>
        <button class="col-2 btn btn-secondary" onClick={handleReset}>Reset</button>
        </form></div>)}
        {submit &&(
        <div className='border border-4 border-dark m-5 p-5'>
        <div>Name: {title} {fname} {lname}</div>
        <div>Born Date: {date}</div>
        <div>Email ID: {email}</div>
      </div>)}
     </div>
     </div>
    )
        }

export default Confirm