import React from "react";
import TextField from '@mui/material/TextField';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import flexCentered from "../../styleUtils/flexCentered";

const Task = (
        { 
            task = {}, 
            deleteTask = () => { }, 
            changeTaskStatus = () => { }, 
            makeTaskEditable = () => { },
            makeTaskNotEditable = () => { },
            changeTaskText = () =>{ }
        }
    ) => {
    const style = {
        textDecoration: task.isDone ? 'line-through' : 'none',
        cursor: 'pointer',
        userSelect: 'none'
    };
    const onKeyUp = e => {
        if (e.key !== 'Enter') return;
        if (!task.taskText) {deleteTask(task.id); return;}
        makeTaskNotEditable(task.id)
    }
    return (
        <ListItem
            id={task.id}
            style={{ ...flexCentered, flexDirection: 'row', }}
        >
            <DeleteIcon
                style={{ cursor: 'pointer', color: '#7a3732' }}
                onClick={() => deleteTask(task.id)}
            />
            {task.isEditable ?
                <TextField
                    id="standard-basic"
                    variant="standard"
                    type="text"
                    style={{ minWidth: '350px' }}
                    value={task.taskText}
                    onKeyUp={onKeyUp}
                    onChange={(e)=>{changeTaskText(task.id, e.target.value)}}
                /> :
                <>
                <EditIcon
                    style={{ cursor: 'pointer', color: '#7a3732' }}
                    onClick={() => makeTaskEditable(task.id)}
                />
                <ListItemText
                    style={style}
                    onClick={() => changeTaskStatus(task.id)}
                    primary={task.taskText}
                />
                </>
            }
        </ListItem>
    )
}

export default Task