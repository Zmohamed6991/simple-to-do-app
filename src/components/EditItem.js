import React from 'react';

const editItem = () => {

    const handleEdit = (index) => {
        setToDo(todo.filter((_, i) => i !==index));  
    };
    
    return (
        <div>
            <button onClick={handleEditingItem}> Add Task</button>
        </div>
    )
};

export default editItem