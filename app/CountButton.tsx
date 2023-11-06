import {useState, useEffect} from "react"

export default function CountButton(props){
    let[count,setCount] = useState(0)
    
    function handleClick(){
        setCount(count + 1 * props.mult)
    }

    function rollOverCount(){
        if(count > 10){
            setCount(0)
        }
    }

    const buttonStyle = {
        backgroundColor: "red",
        color: "white",
        height: "50px",
        width: "50px"
    }

    useEffect(rollOverCount, [count])

    return(
        <div>
            <button style = {buttonStyle} onClick = {handleClick}>{props.name}</button>
            <div>{count}</div>
        </div>
    )
}