import React from "react";
import MovieSlider from "../Utilities/FetchMovieData";
import styles from './PlayingNow.module.css'

const NowPlaying = () => {
      return (
            <section id='em_cartaz' className={styles.GridContent}>
                  <div>
                        <h3 className={styles.sectionTitle}>
                              em cartaz
                        </h3> 
                  </div>

                  <div>
                        <MovieSlider />      
                  </div>
            </section>
      )
};

export default NowPlaying;
