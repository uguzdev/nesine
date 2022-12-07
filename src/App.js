import React, { useState } from 'react';
import './App.scss';

function App() {
  const [text] = useState('Nesine Frontend Case');

  return <div>{text}</div>;
}

export default App;
