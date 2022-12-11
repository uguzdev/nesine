import React from 'react';
import './App.scss';

import HomePage from './pages/Homepage';
import BasketStore from './store/Basket';

function App() {
  return (
    <BasketStore>
      <HomePage />
    </BasketStore>
  );
}

export default App;
