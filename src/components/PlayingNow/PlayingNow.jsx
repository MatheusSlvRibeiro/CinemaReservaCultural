import React from "react";
import MovieSlider from '../../Utils/FetchMovieData';
import styles from './PlayingNow.module.css'

const NowPlaying = ({cidade}) => {
      return (
            <section id='em_cartaz' className={styles.GridContent}>
                  <div>
                        <h3 className={styles.sectionTitle}>
                              em cartaz
                        </h3> 
                  </div>

                  <div>
                        <MovieSlider 
                              cidade={cidade}/>
                  </div>
            </section>
      )
};

export default NowPlaying;
