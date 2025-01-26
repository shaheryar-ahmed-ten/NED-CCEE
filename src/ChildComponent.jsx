import GrandChildComponent from "./GrandChildComponent";
import { useContext,memo } from 'react'
function ChildComponent({num1}) {
console.log(":- rendering Child Component")
    return (
        <div style={{ backgroundColor: 'lightblue' }}>
            <h1>Child Component</h1>
            <div>
                num1 : {num1}
            </div>
        </div>
    )
}

export default memo(ChildComponent)

