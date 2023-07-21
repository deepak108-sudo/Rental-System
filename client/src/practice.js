
import React, { useState } from 'react'

const App = () => {
  
  //   let [counter,setCounter]=useState(1);
  // const Increment = ()=>{
  //   setCounter(counter+1);
  // }  
  //   return (
  //   <div style={{alignItem:"center",margin:25}}>
  //     <h3>{counter}</h3>
  //     <button onClick={Increment}>Click Me!</button>
  //   </div>
  // )
const [Value,setValue]=useState("Hello");

let change =(e)=>{
  const newValue = e.target.value;
  setValue(newValue)
}


  return(
    <div>
      <input type="text" placeholder='Write Something' onChange={change} />{Value}
    </div>
  )


}

export default App
