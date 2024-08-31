import React from "react";
import styles from './News.module.css'

const News = () => {
    return (

        <section className={styles.PostGrid}>
            <h3 className={styles.sectionTitle}>
            sabores, novidades e conforto
            </h3>
        
            <div className={styles.PostSection}>
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
                
            </div>
        </section>
    )
}

export default News;