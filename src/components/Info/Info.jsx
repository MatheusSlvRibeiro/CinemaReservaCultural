import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Styles from './Info.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Info() {
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                setSlidesToShow(1);
            } else if (window.innerWidth <= 700) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
            }
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <div className={Styles.Container}>
            <div>
                <p className={Styles.Title}>Saiba mais</p>
            </div>
            <div className={Styles.Content}>
                <Slider {...settings}>
                    <div className={Styles.Img}>
                        <a href="/TarifasSp">
                            <img
                                src="/images/Meiaentrada.jpg"
                                alt="Cartaz do cinema Reserva Cultural informando sobre o direito à meia-entrada de acordo com a Lei N° 12.933/2013, com ícones de pipoca, refrigerante, ingresso e um botão escrito Saiba Mais"
                            />
                        </a>
                    </div>

                    <div className={Styles.Img}>
                        <a href="/FidelidadeSp">
                            <img
                                src="/images/Fidelidade.jpg"
                                alt="Cartaz do programa de fidelidade do cinema Reserva Cultural com as seguintes informações: Ganhe 1 ingresso a cada 10 comprados; Adquira descontos em sessões especiais; Receba a programação semanal com novidades exclusivas."
                            />
                        </a>
                    </div>

                    <div className={Styles.Img}>
                        <a href="/guiaSp">
                            <img
                                src="/images/Guide.jpg"
                                alt="Banner Guia do Bom Espectador com ícones de cinema e botão 'Saiba Mais"
                            />
                        </a>
                    </div>

                    <div className={Styles.Img}>
                        <a href="/ConceitoSp">
                            <img
                                src="/images/post-1000x1000.jpg"
                                alt="teste"/>
                        </a>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Info;
