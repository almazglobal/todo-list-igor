import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type filterType = 'All' | 'Active' | 'Completed'

function App() {

    const [task1, setTask1] = useState([
            {id: v1(), title: 'HTML&CSS1', isDone: true},
            {id: v1(), title: 'JS1', isDone: true},
            {id: v1(), title: 'React1', isDone: true},
            {id: v1(), title: 'HTML&CSS1', isDone: true},
            {id: v1(), title: 'JStrrt1', isDone: false},
            {id: v1(), title: 'React1', isDone: true},
        ]
    )

    const addTask = (title: string) => {

        let newTask = {id: v1(), title, isDone: false}
        setTask1([newTask, ...task1])
    }
    const [filter, setFilter] = useState<filterType>('All')

    const removeTask = (taskId: string) => {
        const task = task1.filter(item => item.id !== taskId)
        setTask1(task)
    }

    const changeFilter = (valueFilter: filterType) => {
        setFilter(valueFilter)
    }

    const changeStatus = (id: string, checked: boolean) => {
        setTask1(task1.map(item => item.id === id ? {...item, isDone: checked} : item))
    }

    let filtered = task1
    if (filter === 'Completed') {
        filtered = task1.filter(item => item.isDone)
    }
    if (filter === 'Active') {
        filtered = task1.filter(item => !item.isDone)
    }

    return (
        <div className="App">
            <Todolist
                title={'Todolist2'}
                todos={filtered}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeStatus={changeStatus}
                valueFilter={filter}
            />
        </div>
    );
}

export default App;
