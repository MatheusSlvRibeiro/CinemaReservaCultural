import React from "react";
import Styles from '../components/Css/Concept.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Navbar from '../components/navbar/navbar'; 
import Footer from '../components/Footer/Footer';

const Concept = () => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: false,
        arrows: false,
    };

    return (
        <div>
            <Navbar />
            <article>
                <h1 className={Styles.Title}>Conceito</h1>
                <div>
                    <h2 className={Styles.Subtitle}> O Cinema Reserva Cultural | Mais do que um Cinema</h2>
                    <p className={Styles.Paragraph}>O cinema Reserva Cultural foi inaugurado em junho de 2005. Localizado no centro de São Paulo, se consagrou como um complexo inovador. No histórico prédio da Fundação Cásper Líbero, o cinema Reserva Cultural destaca-se não só pela exibição dos melhores filmes em cartaz, mas também por ser um cinema com diferentes opções de cultura, lazer e gastronomia em um espaço único e charmoso, em plena Avenida Paulista. O Reserva Cultural conta com 4 salas de cinema, uma bomboniere, um café-boulangerie, uma livraria, e um lobby multimídia que recebe também exposições e eventos além de ser um confortável lounge para os seus frequentadores.</p>
                    <img 
                        className={Styles.Image}
                        src={require("../components/Images/Conceito/20230703_183843917_iOS-1536x748.jpg")} 
                        alt="Entrada da Sala 1 do cinema, com portas decoradas com arte abstrata em tons de amarelo, azul e vermelho. Ao lado, uma bilheteria com balcão vermelho e pôsteres de filmes na parede." />
                    <p className={Styles.Paragraph}>Seu cinema favorito passou por um remake nas mãos do talentoso arquiteto <a className={Styles.Links} href="https://www.instagram.com/miliari/" target="blank"><em>Rafael Miliari</em></a> e agora estreia ainda mais bonito, mais colorido e mais confortável.</p>
                    <p className={Styles.Paragraph}>São cenários renovados, com destaque para as pinturas do artista <a className={Styles.Links} href="https://www.tumblr.com/cristophergegembauer"><em>Cristopher Gegembauer</em></a>. Venha conhecer esse novo e lindo figurino. Reserva, o seu Cinema, Novo.</p>
                </div>

                <div className={Styles.Subject}>
                    <h2 className={Styles.Subtitle}>Cinema Reserva Cultural São Paulo</h2>
                    <p className={Styles.Paragraph}>Um conceito único com filmes, gastronomia e eventos</p>
                    <p className={Styles.Paragraph}>
                    O cinema Reserva Cultural se diferencia por seu conceito pioneiro e ainda hoje único no Brasil ao reunir diversas opções culturais num lugar só. No Reserva Cultural, além dos melhores filmes em cartaz, você encontra o restaurante Reserva Bistrô, a livraria Reserva, o café-boulangerie Pain de France, e uma agenda eventos agitada como pré-estreia, exposições e eventos corporativos.</p>
                </div>

                <div className={Styles.Subject}>
                    <h2 className={Styles.Subtitle}>Os Melhores Filmes em Cartaz com Tecnologia e Conforto</h2>
                    <p className={Styles.Paragraph}>No Cinema Reserva Cultural, você assiste aos melhores filmes 2D e 3D em quatro salas stadium, equipadas com sistema de projeção digital (DCP) e áudio Dolby Digital, totalizando 580 lugares. A programação se dedica a filmes de qualidade, nacionais e estrangeiros, privilegiando títulos independentes e fora do circuito comercial que se destacam em festivais pelo mundo. Esta seleção feita por amantes do cinema rendeu ao Reserva Cultural, por cinco anos consecutivos, o Prêmio de “Melhor Programação” no Oscar das Salas de Cinema (Guia do Estado de São Paulo). O Reserva Cultural também foi eleito “Melhor Cinema” pelos leitores da Revista Época e “Melhor Ambiente” pela Folha de São Paulo.</p>
                    <img 
                        className={Styles.Image}
                        src={require("../components/Images/Conceito/SalasDeCinema.jpg")} 
                        alt="Interior de uma sala de cinema vazia, com fileiras de assentos vermelhos e pretos em uma sala com tela branca iluminada, destacando a escada com luzes verdes ao longo do corredor." />                        
                </div>
                
                <div className={Styles.Subject}>
                    <div className={Styles.SideBySide}>
                        <div>
                            <h2 className={Styles.Subtitle}>Cartão Fidelidade e Cine Social</h2>
                            <p className={Styles.Paragraph}>O Cinema Reserva Cultural oferece aos seus frequentadores um Cartão Fidelidade. A cada dez ingressos adquiridos, o cliente ganha um. Desde maio de 2011, foi implementado o Cine Social, projeto vinculado ao cartão de fidelidade que funciona da seguinte maneira: uma vez ao ano, computa-se o total de ingressos cortesia entregues dentro do programa de fidelidade e o mesmo número será disponibilizado para instituições e associações beneficiadas pelo projeto. O programa de fidelidade também permite que o frequentador receba notícias e promoções exclusivas sobre o cinema e os filmes em cartaz, além de uma newsletter semanal informando sobre as novidades e os vários eventos que o complexo organiza e recebe.</p>
                        </div>

                        <a href="/loyalty">
                            <img 
                                className={Styles.Image}
                                src="/images/Fidelidade.jpg" 
                                alt="Banner do Programa Fidelidade do Reserva Cultural com os seguintes benefícios: ganhe 1 ingresso a cada 10 comprados, adquira descontos em sessões especiais e receba a programação semanal com informações exclusivas. Botão ao final com o texto 'Saiba Mais'." />
                        </a>    
                    </div>                        
                </div>

                <div className={Styles.Subject}>
                    <h2 className={Styles.Subtitle}>Cinema com Gastronomia, Livros e Eventos</h2>
                    <p className={Styles.Paragraph}>No Cinema Reserva Cultural, o frequentador encontra diversas opções de entretenimento em um só lugar. O espaço conta com uma livraria que propõe uma seleção exclusiva de obras de literatura, história, cinema, artes, moda e comunicação, revistas brasileiras e internacionais e ainda uma boutique de DVDs, cujos títulos seguem o mesmo padrão da programação do cinema.</p>

                    {/* Slider aqui */}
                    <Slider className={Styles.Slider} {...sliderSettings}>
                        <div>
                            <img src={require('../components/Images/Gastronomia/FileDePeixeNaCrostaDeAlho.jpg')} alt="Slide 1" />
                        </div>
                        <div>
                            <img src={require('../components/Images/Gastronomia/PicadinhodeCarne.jpg')} alt="Slide 2" />
                        </div>
                        <div>
                            <img src={require('../components/Images/Gastronomia/Galeto.jpg')} alt="Slide 3" />
                        </div>
                        <div>
                            <img src={require('../components/Images/Gastronomia/Fotografia.jpg')} alt="Slide 3" />
                        </div>
                        <div>
                            <img src={require('../components/Images/Gastronomia/MenuReserva.jpg')} alt="Slide 3" />
                        </div>
                    </Slider>

                    <p className={Styles.Paragraph}>Na área gastronômica, o Cinema Reserva Cultural oferece duas opções aos frequentadores. A Boulangerie Pain de France traz croissants, folhados, quiches, mil-folhas, crème brûlée, pain au chocolat, entre outras delícias francesas. Já o Reserva Bistrô, restaurante com ambiente moderno e uma vista espetacular da Avenida Paulista, serve clássicos da culinária francesa e da cozinha internacional preparados pelo chef Flavio Henrique. Uma carta de vinhos e drinks bem executados completam o menu.</p>
                </div>

                <div className={Styles.Subject}>
                    <h2 className={Styles.Subtitle}> Espaço para Exposições e Eventos</h2>
                    <p className={Styles.Paragraph}>Com espaço para exposições de arte e realização de eventos, o lobby possui monitores de plasma para exibição de entrevistas, trailers e making of de filmes e tem serviço gratuito de wi-fi.</p>
                    <p className={Styles.Paragraph}>Desde sua inauguração, o Cinema Reserva Cultural se destacou pela frequência e qualidade de seus eventos. O espaço recebeu dezenas de pré-estreias de filmes com atores, diretores e produtores brasileiros e estrangeiros, e diversos festivais de cinema anualmente.</p>
                </div>

            </article>
            <Footer />
        </div>
    );
}

export default Concept;
