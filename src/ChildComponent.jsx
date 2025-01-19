export default function ChildComponent({data,increaseCount}){

    const handleClick=()=> {
        console.log("handleClick")
        increaseCount();
    }
    return (
        <div style={{backgroundColor:'lightblue'}}>
        <h1>Child component</h1>
        <button onClick={handleClick}>Add Count</button>
        </div>
    )
}


