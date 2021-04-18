import React from 'react';
import List from './list';
import PRODUCTS from './productsAPI';

function App() {
  return (
    <div>
      <List products={PRODUCTS} />
    </div>
  );
}

export default App;
