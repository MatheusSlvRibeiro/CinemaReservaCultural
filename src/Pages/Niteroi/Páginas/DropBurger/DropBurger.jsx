import React from "react";
import NavBar from "../Components/navbar/navbar";
import Footer from "../Components/Footer/Footer";
import News from "../Components/News/News";

const Dropburger = () => {
    return (
        <div>
            <NavBar />
            <article>
                <h1>DROP BURGER</h1>
                <h2>Simples, justo e saboroso</h2>
                <h2>Mais uma novidade no Complexo Reserva Cultural Niterói</h2>

                <p>O Drop Burger é uma hamburgueria diferente de tudo o que você já experimentou – começando pela forma como produzimos nosso hamburger</p>
                <p>A especialidade do Drop são os smashburgers – uma técnica que consiste em moldar o blend de carne em uma bola e literalmente esmaga-la na chapa bem quente – feitos com carne de primeira moída pouco antes de serem prensadas na chapa. Cada hambúrguer pesa 120g e, por serem preparados na hora, carregam suculência e sabor sem igual.</p>

                {/*Criar slideshow dos hamburgers aqui*/}

                <p>O carro chefe do Drop Burger leva o nome da casa e, além de carne e queijo, vem recheado com um creme de bacon especial e cebola caramelizada (R$24,00). Se o cliente quiser algo mais simples, cheeseburger custa R$16,00. O restaurante conta ainda com uma opção vegana feita com hambúrguer de cogumelos e sai por R$26,00.</p>

                <p>Os sócios do empreendimento João Paulo e João Bosco são mineiros e chegaram em Niterói há pouco tempo, vindo de uma experiência que também dá água na boca. Eles começaram a trabalhar juntos na abertura da Mística Pizza, na Vila Madalena – bairro com restaurantes e uma vida noturna agitada em São Paulo capital. “Nas folgas da pizzaria a gente fazia hambúrguer para os amigos. Estes amigos começaram a chamar outros amigos para a nossa casa e, quando nos demos conta, estávamos fazendo eventos particulares em São Paulo” – conta João Paulo.</p>

                <p>João Bosco veio junto com a pizzaria para Niterói. Em seu primeiro ano, a Mística Pizza foi eleita a melhor pizza da cidade no Água na Boca do jornal O Globo. Um tempo depois, João Paulo também se rendeu ao chamado do mar e, junto com João Bosco, começaram este novo projeto.</p>

                <p>“Estamos muito animados com a resposta do público, são muitos elogios aos produtos e ao nosso atendimento. A loja abre todos os dias e a gente já opera com força total também no delivery” conta João Bosco.</p>

                <p>Assim, no início do mês de novembro, nasceu o Drop Burger, que já faz sucesso entre clientes e os novos amigos que os dois estão fazendo pela região. Mais que uma lanchonete, o ambiente é ideal para curtir um happy hour ou tomar um milk shake para espantar o calor. E como bons mineiros, receber bem, com uma boa conversa também é uma especialidade da casa.</p>
            
                <p>O Drop Burger está localizado no Cinema Reserva Cultural – Rua Av. Visconde do Rio Branco, 880, São Domingos – e funciona de terça a domingo das 17:00 às 23:00</p>

                <p>Ficou com vontade, nos visite ou faça pedido pelo IFood ou Uber Eats.</p>

                <p>Fotos dos sanduíches e mais informações sobre a casa, acesse nosso Instagram: <a href="instagram/dropburger.">@dropburger.</a></p>
            </article>
            <News />
            <Footer />
        </div>
    );
};

export default Dropburger;