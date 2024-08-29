import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import Slider from './components/Slider/Slider';
import MovieSlider from './components/Utilities/FetchMovieData';
import NowPlaying from './components/PlayingNow/PlayingNow';


function App() {
  return (
      <div>
        <NavBar />
        <Slider />
        <NowPlaying />
      </div>
  );
}

export default App;
