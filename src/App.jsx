import './App.css'
import { useState, useEffect,createContext,useRef, useMemo } from 'react';
import axios from 'axios'
import ChildComponent from './ChildComponent'

function App() {
console.log(":- rendering App Component")

  let [num1,setNum1] = useState(0);
  let [num2,setNum2] = useState(0);

  function increaseNumber() {
    let result = num1
    // for (let index = 0; index < 999999999; index++) {
    //   result = result + 1;
    // }
    return result;
  }

  let newNumber = useMemo(()=>(increaseNumber()),[num1])


  function handleChange(event){
    console.log("name",event.target.name)
    console.log(":- handleChange event",typeof event.target.value)
    // setResult(a+b)
    if(event.target.name === 'num1'){
      setNum1(+event.target.value)
    }

    if(event.target.name === 'num2'){
      setNum2(+event.target.value)
    }
  }

  return (  
      <div style={{backgroundColor:'lightgray'}}>
      <ChildComponent num1={num1} />

      <div className='col-sm-12 col-md-6'>
      Num 1 : <input type="number" onChange={handleChange} name='num1'/>
      </div>

      <div>
      Num 2 : <input type="number" onChange={handleChange} name='num2'/>
      </div>

      <div>
      Result: {num1 + num2}
        </div>
        <div>
          new number: {newNumber}
        </div>
      </div>

  )
}

export default App
