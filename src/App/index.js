import React, { useState } from "react";
import { AppUI } from "./AppUI";

// const todos = [
//   {name: 'Training', completed: true},
//   {name: 'Learn a Lenguage', completed: false},
//   {name: 'Learn Programming', completed: false},
//   {name: 'Dance Flamenco', completed: false}
// ];





function App() {
  const  [todos, setTodos] = useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoName = todo.name.toLowerCase();
      const searchName = searchValue.toLowerCase();
      return todoName.includes(searchName);
    });
  }

  const completeTodo = (name) => {
    const todoIndex = todos.findIndex(todo => todo.name === name);    
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (name) => {
    const todoIndex = todos.findIndex(todo => todo.name === name);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };
  

  function addTodoItem(name) {
    const todoItem = {name, completed: false, id: todos.length + 1}
    
    return setTodos(todos.concat([todoItem]))
  }
  
   return (
     <AppUI 
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodos={searchedTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        addTodoItem={addTodoItem}
     />
    );
}

export default App;
