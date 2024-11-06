import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Slider from '../../components/Slider/Slider';
import PlayingNow from '../../components/PlayingNow/PlayingNow';
import News from '../../components/News/News'
import Info from '../../components/Info/Info';
import Footer from '../../components/Footer/Footer';
import data from '../../data/data.json'

const SaoPaulo = () => {
  return (
    <div>
      <Navbar 
        cidade={data.saoPaulo.cidade}
        ingressos={data.saoPaulo.ingressos}
        estacionamento={data.saoPaulo.estacionamento}
        gastronomia={data.saoPaulo.gastronomia || []}/>
      <Slider />
      <PlayingNow 
        cidade="saoPaulo"/>
      <News />
      <Info/>
      <Footer 
        cidade={data.saoPaulo}
        ingressos={data.saoPaulo.ingressos}
        estacionamento={data.saoPaulo.estacionamento}
        endereço={data.saoPaulo.endereço}
        endereçoUrl={data.saoPaulo.endereçoUrl}
        redesSociais={data.saoPaulo.redesSociais}
        gastronomia={data.saoPaulo.gastronomia}
        />
    </div>
  );
};

export default SaoPaulo;
