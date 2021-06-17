import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  let initTodo;

  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }

  const [todos, setTodos] = useState(initTodo);

  const onTick = (todo) => {
    console.log('todo ontick1:   ', todo);
    setTodos(todos[todo.sno].check = !todos[todo.sno].check);
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log('todo ontick2:   ', todo);
    console.log('todo ontick3:   ', todos);
  };
  console.log('todos after ontick    ',todos)
  const onDelete = (todo) => {
    // console.log('Deleting the data', todo);
    // Deleting this way in react does not work unlike angular
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    // localStorage.setItem('todos', JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    let sno;

    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      check: false
    };

    // console.log('I am adding this todo', myTodo);

    setTodos([...todos, myTodo]);
  };

  

  console.log('todos before use effect    ',todos)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log("useeffect called   ")
  }, [todos]);

  console.log('todos after use effect    ',todos)
  return (
    <>
      <Router>
        <Header title='My Todo List' searchBar={false} />

        <Switch>
          <Route
            exact
            path='/'
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} onTick={onTick} />
                </>
              );
            }}
          ></Route>
          <Route exact path='/about'>
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
