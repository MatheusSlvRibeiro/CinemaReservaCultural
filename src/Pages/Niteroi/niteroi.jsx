import React from 'react';
import Navbar from './Components/navbar/navbar';
import Footer from './Components/Footer/Footer';
import Slider from './Components/Slider/Slider';
import News from './Components/News/News'
import NowPlayingRj from './Components/PlayingNow/PlayingNow';

const Niteroi = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <NowPlayingRj />
      <News />
      <Footer />
    </div>
  );
};

export default Niteroi;
