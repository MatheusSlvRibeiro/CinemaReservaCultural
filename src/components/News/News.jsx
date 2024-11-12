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

        handleResize();

        window.addEventListener('resize', handleResize);

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
                Sabores e Novidades 
            </h3>
        
            <div className={styles.PostSection}>
                <Slider {...settings}>
                
                    <div>
                        <a href="https://drive.google.com/file/d/1r1duntiYfC_eTOw-I71YMWEsy2oh5DJM/view">
                            <img className={styles.Post}
                            src="/images/post-250x250.jpg" 
                            alt="teste"/>
                        </a>
                    </div>

                    <div>
                        <a href="https://drive.google.com/file/d/1r1duntiYfC_eTOw-I71YMWEsy2oh5DJM/view?usp=sharing" target="blank" rel="noopener noreferrer">
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

                </Slider>
            </div>
        </section>
    );
}

export default News;
