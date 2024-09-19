import React, { useState } from "react";
import Styles from '../components/Css/Contact.module.css';
import NavBar from "../components/navbar/navbar";
import Footer from "../components/Footer/Footer";

const FormContact = () => {
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

  // Função para lidar com as mudanças nos inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicionar a lógica para enviar os dados do formulário
    console.log(formData);
  };

  return (
    <div className={Styles.formWrapper}>
      <NavBar />

      <h1 className={Styles.Title}>FALE CONOSCO</h1>
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
        
        <button type="submit">Enviar</button>
      </form>
      <Footer />
    </div>
  );
};

export default FormContact;
