import './App.css'
import { useState, useEffect } from 'react';
import axios from 'axios'

function App() {

  // let name = "shaheryar"
  // name = "ALi";

  // let [name,setName] = useState("Shaheryar")
  // setName("ALi")
  // const [count,setCount] = useState(5)
  // const [display, setDisplay] = useState('block');
  const [data,setData] = useState([]);
  const [error,setError] = useState("")
  // const persons = [
  //   { name: 'Ali' , city : 'Karachi'},
  //   { name: 'Ahmed' , city : 'Lahore'},
  //   { name: 'Lahore' , city : 'Islamabad'},
  // ]
  // function addCount(){
  //   console.log("click addcount function")
  //   setCount(count + 1)
  //   console.log("count: " + count)
  // }
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
  return (  
    // <div>
    //     <h1>{data.setup}</h1>
    //   <h1>{name} component</h1>
    //   <h3>Name of colors</h3>
    //   <ul>
    //     {persons.map((value,index) => {
    //       return (<li key={index}>{value.name} - {value.city}</li>) //   value = { name: 'Ali' , city : 'Karachi'},
    //     })}
    //   </ul>

    //   <table>
    //     <tr>
    //       <th>Name</th>
    //       <th>Country</th>
    //       <th>Code</th>
    //     </tr>
    //     {
    //       data.map((item, index) => (
    //         <tr key={index}>
    //           <td>{item.name}</td>
    //           <td>{item.counter}</td>
    //           <td>{item.alpha_two_codes}</td>
    //         </tr>
    //       ))
    //   }
    //   </table>


      

    //   <p>Count = {count}</p>
    //   <button style={{display: display}} onClick={addCount}>
    //     Add Count
    //   </button>
    // </div>
<>

{error ? (<p>Error: {error}</p>) : (<p>no error found</p>)}
</>
  )
}

export default App
