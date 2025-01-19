import './App.css'
import { useState, useEffect } from 'react';
import axios from 'axios'
import ChildComponent from './ChildComponent'

function App() {

  const [data,setData] = useState([]);
  const [error,setError] = useState("");
  let [count,setCount] = useState(0)
  let [num1,setNum1] = useState(0);
  let [num2,setNum2] = useState(0);
  let [result,setResult] = useState(0);
  useEffect(()=>{

    // axios.get('https://official-joke-api.appspot.com/random_joke2').then((response) => { 
    // console.log("2")

    //   console.log("response: " + JSON.stringify(response.data))
    //   setData(response.data)
    // }).catch((error)=>{
    //   console.log("error",error.message)
    // })

    async function fetchApiData(){
      try{
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke')
console.log("response",response)
        setData(response.data);
      }catch(error){

        console.log("error",error.message)
        setError(error.message)
      }
      
    };

    fetchApiData()

  },[])
 //child to parent data will be passed through a function,
 // function will be defined in parent and called in child
  function addCount(){
    setCount(count++);
  }

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
<ChildComponent data={['testdata1','testdata2','testdata3']} increaseCount={addCount}/>
{error ? (<p>Error: {error}</p>) : (<p>no error found</p>)}

<h1>Counter</h1>
<p>Count: {count}</p>


<div>
Num 1 : <input type="number" onChange={handleChange} name='num1'/>
</div>

<div>
Num 2 : <input type="number" onChange={handleChange} name='num2'/>
</div>

<div>
Result: {num1 + num2}
</div>
</div>
  )
}

export default App
