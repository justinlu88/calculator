
import React from "react";
import {useState} from "react"
import "./App.css"

// const App = () => {
//   const [userInput,setUserInput] = useState("")
//   const [myCalculation,setmyCalculation] = useState("")
// const inputHander = (eventData) => {
//   setUserInput(eventData.target.value)
//   console.log("changed",eventData.target.value)
// }
//  const addText = () => {
//    setmyCalculation(myCalculation + userInput)
//    setUserInput("")
//  }

//   return <div>
//     <h1>
//       my story: {myCalculation}
//     </h1>
    
//     <input onChange={inputHander} value = {userInput}/>
//     <button onClick={addText}>add text</button>
//   </div>
// }
// export default App

// new version

// const App = () => {
//   const [userInput,setUserInput] = useState("")
//   const [myCalculation,setmyCalculation] = useState("")
// const inputHander = (eventData) => {
//   setUserInput(eventData.target.value)
//   console.log("changed",eventData.target.value)
// }
//  const addText = () => {
//    setmyCalculation(myCalculation + userInput)
//    setUserInput("")    // returning this back to blank on the input
//  }

//   return <div>
//     <h1>
//       <button>{myCalculation}</button>
//     </h1>
    
//     <input onChange={inputHander} value = {userInput}/>
//     <button onClick={addText}>add text</button>
//   </div>
// }
// export default App

const App = () => {
  const [userInput,setUserInput] = useState("")
  const [myCalculation,setmyCalculation] = useState("")
  const [ans,setAns] = useState("")
  

  const deleteAll = () => {
    setmyCalculation("")
  }
  const deleteOne = () => {
    setmyCalculation(myCalculation.substr(0, myCalculation.length-1))
  }
  const giveAnswer = () => {
    const answer = eval(myCalculation);
    setmyCalculation(answer);
    setAns(answer);
  }
  const sameAnswer = () => {
    setmyCalculation(myCalculation+ans)
  }
  return <div className="App" >
    <div className="drawBox">
      <h1>{myCalculation}</h1>
    </div>
  
    <button onClick={deleteAll}> 
      C
    </button>
    {[1,2,3,4,5,6,7,8,9,0,"+","-","*","/",".","(",")"].map((num)=>{
      return <button key={num} onClick={()=> {setmyCalculation(myCalculation+num)}}>{num}</button>
    })}  

    <button onClick={deleteOne}>
      back
    </button>

    <button onClick={giveAnswer}>
      =
    </button>

    <button onClick={sameAnswer}>
    Ans 
    </button>

  </div>
}
export default App




