import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import Slider from './components/Slider/Slider';
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
