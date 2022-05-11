
import React, { useState } from 'react'

    function Sub(){
    const [name, setName] = useState('')
    const [age, setAge] = useState()
    const [gender, setGender] = useState('')
    const [source, setSource] = useState('')
    const [destination, setDestination] = useState('')
    const [submit, setSubmit] = useState('')


    
    const handleRegister = () => {
        if (destination)
            setSubmit({ submit: true })
        else
            alert('Destination should not be empty')
    }

    return (
        <div className='d-flex'>
            <div>{!submit && (
                <div className='border border-4 border-dark m-5 p-5'>
                    <form>
                        <div className='col-12'>
                            <label className='form-label'>Name of Passengers:</label>
                            <input type="text" className='form-control' name="name" onChange={(e) => setName(e.target.value)} value={name}></input>
                        </div>
                        <div className='col-12'>
                            <label className='form-label'>Age:</label>
                            <input type="number" className='form-control' name="age" onChange={(e) => setAge(e.target.value)} value={age}></input>
                        </div>

                        <div name='gender' onChange={(e) =>setGender(e.target.value)} value={gender}>
                            <label value={name}>Gender:</label>
                            <div className='form-check'>
                                <input class="form-check-input" type="radio" names="flexRadioDefault" id="flexRadioDefault1" name='gender' onChange={(e)=>e.target.value} value="male"></input>
                                <label class="form-check-label" for="flexRadioDefault1">Male</label>
                            </div>

                            <div className='form-check'>
                                <input class="form-check-input" type="radio" names="flexRadioDefault" id="flexRadioDefault2" name='gender' onChange={(e)=>e.target.value} value="female"></input>
                                <label class="form-check-label" for="flexRadioDefault2">Female</label>
                            </div>

                            <div className='form-check'>
                                <input class="form-check-input" type="radio" names="flexRadioDefault" id="flexRadioDefault3" name='gender' onChange={(e)=>e.target.value} value="others"></input>
                                <label class="form-check-label" for="flexRadioDefault3">Others</label>
                            </div>
                        </div><div className='col-12'><label>Source</label>
                            <select className='form-select' name="source" onChange={(e)=>setSource(e.target.value)} value={source}>
                                <option></option>
                                <option>Chennai</option>
                                <option>Bangalore</option>
                                <option>Hyderabad</option>
                            </select>
                        </div>
                        <div className='col-12'><label>Destination</label>
                            <select className='form-select' name="destination" onChange={(e)=>setDestination(e.target.value)} value={destination}>
                                <option></option>
                                <option>Delhi</option>
                                <option>Kolkata</option>
                                <option>Simla</option>
                            </select>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            <label class="form-check-label" for="flexCheckDefault">I Agree all Terms and Conditions</label>
                        </div>
                        <button className='btn btn-success col-5' onClick={handleRegister}>Submit</button>
                    </form>
                </div>)}
                {submit && (
                    <div className='border border-4 border-dark m-5 p-5'>
                        <div>Name: {name}</div>
                        <div>Age: {age}</div>
                        <div>Gender:{gender}</div>
                        <div>Source: {source}</div>
                        <div>Destination:{destination}</div>
                    </div>)}
            </div>
        </div>

    )
}


export default  Sub