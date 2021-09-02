
import React from 'react'
// import { FontAwesomeIcon } from 'react-icons/fa' 

const TimeInput= (props)=> {
    return(
    <form>
        <label> {props.unit} </label>
        <button className="" i>+</button>
        <span>30</span>
        <button className="">-</button>
        
    </form>
    )
}

export default TimeInput