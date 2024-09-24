import React from "react";
import Styles from '../components/Css/Concept.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Navbar from "../Components/navbar/navbar"; 
import Footer from '../../../components/Footer/Footer';
import Info from '../../../components/Info/Info'

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
            <article className={Styles.Article}>
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
                            <img src={require('../components/Images/Gastronomia/FileDePeixeNaCrostaDeAlho.jpg')} alt="Prato gourmet composto por filé de peixe com crosta de alho servido ao lado de risoto cremoso de espinafre, decorado com uma pequena pimenta vermelha no topo. A apresentação está em um prato escuro sobre uma mesa de madeira." />
                        </div>
                        <div>
                            <img src={require('../components/Images/Gastronomia/PicadinhodeCarne.jpg')} alt="" />
                        </div>
                        <div>
                            <img src={require('../components/Images/Gastronomia/Galeto.jpg')} alt="" />
                        </div>
                        <div>
                            <img src={require('../components/Images/Gastronomia/Fotografia.jpg')} alt="" />
                        </div>
                        <div>
                            <img src={require('../components/Images/Gastronomia/MenuReserva.jpg')} alt="" />
                        </div>
                    </Slider>

                    <p className={Styles.Paragraph}>Na área gastronômica, o Cinema Reserva Cultural oferece duas opções aos frequentadores. A Boulangerie Pain de France traz croissants, folhados, quiches, mil-folhas, crème brûlée, pain au chocolat, entre outras delícias francesas. Já o Reserva Bistrô, restaurante com ambiente moderno e uma vista espetacular da Avenida Paulista, serve clássicos da culinária francesa e da cozinha internacional preparados pelo chef Flavio Henrique. Uma carta de vinhos e drinks bem executados completam o menu.</p>
                </div>

                <div className={Styles.Subject}>
                    <h2 className={Styles.Subtitle}> Espaço para Exposições e Eventos</h2>
                    
                    <p className={Styles.Paragraph}>Com espaço para exposições de arte e realização de eventos, o lobby possui monitores de plasma para exibição de entrevistas, trailers e making of de filmes e tem serviço gratuito de wi-fi.</p>
                    
                    <p className={Styles.Paragraph}>Desde sua inauguração, o Cinema Reserva Cultural se destacou pela frequência e qualidade de seus eventos. O espaço recebeu dezenas de pré-estreias de filmes com atores, diretores e produtores brasileiros e estrangeiros, e diversos festivais de cinema anualmente.</p>
                    
                    <h2 className={Styles.Subtitle}>Eventos Excepcionais que Valorizam a Sétima Arte</h2>

                    <p className={Styles.Paragraph}>Desde sua inauguração, o Cinema Reserva Cultural se destacou pela frequência e qualidade de seus eventos. O espaço recebeu dezenas de pré-estreias de filmes com atores, diretores e produtores brasileiros e estrangeiros, e diversos festivais de cinema anualmente.</p>

                    <h2 className={Styles.Subtitle}>Pré-estreias Memoráveis com Atores Inesquecíveis</h2>

                    <p className={Styles.Paragraph}>Nos últimos anos, o Cinema Reserva Cultural recebeu celebridades como Francis Ford Coppola na pré-estreia de seu filme Tetro; Catherine Deneuve para a première de Potiche e Audrey Tautou para uma sessão de Uma Doce Mentira. Mais recentemente, se destacou com a pré-estreia de Azul é a Cor Mais Quente (vencedor da Palma de Ouro no Festival de Cannes 2013) na presença do diretor Abdellatif Kechiche e das atrizes Léa Seydoux e Adèle Exarchopoulos, de Adeus à Linguagem, o primeiro filme 3D do celebríssimo diretor francês Jean-Luc Godard, ou ainda de Dois Amigos, com a presença do galã francês Louis Garrel. E o Cinema Reserva Cultural sempre dá ao seu público a oportunidade de estar presente nestes eventos, pelo preço convencional de um ingresso</p>

                    <p className={Styles.Paragraph}>Nos últimos anos, o Cinema Reserva Cultural recebeu celebridades como Francis Ford Coppola na pré-estreia de seu filme Tetro; Catherine Deneuve para a première de Potiche e Audrey Tautou para uma sessão de Uma Doce Mentira. Mais recentemente, se destacou com a pré-estreia de Azul é a Cor Mais Quente (vencedor da Palma de Ouro no Festival de Cannes 2013) na presença do diretor Abdellatif Kechiche e das atrizes Léa Seydoux e Adèle Exarchopoulos, de Adeus à Linguagem, o primeiro filme 3D do celebríssimo diretor francês Jean-Luc Godard, ou ainda de Dois Amigos, com a presença do galã francês Louis Garrel. E o Cinema Reserva Cultural sempre dá ao seu público a oportunidade de estar presente nestes eventos, pelo preço convencional de um ingresso</p>
                </div>

                <div className={Styles.Subject}>
                    <h2 className={Styles.Subtitle}>Eventos e Parcerias que Abrangem Todos os Públicos</h2>

                    <p className={Styles.Paragraph}>Desde sua abertura, o Reserva Cultural participa todo ano da Mostra Internacional de Cinema de São Paulo e organiza em parceria com a Aliança Francesa o famoso CineClub, oferecendo antes da exibição de um filme francês ao domingo um kit de café da manhã por um preço acessível.</p>

                    <p className={Styles.Paragraph}>Além destes conceituados eventos, o Cinema Reserva Cultural também recebe a Mostra Ecofalante de Cinema Ambiental, o festival internacional de documentário É Tudo Verdade e a Mostra Blues de Cinema, todos presentes no calendário oficial da cidade de São Paulo há mais de 3 anos.</p>
                </div>
                
                <div className={Styles.Subject}>
                    <div className={Styles.SideBySide}>
                        <div>
                            <h2 className={Styles.Subtitle}>Cursos e Concursos Culturais</h2>
                            <p className={Styles.Paragraph}>Há alguns anos, o espaço ampliou as opções para o público e começou a propor semestralmente cursos de filosofia e literatura ligados à sétima arte. Sempre com a preocupação de contemplar seus fiéis frequentadores, o Cinema Reserva Cultural oferece através de concursos culturais a possibilidade de ganhar bolsas de estudos para os cursos, assim como ingressos para as sessões de filmes em cartaz.</p>
                        </div>

                        <a href="#">
                            <img className={Styles.Image} src={require('../components/Images/Conceito/Poemaria.jpg')} alt="Pessoas participando de um evento cultural em um espaço interno aconchegante. Um homem fala ao microfone enquanto uma mulher ao lado dele participa da apresentação. O público, sentado ao redor, observa atentamente e algumas pessoas estão mexendo em seus celulares." />
                        </a>
                    </div>
                </div>

                <div className={Styles.Subject}>
                    <h2 className={Styles.Subtitle}>Parcerias e Benefícios para Frequentadores</h2>

                    <p className={Styles.Paragraph}>O Cinema Reserva Cultural conta com parcerias da Pinacoteca de São Paulo, do MASP, MAM, onde o cliente apresentando seu ingresso de cinema com validade de 1 mês paga meia-entrada. Também é possível assistir em primeira mão aos espetáculos da OSESP, nosso recente parceiro.</p>
                </div>

                <div className={Styles.Subject}>
                    <h2 className={Styles.Subtitle}>Organização de Eventos Corporativos e Privados</h2>

                    <p className={Styles.Paragraph}>O espaço do Cinema Reserva Cultural também é palco para diversos eventos corporativos ou privados. As salas são locadas para congressos, lançamentos de campanha ou produto, treinamentos, seminários e celebração de datas comemorativas, entre outros. Além de toda a infraestrutura para receber qualquer tipo de evento, o espaço tem serviço de buffet próprio e trabalha com o que há de melhor no universo gastronômico.</p>
                </div>

                <div className={Styles.Subject}>
                    <h2 className={Styles.Subtitle}>Sucesso Agora Também em Niterói – Rio de Janeiro</h2>

                    <p className={Styles.Paragraph}>O Reserva Cultural encontra sucesso junto ao público de São Paulo desde sua inauguração em 2005. Seus clientes fiéis amam o seu conceito. Graças a esse sucesso, o Cinema Reserva Cultural ganhou a licitação pública para administrar por 25 anos um belíssimo prédio concebido e construído pelo mestre Oscar Niemeyer, localizado numa das cidades com um dos melhores IDH do país, Niterói.</p>

                    <img className={Styles.Image} src={require('../components/Images/Conceito/ReservaNiteroi.jpg')} alt="Fachada moderna do cinema Reserva Cultural, com uma ampla estrutura de vidro e entrada principal. Pessoas estão sentadas em mesas ao ar livre no terraço do local." />

                    <p className={Styles.Paragraph}>Depois de 2 anos de trabalho, esse complexo apresenta-se com cinco salas de cinema com som e imagem para filmes 2D e 3D, uma bomboniere com deck ao ar livre, além de um extraordinário espaço para opções gastronômicas, onde se encontra o Reserva Bistrô, fiel ao conceito de São Paulo, a Mística Pizza, o Bizu Bizu que oferece comidinhas do eixo Paris-Niterói-Nova York, uma livraria Blooks, uma galeria para exposições, e a Clappy Festas, especializada em eventos infantis.</p>

                    <p className={Styles.Paragraph}>A programação do Cinema Reserva Cultural Niterói une filmes de arte, marca do Cinema Reserva Cultural, a filmes que ampliam as possibilidades de vir em família e com amigos.</p>

                    <p className={Styles.Paragraph}>No dia da inauguração, 24 de agosto de 2016, o Cinema Reserva Cultural Niterói recebeu a pré-estreia nacional do filme Aquarius, na presença de toda a equipe do filme, em particular do diretor Kleber Mendonça Filho e da atriz Sônia Braga. Desde então, o Cinema Reserva Cultural se tornou o novo lugar para a cultura e o entretenimento em Niterói e organiza eventos abertos ao grande público.</p>
                </div>

                <div className={Styles.Subject}>
                    <h2 className={Styles.Subtitle}>Pré-estreias e Eventos Memoráveis</h2>

                    <p className={Styles.Paragraph}>O Cinema Reserva Cultural Niterói já realizou pré-estreias memoráveis na presença de artistas internacionais como o maior ator francês da atualidade, Gérard Depardieu, e nacionais, como Paulo Gustavo, que apresentou ao público de Niterói o filme Minha Mãe é Uma Peça 2. O Cinema Reserva Cultural Niterói também fez parte do Festival do Rio 2016, durante o qual recebeu as pré-estreias especiais dos filmes aclamados Elis e Pequeno Segredo, que representou o Brasil no Oscar 2017.</p>

                    <p className={Styles.Paragraph}>O espaço Reserva Cultural Niterói também recebeu eventos diversos como a feira de gastronomia francesa Rio Je T’Aime, a exposição Impressões de Havana do fotógrafo Renato Moreth, ou também o projeto Ocupação Reserva, que ocorreu em fevereiro de 2017 e durante o qual o cinema Reserva Cultural Niterói se tornou um ponto de encontro para expressões artísticas variadas: durante 5 dias, foi palco de shows de música, talk shows, e encontros com cartunistas.</p>

                    <p className={Styles.Paragraph}>Sem esquecer que todo domingo, em parceria com a Clappy Festas, na área externa do Reserva Cultural Niterói tem Nikiti Kids, um evento para os pequenos com piquenique, brincadeiras ao ar livre, música, contadores de histórias e muita diversão!</p>

                    <p className={Styles.Paragraph}>Por fim, não podemos deixar de lado o sarau de poesia realizado às quintas, pelo jornalista João do Corujão, personagem emblemático da cidade de Niterói. O evento é gratuito e aberto a todos os interessados. </p>
                </div>

                <div className={Styles.Subject}>
                    <h2 className={Styles.Subtitle}>Um conceito de cinema que se torna referência no Brasil</h2>

                    <p className={Styles.Paragraph}>Com mais de 1o anos de existência, o conceito único do cinema Reserva Cultural fez desta marca uma referência em São Paulo e agora no Brasil, não somente pela qualidade dos filmes exibidos, como também pelos espaços gastronômicos e eventos que oferece ao seu público, além da excelência dos seus serviços nas cidades onde atua. Definitivamente, o Reserva Cultural é bem mais que um cinema e a fidelidade dos seus frequentadores demostra isso todo dia.</p>

                    <img className={Styles.Logo} src="/images/Logo_reserva01.png" alt="Logo do cinema reserva cultural" />
                </div>
            </article>
            <Info />
            <Footer />
        </div>
    );
}

export default Concept;

