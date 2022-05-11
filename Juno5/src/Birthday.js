
import React, { useState } from 'react'
import './Birthday.css'
function Birthday(){
               const[onsubmitted,setOnsubmitted]=useState(false)
               const[reviews,setReviews]=useState( [
                {
                    id: 1,
                    name: 'Bertie Yates',
                    age: 29,
                    image:
                        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
                },
                {
                    id: 2,
                    name: 'Hester Hogan',
                    age: 32,
                    image:
                        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
                },
                {
                    id: 3,
                    name: 'Larry Little',
                    age: 36,
                    image:
                        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
                },
                {
                    id: 4,
                    name: 'Sean Walsh',
                    age: 34,
                    image:
                        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
                },
                {
                    id: 5,
                    name: 'Lola Gardner',
                    age: 29,
                    image:
                        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
                }
            ])
            
    
    const handleReset = (e) => { setOnsubmitted( true )
        setOnsubmitted({id: '', name: '', age: '', image: '' })}
    
 
        return (
            <div className='bg-danger p-5 color'>
                <div class="card">
                    {!onsubmitted && (
                        <div><h1><center>{reviews.length} Birthday Today</center></h1>
                            {reviews.map(review => <div className='d-flex'>
                            <img src={review.image} className="rounded-circle"
                                    width="50" height="50" alt="Cinque Terre"></img>
                                    <h2>{review.name}
                                    <h6>{review.age}Years</h6></h2>
                                </div>)}
                            <button class="col-12 btn btn-danger" onClick={handleReset}>Clear</button>
                        </div>)}
                    {onsubmitted && (
                        <div>
                            <label>There are zero Birthdays today</label>
                        </div>)}
                </div>
            </div>
        )
                    }

export default Birthday