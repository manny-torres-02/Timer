import { props } from 'bluebird'
import React from 'react'

const TimeInput= (props)=> {
    return(
    <form>
        <label> {props.unit} </label>
        <button></button>
        <span></span>
        <button></button>
    </form>
    )
}

export default TimeInput