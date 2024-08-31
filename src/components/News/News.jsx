import React from "react";
import Slider from "react-slick"; // Certifique-se de instalar e importar o react-slick
import styles from './News.module.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const News = () => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3, // Ajuste conforme necessário
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <section className={styles.PostGrid}>
            <h3 className={styles.sectionTitle}>
                sabores, novidades e conforto
            </h3>
        
            <div className={styles.PostSection}>
                <Slider {...settings}>
                    <div>
                        <a href="#PainDeFrance">
                            <img className={styles.Post}
                            src="/images/post-250x250.jpg" 
                            alt="teste"/>
                        </a>
                    </div>
                    <div>
                        <a href="#conceito">
                            <img className={styles.Post}
                            src="/images/post-1000x1000.jpg"
                            alt="teste"/>
                        </a>
                    </div>
                    <div>
                        <a href="#Bistro">
                            <img className={styles.Post}
                            src="/images/Post-250x240-2.jpg"
                            alt="teste"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://maps.app.goo.gl/U6HPjZcaDLxMZm5d7" target="blank" rel="noopener noreferrer">
                            <img className={styles.Post}
                            src="/images/estacionamento.jpg"
                            alt="teste"/>
                        </a>
                    </div>
                    {/* Adicione mais slides aqui conforme necessário */}
                </Slider>
            </div>
        </section>
    );
}

export default News;
