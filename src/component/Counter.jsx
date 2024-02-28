import React, { useState } from 'react'
import './Counter.css'

function Counter() {

  const[counter,setCounter]=useState(0);
  const fun = ()=>{
    setCounter(counter+1);
  }
  const clrFun = ()=>{
    setCounter(0);
  }

  return (
    <div className='counter'>
          <div className='container'>
                <button className='btn' onClick={fun}> jaber Darawsheh : {counter}</button>
                <button className='btn' onClick={clrFun}>Clear the counter</button>
          </div>
    </div>
  )
}

export default Counter
