import React, { useState } from "react";

const NewTask = () => {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(task);

    }
    return (
        <div>
            <form onSubmit = {handleSubmit}> 
                <label>Enter a task: </label>
                <input type="text" value={task} required onChange={(e) => setTask(e.target.value)} />
                <button onClick={() => setTask(task)}> Add Task</button>
            </form>

        </div>
    )
    
    
};

export default NewTask;