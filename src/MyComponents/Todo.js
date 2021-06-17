import React from 'react';

export const Todo = ({ todo, onDelete, onTick }) => {
  let ck = todo.check ? 'defaultChecked' : '';
  console.log('todo log:   ',todo)
  return (
    <>
      <div className='container my-3'>
        <h4 className={todo.check === true ? 'stk' : ''}>{todo.title}</h4>
        <p className={todo.check === true ? 'stk' : ''}>{todo.desc}</p>
        <div className='mb-3 form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            onClick={() => {
              onTick(todo)
            }}
            defaultChecked={ck}
          />
          <label className='form-check-label' htmlFor='exampleCheck1'>
            Mark as done
          </label>
        </div>
        <button
          className='btn btn-sm btn-outline-danger br-5'
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete
        </button>
      </div>
      <hr />
    </>
  );
};
