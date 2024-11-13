import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styles from './News.module.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import postSaoPaulo from "../../data/saoPaulo/postSaoPaulo.json"
import postNiteroi from "../../data/niteroi/postNiteroi.json"

const News = ({cidade}) => {
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

    const localPost = cidade === 'saoPaulo' ? postSaoPaulo : postNiteroi;

    return (
        <section className={styles.PostGrid}>
            <h3 className={styles.sectionTitle}>
                Sabores e Novidades 
            </h3>
        
            <div className={styles.PostSection}>
                <Slider {...settings}>
                    {localPost.map(item => (
                        <div>
                            <a href={item.url} target="_blank" rel="noreferrer noopener">
                                <img 
                                    className={styles.Post} 
                                    src={item.img}
                                    alt={item.alt}/>
                            </a>
                        </div>
                    ))}                
                </Slider>

            </div>
        </section>
    );
}

export default News;
