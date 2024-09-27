import React from 'react';

function TodoItem ({ todo, index, onDelete }) {
    return (
        <div>
          {todo}
          <button onClick= {() => onDelete(index)}>Delete</button>
        </div>
    );
}

export default TodoItem;