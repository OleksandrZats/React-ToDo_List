import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import flexCentered from "../../styleUtils/flexCentered";

const Task = ({ task = {}, deleteTask = () => { }, changeTaskStatus = () => { }, }) => {
    const style = {
        textDecoration: task.isDone ? 'line-through' : 'none',
        cursor: 'pointer',
        userSelect: 'none'
    };
    return (
        <ListItem
            id={task.id}
            style={{ ...flexCentered, flexDirection: 'row', }}
        >
            <DeleteIcon
                style={{ cursor: 'pointer', color: '#7a3732' }}
                onClick={() => deleteTask(task.id)}
            />
            <ListItemText
                style={style}
                onClick={() => changeTaskStatus(task.id)}
                primary={task.taskText}
            />
        </ListItem>
    )
}

export default Task