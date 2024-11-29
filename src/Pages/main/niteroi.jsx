import React from 'react';

import Navbar from '../../components/navbar/Navbar';
import Slider from '../../components/Slider/Slider';
import News from '../../components/News/News'
import NowPlaying from '../../components/PlayingNow/PlayingNow';
import Info from '../../components/Info/Info';
import Footer from '../../components/Footer/Footer';

const Niteroi = () => {

  return (
    <div>
      <Navbar />
      <Slider />
      <NowPlaying />
      <News 
        cidade="niteroi"/>
      <Info />
      <Footer/>
    </div>
  );
};

export default Niteroi;
