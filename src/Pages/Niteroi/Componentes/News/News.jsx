import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styles from './News.module.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const News = () => {
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                setSlidesToShow(1);
            } else if (window.innerWidth <= 705) {
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
        autoplaySpeed: 5000,
    };

    return (
        <section className={styles.PostGrid}>
            <h3 className={styles.sectionTitle}>
                Sabores e novidades 
            </h3>
        
            <div className={styles.PostSection}>
                <Slider {...settings}>
                    <div>
                        <a href="https://www.instagram.com/brasseriereserva/">
                            <img className={styles.Post}
                            src="/images/Brasserie.jpg" 
                            alt="Logotipo da Brasserie Reserva"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.reservacultural.com.br/niteroi/bizubizu/" target="blank" rel="noopener noreferrer">
                            <img className={styles.Post}
                            src="/images/DropBurger.jpg"
                            alt="Logotipo da DropBurger, com a inscrição 'Smash Burguer Artesanal' em um estilo vintage, com uma faixa horizontal contendo o nome 'DropBurger' e a imagem de uma vaca pequena no topo. O fundo é preto e o logotipo tem tons amarelados e brancos."/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/mahatmapizza/">
                            <img className={styles.Post}
                            src="/images/MAHATMA.jpg"
                            alt="Logotipo da Mahatma Pizza & Love"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.google.com/maps/place/Av.+Visconde+do+Rio+Branco,+880+-+S%C3%A3o+Domingos,+Niter%C3%B3i+-+RJ,+24210-200/@-22.8982811,-43.1332801,17z/data=!3m1!4b1!4m6!3m5!1s0x9983e476739ca3:0x100a0ab61b58ef51!8m2!3d-22.8982861!4d-43.1307052!16s%2Fg%2F11pvbz_pzn?entry=ttu&g_ep=EgoyMDI0MDkyMi4wIKXMDSoASAFQAw%3D%3D" target="blank" rel="noopener noreferrer">
                            <img className={styles.Post}
                            src="/images/EstacionamentoNiteroi.jpg"
                            alt="Anúncio de estacionamento conveniado do cinema Reserva Cultural, com a imagem de um carro preto sobre um fundo amarelo. O texto informa o valor do estacionamento: tempo de cortesia de 10 minutos, até 3 horas por R$20, até 3 horas e 30 minutos por R$25, e demais frações de 30 minutos por R$5. Localizado na Av. Visconde do Rio Branco, nº 880, Niterói."/>
                        </a>
                    </div>
                </Slider>
            </div>
        </section>
    );
}

export default News;
