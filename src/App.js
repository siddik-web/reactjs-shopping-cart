import React from 'react';
import Dress from './components/Dress';
import Ingredient from './components/Ingredient';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Ingredient/>
        </div>
      </div>
    </div>
  );
}

export default App;
