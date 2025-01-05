import './App.css'
import { useState } from 'react';

function App() {
  const name = 'App'
  // let count =  0;
  const [count,setCount] = useState(5)
  const persons = [
    { name: 'Ali' , city : 'Karachi'},
    { name: 'Ahmed' , city : 'Lahore'},
    { name: 'Lahore' , city : 'Islamabad'},
  ]

  function addCount(){
    console.log("click addcount function")
    setCount(count + 1)
    console.log("count: " + count)
  }

  return (  
    <>
      <h1>{name} component</h1>
      <h3>Name of colors</h3>
      <ul>
        {persons.map((value,index) => {
          return (<li key={index}>{value.name} - {value.city}</li>) //   value = { name: 'Ali' , city : 'Karachi'},
        })}
      </ul>
      

      <p>Count = {count}</p>
      <button onClick={addCount}>
        Add Count
      </button>
    </>
  )
}

export default App
