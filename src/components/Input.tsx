import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import style from './Input.module.css'
type propsType = {
    title: string
    callBack:(title:string)=>void
}

export const Input = (props: propsType) => {
    let [title, setTitle] = useState("")
    let [error, setError] = useState(true)
    const addTaskHandler = () => {
        if (!title.trim()) return
        props.callBack(title.trim());
        setTitle("");
        setError(true)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        if (!e.currentTarget.value.trim()) {
            setTitle(e.currentTarget.value.trim())
            setError(true)
            return
        }
        setError(false)
        setTitle(e.currentTarget.value.trim())

    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (!title.trim()) return
        if (e.charCode === 13) {
            props.callBack(title.trim());
            setError(true)
        }

    }
    return (
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? style.error : "" }
            />
            <button onClick={addTaskHandler}>{props.title}</button>
            {error && <div className={style.errorMessage}>Task is required</div>}
        </div>
    )
}