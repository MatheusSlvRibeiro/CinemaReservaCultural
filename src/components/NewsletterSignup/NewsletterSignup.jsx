import React, { useState } from 'react';
import Styles from './NewsletterSignup.module.css';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('E-mail inscrito:', email);
    alert('Obrigado por se inscrever');
    setEmail('');
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className={Styles.newsletterForm}>
      <label className={Styles.newsletterLabel} htmlFor="newsletter-name">Nossa newsletter</label>
      
      <label htmlFor="newsletter-name" className={Styles.newsletterLabel}>
        <input
          type="text"
          id="newsletter-name"
          name="name"
          placeholder="Digite seu nome"
          value={name}
          onChange={handleNameChange}
          required
        />
      </label>

      <label htmlFor="newsletter-email" className={Styles.newsletterLabel}>
        <input
          type="email"
          id="newsletter-email"
          name="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </label>

      <label htmlFor="newsletter-phone" className={Styles.newsletterLabel}>
        <input
          type="tel"
          id="newsletter-phone"
          name="numero"
          placeholder="(DDD) Número"
          value={phone}
          onChange={handlePhoneChange}
          required
        />
      </label>

      <button type="submit" className={Styles.newsletterButton}>Inscreva-se</button>
    </form>
  );
};

export default NewsletterSignup;
