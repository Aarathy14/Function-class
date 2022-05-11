import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import React, {useState}  from 'react' 
 
function ToggleAge(){
   const[fname,setFirstName]=useState('')
   const[lname,setLastName]=useState('')
   const[age,setAge]=useState('')
   const[showAge, setShowAge]=useState(false)
   const[submitted,setSubmited]=useState(false)

    const handleSubmit=()=>{
        setSubmited(true)
    }

   const handleShowAge=() =>{
          setShowAge(!showAge)
   }

    return ( 
        <div>   
            {!submitted&&(                                                                                                                                                                                                                                                                                                                                                                       
            <div class="w-25 m-5 p-2 border border-3 border-dark">
            <label>First Name</label>
            <input type="text" value={fname} onChange={(e)=>setFirstName(e.target.value)}></input><br/>
            <label>Last Name</label>
            <input type="text" value={lname}  onChange={(e)=>setLastName(e.target.value)}></input><br/>
            <label>Age</label>
            <input type="number" value={age}  onChange={(e)=>setAge(e.target.value)}></input><br/>
            <button type='submit' onClick={handleSubmit}>Submit</button>
            </div>
            )}
            {submitted&&(
            <div>
            <h4>Name : {fname+lname}</h4>
            {showAge&&(
            <h4>Age : {age}</h4>)}
            <button onClick={handleShowAge}>{showAge?"Hide Age":"Show Age"}</button>
            </div>
            )}
        </div>
                    
            )
            }
 
export default ToggleAge;

        


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
