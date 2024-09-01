import React, { useState } from 'react';
import Styles from './NewsletterSignup.module.css';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('E-mail inscrito:', email);
    alert(`Obrigado por se inscrever`);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className={Styles.newsletterForm}>
      <label className={Styles.newsletterLabel} htmlFor="newsletter-email">Nossa Newsletter</label>
      <input
        type="email"
        id="newsletter-email"
        name="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <button type="submit" className={Styles.newsletterButton}>Inscreva-se</button>
    </form>
  );
};

export default NewsletterSignup;
