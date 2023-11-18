import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Task = ({
    task = {},
    deleteTask = () => {},
    changeTaskStatus = () => {},
    changeTaskText = () => {},
}) => {
    const [input, setInput] = useState('');
    const [isEditMode, setEditMode] = useState(false);
    const preparePrevValue = () => {
        setInput(task.taskText);
        setEditMode(true);
    }
    const onKeyUp = e => {
        if (e.key !== 'Enter') return;
        if (input) changeTaskText(task.id, input);
        setEditMode(false);
    };
    return (
        <div
            className={`task${task.isDone ? ' task__done' : ''}${isEditMode ? ' task__outline' : ''}`}
            id={task.id}
        >
            {isEditMode ?
                <input
                    className={`task__text task__input${task.isDone ? ' task__text-done' : ' task__text-notdone'}`}
                    type="text"
                    value={input}
                    onKeyUp={onKeyUp}
                    onChange={(e) => setInput(e.target.value)}
                    autoFocus
                /> :
                <>
                    <EditIcon
                        style={{ cursor: 'pointer' }}
                        onClick={preparePrevValue}
                    />
                    <div
                        className={`task__text${task.isDone ? ' task__text-done' : ' task__text-notdone'}`}
                        onClick={() => changeTaskStatus(task.id)}
                    >
                        {task.taskText}
                    </div>
                </>
            }

            <DeleteIcon
                style={{ cursor: 'pointer' }}
                onClick={() => deleteTask(task.id)}
            />
        </div>
    );
};

export default Task;