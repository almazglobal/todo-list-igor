import React from 'react'
import {filterType} from "../App";
import style from './Button.module.css'

type propsType = {
    title:filterType
    changeFilter: (valueFilter: filterType) => void
    valueFilter: filterType
    name:filterType
}

export const Button = (props:propsType) => {

    return (
        <button className={props.name === props.valueFilter ? style.activeFilter : ""} onClick={() => props.changeFilter(props.name)}>{props.title}</button>
    )
}