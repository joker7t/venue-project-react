import React from 'react';
import './resources/styles.scss';

import Header from './components/layouts/Header';
import Featured from "./components/Featured";
import VenueInfo from './components/VenueInfo';

function App() {
  return (
    <div className="App">
      <Header />
      <Featured />
      <VenueInfo />
    </div>
  );
}

export default App;
