import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Styles from './Contato.module.css';
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import data from '../../../data/data.json'

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    unidade: 'sp',
    assunto: '',
    mensagem: '',
    filme: '',
    horarioSessao: '',
    metodoPagamento: ''
  });

  const [captchaValido, setCaptchaValido] = useState(false);
  const [captchaErro, setCaptchaErro] = useState(null);
  const [mensagemSucesso, setMensagemSucesso] = useState(""); 

  const reCaptchaRef = useRef(null);

  const reCaptchaSiteKey = "6Lc7dXYqAAAAAPHi-169L83jTYyA1kPnQEA3DdB_"; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCaptchaChange = (value) => {
    if (value) {
      setCaptchaValido(true);
      setCaptchaErro(null); 
    } else {
      setCaptchaValido(false);
      setCaptchaErro("Por favor, confirme o captcha antes de enviar.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValido) {
      setCaptchaErro("Por favor, confirme o captcha antes de enviar.");
      return;
    }

    console.log(formData);

    setFormData({
      nome: '',
      email: '',
      telefone: '',
      unidade: 'sp',
      assunto: '',
      mensagem: '',
      filme: '',
      horarioSessao: '',
      metodoPagamento: ''
    });

    setMensagemSucesso("Mensagem enviada com sucesso! Obrigado pelo contato!!");

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (reCaptchaRef.current) {
      reCaptchaRef.current.reset();
    }

    setCaptchaValido(false);
  };

  return (
    <div className={Styles.formWrapper}>
      <Navbar 
                cidade={data.saoPaulo.cidade}/>

      <h1 className={Styles.Title}>FALE CONOSCO</h1>

      {mensagemSucesso && (
        <div className={Styles.Sucess}>
          <strong>{mensagemSucesso.split('!')[0]}!</strong><br />
          {mensagemSucesso.split('!')[1]}
        </div>
      )}

      <form onSubmit={handleSubmit} className={Styles.formulario_contato}>
        <label>
          Nome:
          <input 
            type="text" 
            name="nome"
            placeholder="Nome Completo" 
            value={formData.nome} 
            onChange={handleChange} 
            required 
          />
        </label>
        <label>
          E-mail:
          <input 
            type="email" 
            name="email" 
            placeholder="email@seudominio.com.br" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </label>
        <label>
          Telefone (DDD + número):
          <input 
            type="tel" 
            name="telefone" 
            placeholder="(DDD) Número" 
            value={formData.telefone} 
            onChange={handleChange} 
            required 
          />
        </label>
        <label>
          Selecione a Unidade:
          <select 
            name="unidade" 
            value={formData.unidade} 
            onChange={handleChange} 
          >
            <option value="sp">São Paulo</option>
            <option value="rj">Rio de Janeiro</option>
          </select>
        </label>
        <label>
          Assunto:
          <select 
            name="assunto" 
            value={formData.assunto} 
            onChange={handleChange} 
            required
          >
            <option value="">Selecione um Assunto</option>
            <option value="problemas_compra">Problemas na compra</option>
            <option value="eventos">Eventos</option>
            <option value="sessao_exclusiva">Sessão exclusiva</option>
            <option value="marketing_parcerias">Marketing e Parcerias</option>
            <option value="informacoes_gerais">Informações gerais</option>
          </select>
        </label>
        <label>
          Mensagem:
          <textarea className={Styles.TextArea}
            name="mensagem" 
            placeholder="Olá!"
            value={formData.mensagem} 
            onChange={handleChange} 
            required 
          />
        </label>

      
        <div className={Styles.captchaContainer}>
          <ReCAPTCHA
            sitekey={reCaptchaSiteKey}
            onChange={handleCaptchaChange}
            ref={reCaptchaRef} 
          />
        </div>
        {captchaErro && <p style={{ color: "red" }}>{captchaErro}</p>}
        
        <button type="submit">Enviar</button>
      </form>
      <Footer />
    </div>
  );
};

export default Contato;
