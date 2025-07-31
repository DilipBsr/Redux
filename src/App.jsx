import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement,increment ,incrementByAmount } from './features/counterSlice'

function App() {
  const count=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()

  const handleIncrement=()=>{
    dispatch(increment());
  }

  const handleDecrement=()=>{
    dispatch(decrement());
  }

  const handlePayload=()=>{
    dispatch(incrementByAmount(countVal));
  }

  const [countVal,setCountVal]=useState(0);


  return (
    <> 
      <div id='home'>
        <div id='forText'>
          <div id='heading'>Redux Toolkit</div>
          <div>A State Management Library <hr /></div>
        </div>

        <div>Count : {count} </div>
        <div>Payload : {countVal} </div>
        <button onClick={()=>handleIncrement()}>Increment</button>
        <button onClick={()=>handleDecrement()}>Decrement</button>
        <input type="Number"
              placeholder='Enter Value'
              value={countVal}
              onChange={(e)=>setCountVal(e.target.value)}
        />
        <button onClick={()=>handlePayload()}>Add Payload</button>
      </div>
    </>
  )
}

export default App
