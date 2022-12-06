import React, { useState } from 'react';
import "./App.css";

function App() {
    const [text, setText] = useState('Nesine Frontend Case');

    return <div>{text}</div>
}

export default App;
