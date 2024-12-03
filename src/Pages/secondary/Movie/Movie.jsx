import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import PlayingNow from '../../../components/PlayingNow/PlayingNow'
import Footer from '../../../components/Footer/Footer';


function Filme() {

    return(
        <div>
            <Navbar />
            <PlayingNow />
            <Footer />
        </div>
    )
}

export default Filme;