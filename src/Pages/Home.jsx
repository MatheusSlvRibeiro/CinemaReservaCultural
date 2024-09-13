import React from "react";
import NavBar from '../components/navbar/navbar';
import Slider from '../components/Slider/Slider';
import NowPlaying from '../components/PlayingNow/PlayingNow';
import News from '../components/News/News';
import Footer from '../components/Footer/Footer';

function Home () {
    return (
        <div className="home">
            <NavBar />
            <Slider />
            <NowPlaying />
            <News />            
            <Footer />
        </div>
    )
}

export default Home;