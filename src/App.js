import React from 'react';
import './resources/styles.scss';

import Header from './components/layouts/Header';
import Featured from "./components/Featured";
import VenueInfo from './components/VenueInfo';
import HighLight from './components/HighLight';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Featured />
      <VenueInfo />
      <HighLight />
      <Pricing />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
