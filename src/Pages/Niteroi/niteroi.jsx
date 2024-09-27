import React from 'react';
import Navbar from './Componentes/navbar/navbar';
import Footer from './Componentes/Footer/Footer';
import Slider from './Componentes/Slider/Slider';
import News from './Componentes/News/News'
import NowPlayingRj from './Componentes/PlayingNow/PlayingNow';
import Info from './Componentes/Info/Info';

const Niteroi = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <NowPlayingRj />
      <News />
      <Info />
      <Footer />
    </div>
  );
};

export default Niteroi;
