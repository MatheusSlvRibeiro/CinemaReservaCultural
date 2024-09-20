import React from "react";
import styles from '../components/Css/Concept.module.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Navbar from '../components/navbar/navbar' 
import Footer from '../components/Footer/Footer'

const Concept = () => {
    return (
        <div>
            <Navbar />
                <article>
                    <h1>Conceito</h1>

                    <div>
                        <h2> O Cinema Reserva Cultural | Mais do que um Cinema
                        </h2>

                        <p>O cinema Reserva Cultural foi inaugurado em junho de 2005. Localizado no centro de São Paulo, se consagrou como um complexo inovador. No histórico prédio da Fundação Cásper Líbero, o cinema Reserva Cultural destaca-se não só pela exibição dos melhores filmes em cartaz, mas também por ser um cinema com diferentes opções de cultura, lazer e gastronomia em um espaço único e charmoso, em plena Avenida Paulista. O Reserva Cultural conta com 4 salas de cinema, uma bomboniere, um café-boulangerie, uma livraria, e um lobby multimídia que recebe também exposições e eventos além de ser um confortável lounge para os seus frequentadores.</p>

                        <img src={require("../components/Images/Conceito/20230703_183843917_iOS-1536x748.jpg")} alt="Entrada da Sala 1 do cinema, com portas decoradas com arte abstrata em tons de amarelo, azul e vermelho. Ao lado, uma bilheteria com balcão vermelho e pôsteres de filmes na parede." />

                        <p>Seu cinema favorito passou por um remake nas mãos do talentoso arquiteto <a href="https://www.instagram.com/miliari/" target="blank">Rafael Miliari</a> e agora estreia ainda mais bonito, mais colorido e mais confortável.</p>

                        <p>São cenários renovados, com destaque para as pinturas do artista Cristopher Gegembauer. Venha conhecer esse novo e lindo figurino. Reserva, o seu Cinema, Novo.</p>
                    </div>

                    <div>

                    </div>
                </article>
            <Footer />
        </div>
    );
}

export default Concept;
