import React from "react";
import { v4 as uuidv4 } from 'uuid';
import './input.scss'

const Input = ({ input = '', setInput = () => { }, addTaskToArray = () => { } }) => {
    const onInputChange = (value) => setInput(value)
    const onKeyUp = e => {
        if (e.key !== 'Enter' || !input) return;
        addTaskToArray(
            {
                id: uuidv4(),
                taskText: input,
                isDone: false,
                isEditable: false,
            }
        )
        setInput('')
    }
    return (
        <input
            className="input"
            type="text"
            style={{ minWidth: '350px', margin:'20px' }}
            placeholder="Add new task"
            value={input}
            onKeyUp={onKeyUp}
            onChange={(e) => {onInputChange(e.target.value)}}
        />)
}

export default Input;