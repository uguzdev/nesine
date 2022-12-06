import React, { useState } from 'react';
import "./App.scss";

function App() {
    const [text, setText] = useState('Nesine Frontend Case');

    return <div>{text}</div>
}

export default App;
