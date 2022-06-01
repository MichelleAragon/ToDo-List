import React from 'react';
import './TodoCounter.css';




function TodoCounter({ total, completed }) {
    
    
    return (
        <h2 className="TodoCounter">You have made {completed} de {total} tasks</h2>
    );

}

export { TodoCounter };