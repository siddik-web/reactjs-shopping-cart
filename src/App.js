import React from 'react';
import AddTodoForm from './components/AddTodoForm';
import Ingredient from './components/Ingredient';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Ingredient/>
        </div>
        <div className='col'>
          <AddTodoForm/>
          <TodoList/>
        </div>
      </div>
    </div>
  );
}

export default App;
