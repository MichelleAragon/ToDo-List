import React from 'react';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton"

function AppUI({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
  addTodoItem,
}) {
  return (
    <React.Fragment>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.id}
            text={todo.name}
            completed={todo.completed}
            idx={todo.id}
            onComplete={() => completeTodo(todo.name)}
            onDelete={() => deleteTodo(todo.name)}                                  
          />
        ))}
      </TodoList>

      <CreateTodoButton 
        addTodoItem={addTodoItem} />
    </React.Fragment>
  );
}

export { AppUI };