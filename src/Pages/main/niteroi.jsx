import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Slider from '../../components/Slider/Slider';
import News from '../../components/News/News'
import NowPlaying from '../../components/PlayingNow/PlayingNow';
import Info from '../../components/Info/Info';
import Footer from '../../components/Footer/Footer';
import data from '../../data/data.json'

const Niteroi = () => {
  return (
    <div>
      <Navbar 
        cidade={data.niteroi.cidade}
        ingressos={data.niteroi.ingressos}
        estacionamento={data.niteroi.estacionamento}
        gastronomia={data.niteroi.gastronomia || []}/>
      <Slider />
      <NowPlaying  
        cidade="niteroi"/>
      <News />
      <Info />
      <Footer 
        cidade={data.niteroi}
        ingressos={data.niteroi.ingressos}
        estacionamento={data.niteroi.estacionamento}
        endereço={data.niteroi.endereço}
        endereçoUrl={data.niteroi.endereçoUrl}
        redesSociais={data.niteroi.redesSociais}
        gastronomia={data.niteroi.gastronomia}
      />
    </div>
  );
};

export default Niteroi;
