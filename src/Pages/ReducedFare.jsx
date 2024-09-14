import React from "react";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/Footer/Footer";
import Styles from '../components/Css/ReducedFare.module.css';


function reducedFare () {
    return (
        <div>
            <NavBar />
                <img className={Styles.Image} 
                    src="./images/meia-entrada.png" alt="bla bla bla" />
            <Footer />
        </div>
    );
};

export default reducedFare;