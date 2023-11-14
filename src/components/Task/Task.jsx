import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './task.scss';

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
    const onKeyUp = e => {
        if (e.key !== 'Enter') return;
        if (!task.taskText) {deleteTask(task.id); return;}
        makeTaskNotEditable(task.id)
    }
    return (
        <div
            className= {"task" + (task.isDone ? " task__done " : "") + (task.isEditable ? " task__outline ": "")}
            id={task.id}
        >
            {task.isEditable ?
                <input
                    className= {"task__text" + (task.isDone ? " task__text-done " : " task__text-notdone ") + " task__input"}
                    type="text"
                    value={task.taskText}
                    onKeyUp={onKeyUp}
                    onChange={(e)=>changeTaskText(task.id, e.target.value)}
                /> :
                <>
                <EditIcon
                    style={{ cursor: 'pointer'}}
                    onClick={() =>{makeTaskEditable(task.id)}}
                />
                <div
                    className= {"task__text" + (task.isDone ? " task__text-done " : " task__text-notdone ")}
                    onClick={() =>changeTaskStatus(task.id)}
                >
                    {task.taskText}
                </div>
                </>
            }
            
            <DeleteIcon
                style={{ cursor: 'pointer'}}
                onClick={()=>deleteTask(task.id)}
            />
        </div>
    )
}

export default Task