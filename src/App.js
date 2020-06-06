import React from 'react';
import './resources/styles.scss';

import Header from './components/layouts/Header';
import Featured from "./components/Featured";
import VenueInfo from './components/VenueInfo';
import HighLight from './components/HighLight';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="App">
      <Header />
      <Featured />
      <VenueInfo />
      <HighLight />
      <Pricing />
    </div>
  );
}

export default App;
