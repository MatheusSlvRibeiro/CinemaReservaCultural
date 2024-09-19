import React from "react";
import Navbar from '../../navbar/navbar'
import Slider from '../../Slider/Slider';
import NowPlaying from "../../PlayingNow/PlayingNow";
import News from "../../News/News";
import Footer from "../../Footer/Footer";

function SaoPaulo () {
    return (
        <section>
            <Navbar />
            <Slider />
            <NowPlaying />
            <News />
            <Footer/>
        </section>
    );
};

export default SaoPaulo;