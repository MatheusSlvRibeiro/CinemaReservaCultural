import React from 'react';
import Navbar from './Components/navbar/navbar';
import Footer from './Components/Footer/Footer';
import Slider from './Components/Slider/Slider';
import PlayingNow from './Components/PlayingNow/PlayingNow';
import News from './Components/News/News'

const SaoPaulo = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <PlayingNow />
      <News />
      <Footer />
    </div>
  );
};

export default SaoPaulo;
