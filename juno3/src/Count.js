import React, {useState } from "react";

function Count(){
  const[inputvalue,setInputvalue]=useState(0)
  const[count,setCount]=useState(0)
  

  const handleChange = (e) => {
    setInputvalue(  e.target.value );
  }
  const handleIncrement = () => {
    setCount(
       Number(count) + Number(inputvalue),
    );
  };
  const handleDecrement = () => {
    setCount(
      Number(count) - Number(inputvalue),
    );
  };
  
    return (
      <div class="d-flex">
        <label>Count : </label>
        <span> {count} </span>
        <div class="input-group  w-25">
          <input
            type="number"
            class="form-control"
            name="inputvalue"
            aria-label="default input example"
            value={inputvalue}
            onChange={handleChange}
          ></input>
        </div>

        <button class="btn btn-primary" onClick={handleIncrement}>
          Increament
        </button>
        <button class="btn btn-warning" onClick={handleDecrement}>
          Decreament
        </button>
      </div>
    );
  }


export default Count