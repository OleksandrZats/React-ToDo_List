import React from "react";
import Task from "../Task/Task";

const TaskList = ({ 
    filteredList = [], 
    deleteTask = () => {}, 
    changeTaskStatus = () => {},
    changeTaskText = () => {},
}) => {
    return (
        <div
            sx={{ width: '100%', maxWidth: 360 }}
            className="centered"
        >
            {filteredList.map((task) =>
                <Task
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    changeTaskStatus={changeTaskStatus}
                    changeTaskText={changeTaskText}
                />
            )}
        </div>
    );
};

export default TaskList;