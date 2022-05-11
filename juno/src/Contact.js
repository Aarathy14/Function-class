import { useState } from "react"
import './Contact.css'
function Contact(){
           const[firstname,setFirstname]=useState('')
           const[Lastname,setlastname]=useState('')
           const[Email,setEmail]=useState('')
           const[BusinessPhone,setBusinessPhone]=useState('')
           const[Street1,setStreet1 ]=useState('')
           const[City,setCity]=useState('')
           const[State,setState ]=useState('')
           const[Zip,setZip ]=useState('')
          const[Country,setCountry]=useState('')
          const[Topic,setTopic]=useState('')
        return (
            <div className="m">
                <h2>Contact Us</h2>
                <div className="aa">
                    <div><label>First Name</label><br />
                        <input type="text "placeholder={firstname}></input></div>

                    <div><label>Last Name</label> <br />
                        <input type="text" placeholder={Lastname}></input></div>
                </div>

                <div className="bb">
                    <div><label>Email</label><br />
                        <input type="text" placeholder={Email}></input></div>

                    <div><label>Business Phone</label><br />
                        <input type="text" placeholder={BusinessPhone}></input></div>
                        
                </div>

                <div className="ff">
                    <label>street 1 </label><br />
                    <input type="text" placeholder={Street1}></input></div>

                <div className="cc">
                    <div><label> City </label><br />
                    <input type="text" placeholder={City}></input></div>

                    <div><label> State /Province</label><br />
                        <input type="text" placeholder={State}></input></div></div>


                <div className="dd"><div><label> Zip/PostalCode</label><br />
                    <input type="text" placeholder={Zip}></input></div>

                    <div><label> Country/Region</label><br />
                        <input type="text" placeholder={Country}></input></div></div>

                <div className="ee"><label>Topic</label><br />
                    <input type="text"placeholder={Topic}></input></div>
            </div>

        )
    }

export default Contact;