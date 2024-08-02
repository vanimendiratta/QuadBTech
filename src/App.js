import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    store.dispatch({ type: 'todos/setTodos', payload: savedTodos });

    store.subscribe(() => {
      localStorage.setItem('todos', JSON.stringify(store.getState().todos));
    });
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo List</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
