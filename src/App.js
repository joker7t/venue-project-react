import React from 'react';
import './resources/styles.scss';

import Header from './components/layouts/Header';
import Featured from "./components/Featured";
import VenueInfo from './components/VenueInfo';
import HighLight from './components/HighLight';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Footer from './components/Footer';

import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Header />

      <Element name='featured'>
        <Featured />
      </Element>

      <Element name='venue-info'>
        <VenueInfo />
      </Element>

      <Element name='highlight'>
        <HighLight />
      </Element>

      <Element name='pricing'>
        <Pricing />
      </Element>

      <Element name='location'>
        <Location />
      </Element>

      <Footer />
    </div>
  );
}

export default App;
