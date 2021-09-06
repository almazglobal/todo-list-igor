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
    const changeFilter = (valueFilter: filterType) => {
        props.changeFilter(valueFilter)
    }

    let activeButton = "";
    if (props.name === props.valueFilter)activeButton = style.activeFilter
    else if ((props.name === props.valueFilter))activeButton = style.activeFilter
    else if ((props.name === props.valueFilter))activeButton = style.activeFilter
    return (
        <button className={activeButton} onClick={() => props.changeFilter(props.name)}>{props.title}</button>
    )
}