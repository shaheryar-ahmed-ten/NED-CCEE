import './App.css'
import { useState, useEffect,createContext,useRef } from 'react';
import axios from 'axios'
import ChildComponent from './ChildComponent'

export const myContext = createContext('')
const myContext2 = createContext('')
const myContext3 = createContext('')

function App() {
// console.log("myValue = " + myValue)
  const [data,setData] = useState([]);
  const [error,setError] = useState("");
  let [count,setCount] = useState(0)
  let [num1,setNum1] = useState(0);
  let [num2,setNum2] = useState(0);
  let [result, setResult] = useState(0);

  const myref = useRef(null)
  console.log("myRef = " + myref.current);
  // setTimeout(() => { 
    //   document.getElementById("myheading").innerHTML = 'some text';
    
    //  }, 1000)
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
        myref.current.innerHTML = response.data.punchline
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

  function getNumber(num) {
    console.log("num from child",num)
  }
  return (  
    <myContext.Provider value={'contextvalue'}>
      <div style={{backgroundColor:'lightgray'}}>
            <ChildComponent data={['testdata1', 'testdata2', 'testdata3']} increaseCount={addCount} getnum={getNumber} />
      {error ? (<p>Error: {error}</p>) : (<p>no error found</p>)}

      <h1 ref={myref}>Counter</h1>
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
    </myContext.Provider>

  )
}

export default App
