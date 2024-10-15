import React from "react";
import Styles from './modalRemove.module.css'

function modalRemove(){
    return (
        <div className={Styles.overplay}>
            <div className={Styles.modal}>
                <div className={Styles.header}>
                    <h2>Tem certeza que deseja excluir {filme} da lista ?</h2>
                    <button className={Styles.closeButton}  onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className={Styles.content}>{Children}</div>
            </div>
        </div>
    );
};

export default modalRemove;