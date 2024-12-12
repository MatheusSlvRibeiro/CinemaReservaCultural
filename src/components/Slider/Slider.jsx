import React, { useState, useEffect, useRef } from 'react';
import styles from './Slider.module.css';

import kayakImg from '../../images/ad/kayak.jpg';
import menuImg from '../../images/ad/menu.jpg';
import aindaEstouAquiImg from '../../images/ad/ainda-estou-aqui-background.jpg';
import OrvalhoImg from '../../images/ad/a-hora-do-orvalho.jpg'
import DyingImg from '../../images/ad/dying.jpg';

const images = [
  { src: kayakImg, 
    href: 'https://www.kayak.com.br/Sao-Paulo.10988.guide' },
  
  { src: menuImg, 
    href: 'https://drive.google.com/file/d/1r1duntiYfC_eTOw-I71YMWEsy2oh5DJM/view' },
  
  { src: aindaEstouAquiImg, 
    href: 'https://www.ingresso.com/cinema/cinema-reserva-cultural-sao-paulo?city=sao-paulo', 
    title: 'Ainda estou aqui' },
  
  { src: OrvalhoImg, 
    href: 'https://www.ingresso.com/cinema/cinema-reserva-cultural-sao-paulo?city=sao-paulo', 
    title: 'A Hora do orvalho' },
  { src: DyingImg, 
    href: 'https://www.ingresso.com/cinema/cinema-reserva-cultural-sao-paulo?city=sao-paulo', 
    title: 'Dying - A última sinfonia' }
];


const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);
  };

  const resetAutoSlide = () => {
    clearInterval(intervalRef.current);
    startAutoSlide();
  };

  useEffect(() => {
    const preloadImages = () => {
      const nextIndex = (currentIndex + 1) % images.length;
      setLoadedImages((prev) => [...new Set([...prev, currentIndex, nextIndex])]);
    };

    preloadImages();
    resetAutoSlide();

    return () => clearInterval(intervalRef.current);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };


  return (
    <div className={styles.slider}>
      <div className={styles.slidesContainer}>
      {images.map((image, index) => {
          console.log(image.src, image.href);
          return (
            <a
              key={index}
              href={image.href}
              className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
              style={{ backgroundImage: `url(${image.src})` }}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Slide ${index + 1}`}
            >
              {image.title && <div className={styles.title}>{image.title}</div>}
            </a>
          );
        })}

      </div>
      <button className={styles.prev} onClick={prevSlide}>&#10094;</button>
      <button className={styles.next} onClick={nextSlide}>&#10095;</button>
      
    </div>
  );
};

export default Slider;
