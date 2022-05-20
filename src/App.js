import React from 'react';

import Product from './components/Product';

import data from './data';

function App() {
  const {products} = data;
  return (
    <div className="container">
      <div className="row">
        <div className='col'>
          <Product products={products}/>
        </div>

      </div>
    </div>
  );
}

export default App;
