import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import Slider from './components/Slider/Slider';
import SimpleSlider from './components/PlayingSlider/PlayingSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
      <div>
        <NavBar />
        <Slider />
        <SimpleSlider />
      </div>
  );
}

export default App;
