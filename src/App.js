import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import Slider from './components/Slider/Slider';
import NowPlaying from './components/PlayingNow/PlayingNow';
import Post from './components/Post/Post';


function App() {
  return (
      <div>
        <NavBar />
        <Slider />
        <NowPlaying />
        <Post />
      </div>
  );
}

export default App;
