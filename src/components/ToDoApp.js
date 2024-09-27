import { useState } from "react";
import TodoItem from "./ToDoItem";


function TodoApp () {
    const [todo, setToDo] = useState ([]); // array to hold the list of todos
    const [newTodo, setNewTodo] = useState (" "); // this will get the new to do list 

    const handleInputChange = (e) => { 
        setNewTodo(e.target.value); // passes on the user input to the setNewtodo. e means storing the data and passing it on. e.target. 
    }


    const handleAddToDo = () => {
        if (newTodo.trim()) {
            // if statement to check if its not only whitespaces. checking if theres words.
            setToDo ([...todo, newTodo.trim()]);
            // updating the array of todo with the new input from newtodo.  input will be added to the end of todo array
            setNewTodo(' ');
            // cleaning up - clearing up the text box for new input
        }
    };

 

    //deleting based on index:
    //putting index in the parameter to represent the index of the tast we want to delete

    const handleDeleteTodo = (index) => {
        setToDo(todo.filter((_, i) => i !==index));
        // using filter it goes through each item in the todo array. filter is a method to iterate each word.
        // setTodo is used because in react to update the todo we have to do it through settodo first.
        //
    
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleAddToDo();
        }
    };

    return (
        <div>
            <h1>To-Do App</h1>
            <input 
            type="text"
            value={newTodo}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Enter a new task"
            />

            <button onClick={handleAddToDo}> Add Task</button>

            <ul> 
                {todo.length === 0 ? (
                    <p> No Tasks In Your List! </p>
                ) : (
                    todo.map((todo, index) => (
                        <TodoItem key={index} index={index} todo={todo} onDelete={handleDeleteTodo} />
                    ))
                )}
            </ul>
       
        </div>

    )
}

export default TodoApp;



