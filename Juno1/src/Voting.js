import React, { useState } from 'react'
import'./Voting.css'
function Voting(){
    const[count,setCoyunt]=useState(0);
    const[count1,setCount1]=useState(0);
    const[count2,setCount2]=useState(0); 
    const[count3,setCount3]=useState(0);
 

    const handleVote=()=>{setCount(count+1)}
        const handleVote1=()=>{setCount1(count1+1)}
            const handleVote2=()=>{setCount2(count2+1)}
                const handleVote3=()=>{setCount3(count3+1)}
                    
    
    return (
      <div>
         <div className='Kill'>
  
          <div className='sell'>
          <h2> C voting is:{count}</h2>
          <button class="oppas" onClick={handleVote}>Vote</button>
          </div>
          <div className='hell'>
          <h2> C++ voting is:{count1}</h2>
          <button class="oppas1" onClick={handleVote1}>Vote</button>
          </div>
          <div className='bell'>
          <h2> java voting is:{count2}</h2>
          <button class="oppas2" onClick={handleVote2}>Vote</button>
          </div>
          <div className='cell'>
          <h2> python voting is:{count3}</h2>
          <button class="oppas3" onClick={handleVote3}>Vote</button>
          </div>
      </div>
      </div>
      
    
    )
  }
        
        
export default Voting