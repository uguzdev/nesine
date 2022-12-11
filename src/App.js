import React from 'react';
import './App.scss';

import HomePage from './pages/Home';
import BasketStore from './store/Basket';

function App() {
  return (
    <BasketStore>
      <HomePage />
    </BasketStore>
  );
}

export default App;
