import React from "react";
import Task from "../Task/Task";
import List from '@mui/material/List';
import flexCentered from "../../styleUtils/flexCentered";

const TaskList = (
        { 
            filteredList = [], 
            deleteTask = () => { }, 
            changeTaskStatus = () => { },
            makeTaskEditable = () => { },
            makeTaskNotEditable = () => { },
            changeTaskText = () =>{ }
        }
    ) => {
    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            style={flexCentered}
        >
            {filteredList.map((task) =>
                <Task
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    changeTaskStatus={changeTaskStatus}
                    makeTaskEditable={makeTaskEditable}
                    makeTaskNotEditable={makeTaskNotEditable}
                    changeTaskText={changeTaskText}
                />
            )}
        </List>
    )
}

export default TaskList