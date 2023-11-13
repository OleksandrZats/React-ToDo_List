import Input from "./components/Input/Input";
import TaskList from "./components/TaskList/TaskList";
import React, { useState } from "react";
import Filter from "./components/Filter/Filter";
import filterList from "./utils/filterList";
import flexCentered from "./styleUtils/flexCentered";
import { changeElementStatus, deleteElementFromArray, changeRecordValue, makeRecordEditable, makeRecordNotEditable } from "./utils/performTask";

function App() {
    const [list, setList] = useState([])
    const [input, setInput] = useState('')
    const [filter, setFilter] = useState('all')

    const filteredList = filterList(list, filter)

    const deleteTask = (id) => setList(deleteElementFromArray(list, id))
    const changeTaskStatus = (id) => setList(changeElementStatus(list, id))
    const makeTaskEditable = (id) => setList(makeRecordEditable(list, id))
    const makeTaskNotEditable = (id) => setList(makeRecordNotEditable(list, id))
    const changeTaskText = (id, value) => setList(changeRecordValue(list, id, value))

    const addTaskToArray = (task) => setList([...list, task])

    return (
        <div className="App" style={flexCentered}>
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
                makeTaskEditable={makeTaskEditable}
                makeTaskNotEditable={makeTaskNotEditable}
                changeTaskText={changeTaskText}
            />
        </div>
    );
}

export default App;
