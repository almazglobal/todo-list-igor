import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import {filterType} from "./App";
import {Button} from "./components/Button";
import {Input} from "./components/Input";
import style from './Todolist.module.css'


type propsType = {
    title?: string,
    todos: Array<typeForKlichka>
    removeTask: (taskId: string) => void
    changeFilter: (valueFilter: filterType) => void
    addTask: (title: string) => void
    changeStatus: (id: string, checked: boolean) => void
    valueFilter: filterType
}

type typeForKlichka = {
    id: string
    title: string
    isDone: boolean
}

export const Todolist = (props: propsType) => {
    const changeFilterAllHandler = () => {
        props.changeFilter('All')
    }
    const changeFilterActiveHandler = () => {
        props.changeFilter('Active')
    }
    const changeFilterCompletedHandler = () => {
        props.changeFilter('Completed')
    }


    const removeTask = (id: string) => {
        props.removeTask(id)
    }

    const addNewTask = (item: typeForKlichka) => {
        const onChangeHandlerChecked = (id: string, e: ChangeEvent<HTMLInputElement>) => {
            props.changeStatus(id, e.currentTarget.checked)
        }
        return (
            <li key={item.id}>
                <input
                    type="checkbox"
                    checked={item.isDone}
                    onChange={(e) => onChangeHandlerChecked(item.id, e)}/>
                <span className={item.isDone ? style.isDone : ''}>{item.title}</span>
                <button onClick={() => removeTask(item.id)}>X</button>
            </li>
        )
    }
    return (
        <div>
            <h3>{props.title}</h3>

            <Input title={'+'} callBack={props.addTask}/>
            <ul>
                {props.todos.map(item => addNewTask(item))}
            </ul>
            <div>
                <Button valueFilter={props.valueFilter} changeFilter={props.changeFilter} name={'All'} title={'All'}/>
                <Button valueFilter={props.valueFilter} changeFilter={props.changeFilter} name={'Active'} title={'Active'}/>
                <Button valueFilter={props.valueFilter} changeFilter={props.changeFilter} name={'Completed'} title={'Completed'}/>

                {/*<button onClick={() => changeFilter('All')}>All</button>*/}
                {/*<button onClick={() => changeFilter('Active')}>Active</button>*/}
                {/*<button onClick={() => changeFilter('Completed')}>Completed</button>*/}
            </div>
        </div>
    )
}