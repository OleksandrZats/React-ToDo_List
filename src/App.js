import Input from "./components/Input/Input";
import TaskList from "./components/TaskList/TaskList";
import React, { useState } from "react";
import Filter from "./components/Filter/Filter";
import filterList from "./utils/filterList";
import "./styles/index.scss";
import {
    changeElementStatus,
    deleteElementFromArray,
    changeRecordValue,
} from "./utils/performTask";

function App() {
    const [list, setList] = useState([]);
    const [input, setInput] = useState('');
    const [filter, setFilter] = useState('all');

    const deleteTask = (id) => setList(deleteElementFromArray(list, id));
    const changeTaskStatus = (id) => setList(changeElementStatus(list, id));
    const changeTaskText = (id, value) => {setList(changeRecordValue(list, id, value)); console.log(list)};

    const addTaskToArray = (task) => setList([...list, task]);

    const filteredList = filterList(list, filter);
    return (
        <div className="App centered">
            <h1>TO-DO LIST</h1>
            <Filter setFilter={setFilter} />
            <Input
                input={input}
                setInput={setInput}
                addTaskToArray={addTaskToArray}
            />
            <TaskList
                filteredList={filteredList}
                deleteTask={deleteTask}
                changeTaskStatus={changeTaskStatus}
                changeTaskText={changeTaskText}
            />
        </div>
    );
};

export default App;
