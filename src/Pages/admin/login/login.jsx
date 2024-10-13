import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Styles from './login.module.css';
import data from '../../../data/admins.json';
import ScrollReveal from 'scrollreveal';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const sr = ScrollReveal({
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            origin: 'bottom',
        });

        sr.reveal('.reveal', {
            interval: 200,
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();


        if (!username || !password) {
            setError("Por favor, preencha todos os campos!");
            return;
        }

        const admin = data.admins.find(admin => admin.username === username && admin.password === password);

        if (admin) {
            setError("");
            navigate('/Admin');
        } else {
            setError("Usuário ou senha incorretos!");
        }
    };

    return (
        <article className={Styles.loginContainer}>
            <img 
                src={require('../../../images/reservaCultural/logoReservaCultural.png')} 
                alt="Logo Reserva Cultural" 
            />
            <h2 className={Styles.subtitle}>Login</h2>
            <form className={Styles.form} onSubmit={handleSubmit} noValidate>
                <div className={Styles.inputGroup}>
                    <label 
                        htmlFor="username"
                        className={Styles.labelForm}>Usuário</label>
                    <input 
                        className={Styles.inputForm}
                        type="text" 
                        placeholder="Seu usuário"
                        id="username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} 
                        required
                    />
                </div>
                <div className={Styles.inputGroup}>
                    <label 
                        className={Styles.labelForm}
                        htmlFor="password">Senha</label>
                    <input 
                        className={Styles.inputForm}
                        type="password"
                        placeholder="Digite sua senha" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className={Styles.error}>{error}</p>}
                <button type="submit" className={Styles.submit}>Entrar</button>
            </form>
        </article>
    );
}

export default Login;
