import React from "react";
import style from './location.module.css'


const Location = () => {
return (    
    <div className={style.Location}>
        <img className={style.Icon} src="/images/location.png" alt="Icone de localização"></img>
        <h4 className={style.State}>São Paulo</h4>
        <img className={style.Arrow} src="/images/downArrow.png" alt="seta para baixo"></img>
    </div>
)
}

export default Location;
