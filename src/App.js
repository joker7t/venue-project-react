import React from 'react';
import './resources/styles.css';

import Header from './components/layouts/Header';
import Featured from "./components/Featured";

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'green', height: '1000px' }}>
      <Header />
      <Featured />
    </div>
  );
}

export default App;
