import React from 'react';

import Navbar from '../../components/navbar/Navbar';
import Slider from '../../components/Slider/Slider';
import PlayingNow from '../../components/PlayingNow/PlayingNow';
import News from '../../components/News/News'
import Info from '../../components/Info/Info';
import Footer from '../../components/Footer/Footer';

const SaoPaulo = () => {

  return (
    <div>
      <Navbar/>
      <Slider />
      <PlayingNow />
      <News 
        cidade="saoPaulo"/>
      <Info/>
      <Footer/>
    </div>
  );
};

export default SaoPaulo;
