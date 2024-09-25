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
                        <a href="https://www.reservacultural.com.br/niteroi/bistro-reserva/">
                            <img className={styles.Post}
                            src="/images/Brasserie.jpg" 
                            alt="teste"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.reservacultural.com.br/niteroi/bizubizu/" target="blank" rel="noopener noreferrer">
                            <img className={styles.Post}
                            src="/images/DropBurger.jpg"
                            alt="teste"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.reservacultural.com.br/niteroi/mistica-pizza/">
                            <img className={styles.Post}
                            src="/images/MAHATMA.jpg"
                            alt="teste"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://maps.app.goo.gl/U6HPjZcaDLxMZm5d7" target="blank" rel="noopener noreferrer">
                            <img className={styles.Post}
                            src="/images/EstacionamentoNiteroi.jpg"
                            alt="teste"/>
                        </a>
                    </div>
                </Slider>
            </div>
        </section>
    );
}

export default News;
