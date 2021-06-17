import React from 'react';
import { Todo } from './Todo';

export const Todos = (props) => {
  let footerStyle = {
    minHeight: '70vh',
    margin: '40px auto'
  };
  console.log("todos map :   ",props.todos)
  return (
    <div className='container' style={footerStyle}>
      <h3 className='my-3'>Todos List</h3>
      {props.todos.length === 0 ? (
        <div className='alert alert-info' role='alert'>
          No Todos to display!!
        </div>
      ) : (
        props.todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.sno}
              onDelete={props.onDelete}
              onTick={props.onTick}
            />
          );
        })
      )}
    </div>
  );
};
