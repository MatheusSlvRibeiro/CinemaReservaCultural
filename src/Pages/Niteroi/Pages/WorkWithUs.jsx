import React, { useState } from "react";
import Styles from '../Components/Css/WorkWithUs.module.css';
import Navbar from "../Components/navbar/navbar";
import Footer from '../Components/Footer/Footer';

function TrabalheConosco() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setFormSubmitted(true); 
  };

  return (
    <div>
      <Navbar />
      <div className={Styles.content}>
        <div className={Styles.aside}>
          <img src="images/Logo_reserva01.png" alt="" />
        </div>

        <div className={Styles.bside}>
          <h1 className={Styles.Title}>Trabalhe Conosco</h1>

          <span>
            ATENÇÃO: Você está no formulário de envio de CV para o Reserva Cultural de São Paulo.
            Caso queira enviar para o Reserva Niterói, <a href="#embreve">clique aqui</a>.
          </span>
          
          {formSubmitted ? (
            <div className={Styles.successMessage}>
              <p>Obrigado por enviar o seu currículo! Nossa equipe analisará suas informações e retornaremos em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" id="name" placeholder="Nome Completo*" required />
              <input type="email" name="email" id="email" placeholder="E-mail*" required />
              <input type="tel" name="number" id="number" placeholder="Telefone Celular*" required />
              <input type="text" name="city" id="city" placeholder="Cidade*" required />
              <input type="file" name="cv" id="cv" accept=".pdf, .docx" required />
              
              <div className={Styles.submitSection}>
                <button className={Styles.subtmit} type="submit">Enviar</button>
              </div>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TrabalheConosco;
