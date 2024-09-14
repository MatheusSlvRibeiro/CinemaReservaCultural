import React from "react";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/Footer/Footer";
import Styles from "../components/Css/Concept.module.css"

function Concept () {
    return (
        <div>
            <NavBar />
            <article>
                    <h1>O Conceito</h1>
                <div className={Styles.Content}>

                    <img className={Styles.Image} 
                         src="http://www.reservacultural.com.br/wp-content/uploads/2014/03/corredor-salas.jpg" alt="" />

                    <div>
                        <h2> O Cinema Reserva Cultural | Mais do que um Cinema</h2>

                        <p>O cinema Reserva Cultural foi inaugurado em junho de 2005. Localizado no centro de São Paulo, se consagrou como um complexo inovador. No histórico prédio da Fundação Cásper Líbero, o cinema Reserva Cultural destaca-se não só pela exibição dos melhores filmes em cartaz, mas também por ser um cinema com diferentes opções de cultura, lazer e gastronomia em um espaço único e charmoso, em plena Avenida Paulista. O Reserva Cultural conta com 4 salas de cinema, uma bomboniere, um café-boulangerie, uma livraria, e um lobby multimídia que recebe também exposições e eventos além de ser um confortável lounge para os seus frequentadores.</p></div>

                </div>

                <h2>Um conceito único com filmes, gastronomia e eventos</h2>

                <p>O cinema Reserva Cultural se diferencia por seu conceito pioneiro e ainda hoje único no Brasil ao reunir diversas opções culturais num lugar só. No Reserva Cultural, além dos melhores filmes em cartaz, você encontra o restaurante Reserva Bistrô, a livraria Reserva, o café-boulangerie Pain de France, e uma agenda eventos agitada como pré-estreia, exposições e eventos corporativos.</p>
            
                <h2>Os melhores filmes em cartaz com tecnologia e conforto</h2>

                <p>No cinema Reserva Cultural, você assiste aos melhores filmes 2D e 3D em quatro salas stadium, equipadas com sistema de projeção digital (DCP) e áudio Dolby Digital, totalizando 580 lugares.</p>

                <p>A programação se dedica a filmes de qualidade, nacionais e estrangeiros, privilegiando títulos independentes e fora do circuito comercial que se destacam em festivais pelo mundo. Esta seleção feita por amantes do cinema rendeu ao Reserva Cultural por cinco anos consecutivos o Prêmio de “Melhor Programação” no Oscar das Salas de Cinema (Guia do Estado de São Paulo). O Reserva Cultural foi também eleito “Melhor Cinema” pelos leitores da Revista Época e também “Melhor Ambiente“, pela Folha de São Paulo.</p>

                <p>O cinema Reserva Cultural oferece também aos seus frequentadores um Cartão Fidelidade. A cada dez ingressos adquiridos, o cliente ganha um. E desde maio de 2011 foi implementado o Cine Social, projeto vinculado ao cartão de fidelidade que funciona da seguinte maneira: uma vez ao ano computa-se o total de ingressos cortesias entregues dentro do programa de fidelidade e o mesmo número será disponibilizado para instituições e associações beneficiadas pelo projeto. O programa de fidelidade também permite que o frequentador receba notícias e promoções exclusivas sobre o cinema e os filmes em cartaz, além de uma newsletter semanal informando sobre as novidades e os vários eventos que o complexo organiza e recebe.</p>

                <img className={Styles.Image} 
                src="https://www.reservacultural.com.br/wp-content/uploads/2015/10/IMG_3344-1024x768.jpg" alt="" />

                <h2>Cinema com gastronomia, livros e eventos</h2>
                <p>No cinema Reserva Cultural, o frequentador encontra diversas opções de entretenimento num lugar só. O espaço conta com uma livraria que propõe uma seleção exclusiva de obras de literatura, história, cinema, artes, moda e comunicação, revistas brasileiras e internacionais e ainda uma boutique de DVDs, cujos títulos seguem o mesmo padrão da programação do cinema.</p>

                <img className={Styles.Image} 
                src="http://www.reservacultural.com.br/wp-content/uploads/2014/03/livraria.jpg" alt="" />

                <p>Na área gastronômica, o cinema Reserva Cultural oferece duas opções aos frequentadores. A Boulangerie Pain de France traz croissants, folhados, quiches, mil-folhas, crème brûlée, pain au chocolat, entre outras delícias francesas.</p>

                <p>Já o Reserva Bistrô, restaurante com ambiente moderno e uma vista espetacular da Avenida Paulista, serve clássicos da culinária francesa e da cozinha internacional preparados pelo chef Flavio Henrique. Uma carta de vinhos e drinks bem executados completam o menu.</p>

                <p>Com espaço para exposições de arte e realização de eventos, o lobby possui monitores de plasma para exibição de entrevistas, trailers e making of de filmes e tem serviço gratuito de wi-fi.</p>

                <h2>Eventos excepcionais que valorizam a sétima arte</h2>

                <p>Desde sua inauguração, o cinema Reserva Cultural se destacou pela frequência e a qualidade de seus eventos. O espaço recebeu dezenas de pré-estreias de filmes com atores, diretores e produtores – brasileiros e estrangeiros, e recebe diversos festivais de cinema anualmente.</p>

                <figure>
                    <img src="http://www.reservacultural.com.br/wp-content/uploads/2016/04/1374741_682038648495270_1744670340_n-300x200.jpg" alt="O elenco de Azul é a Cor Mais Quente no Cinema Reserva Cultural São Paulo" />
                    <figcaption>O elenco de Azul é a Cor Mais Quente no Cinema Reserva Cultural São Paulo</figcaption>
                </figure>

                <p>Nos últimos anos o cinema Reserva Cultural recebeu celebridades como Francis Ford Coppola na pré-estreia de seu filme Tetro; Catherine Deneuve para a première de Potiche e Audrey Tautou para uma sessão de Uma Doce Mentira. Mais recentemente, se destacou com a pré-estreia de Azul é a Cor Mais Quente (vencedor da Palma de Ouro no Festival de Cannes 2013) na presença do diretor Abdellatif Kechiche e das atrizes  Léa Seydoux e Adèle Exarchopoulos, de Adeus à Linguagem, o primeiro filme 3D do celebríssimo diretor francês Jean-Luc Godard, ou ainda de Dois Amigos, com a presença do galã francês Louis Garrel. E o cinema Reserva Cultural sempre dá ao seu público a oportunidade de estar presente nestes eventos, pelo preço convencional de um ingresso.</p>
            </article>
            <Footer />
        </div>
    );
};

export default Concept;