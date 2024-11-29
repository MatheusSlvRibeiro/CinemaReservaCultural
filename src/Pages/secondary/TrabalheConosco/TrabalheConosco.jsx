import React, { useState } from "react";
import Styles from './trabalheConosco.module.css';
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

function TrabalheConosco (){
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setFormSubmitted(true); 
  };

  return (
    <div>
      <Navbar
        estacionamento="/"/>
      <div className={Styles.content}>
        <div className={Styles.aside}>
          <img src="/images/logoReservaCultural.png" alt="Logo reserva cultural" />
        </div>

        <div className={Styles.bside}>
          <h1 className={Styles.Title}>Trabalhe Conosco</h1>

          <span className={Styles.Span}>
            ATENÇÃO: Confira todos os dados para o envio correto do formulário!
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
              <label className={Styles.LabelCidade}>
              Selecione a Unidade:
              <select 
                name="unidade" 
              >
                <option value="sp">São Paulo</option>
                <option value="rj">Rio de Janeiro</option>
              </select>
              </label>
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
