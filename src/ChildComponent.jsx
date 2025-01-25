import GrandChildComponent from "./GrandChildComponent";
import { useContext } from 'react'
import {myContext} from './App'
export default function ChildComponent({ data, increaseCount,getnum }) {
    let myValue = 1;
    const value = useContext(myContext)
    console.log("data",data)
console.log(":- value",value)
    const handleClick=()=> {
        console.log("handleClick")
        increaseCount();
        getnum(Math.random()*10)
    }
    return (
        <div style={{backgroundColor:'lightblue'}}>
            <h1>Child component</h1>
            <p>value from context: { value}</p>
            <GrandChildComponent />
        <button onClick={handleClick}>Add Count</button>
        </div>
    )
}


