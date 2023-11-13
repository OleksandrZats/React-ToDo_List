import React from "react";
import Task from "../Task/Task";
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
        <div
            sx={{ width: '100%', maxWidth: 360 }}
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
        </div>
    )
}

export default TaskList