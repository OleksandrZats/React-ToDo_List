import React from "react";
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField';

const Input = ({ input = '', setInput = () => { }, addTaskToArray = () => { } }) => {
    const onInputChange = (value) => setInput(value)
    const onKeyUp = e => {
        if (e.key !== 'Enter' || !input) return;
        addTaskToArray(
            {
                id: uuidv4(),
                taskText: input,
                isDone: false,
            }
        )
        setInput('')
    }
    return (
        <TextField
            id="standard-basic"
            label="Standard"
            variant="standard"
            type="text"
            style={{ minWidth: '350px' }}
            value={input}
            onKeyUp={onKeyUp}
            onChange={(e) => {onInputChange(e.target.value)}}
        />)
}

export default Input;