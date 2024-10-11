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

  // Referência para o componente do reCAPTCHA
  const reCaptchaRef = useRef(null);

  // Chave do reCAPTCHA
  const reCaptchaSiteKey = "6LfcrUkqAAAAAEhuMjrfNJKAzBk2-4opWA3RDtfp"; 

  // Função para lidar com as mudanças nos inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para validar o reCAPTCHA
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

    // Exibe a mensagem de sucesso
    setMensagemSucesso("Mensagem enviada com sucesso! Obrigado pelo contato!!");

    // Rolando a página para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Resetando o reCAPTCHA
    if (reCaptchaRef.current) {
      reCaptchaRef.current.reset();
    }

    // Resetar o estado do captcha
    setCaptchaValido(false);
  };

  return (
    <div className={Styles.formWrapper}>
      <Navbar 
                cidade={data.saoPaulo.cidade}/>

      <h1 className={Styles.Title}>FALE CONOSCO</h1>

      {/* Exibe a mensagem de sucesso diretamente */}
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

        {/* Componente reCAPTCHA */}
        <div className={Styles.captchaContainer}>
          <ReCAPTCHA
            sitekey={reCaptchaSiteKey}
            onChange={handleCaptchaChange}
            ref={reCaptchaRef} // Adicionando referência ao reCAPTCHA
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
