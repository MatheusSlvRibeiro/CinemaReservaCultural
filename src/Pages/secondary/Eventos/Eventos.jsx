import React from "react";
import styles from './Eventos.module.css'
import { useCidade } from "../../../context/context";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

const Eventos = () => {
      const navigate = useNavigate();
      const { dadosCidade, cidade } = useCidade();

      if (!dadosCidade) {
            return <p style={{textAlign: 'center', marginTop: '2rem', fontSize: '2rem'}}>Cidade não encontrada!</p>
      }

      return (
            <main>
                  <Navbar />
                  <section>
                        
                        <article className={styles.Article}>
                              <img 
                                    className={styles.Banner}
                                    src="/images/banner-eventos-orcamento.jpg" 
                                    alt=" No banner diz: Com uma estrutura moderna, versátil e totalmente equipada, nosso cinema 
                                          é o cenário ideal para eventos de todos os formatos. 
                                          Desde palestras e seminários a pré-estreias exclusivas e celebrações temáticas, 
                                          oferecemos o ambiente perfeito para tornar cada momento único e inesquecível"/>
                              <button 
                                    onClick={() => navigate(`/${cidade}/Contato`)}
                                    className={styles.Orcamento}>Solicitar orçamento</button>
                        </article>

                        
                  </section>

                  <section>

                        <article className={styles.ArticleFull}>
                              <div>
                                    <h2 className={styles.TitleSide}>Uma Estrutura Completa</h2>
                                    <p className={styles.Paragraph}>Localizado em pontos estratégicos, nosso cinema combina conforto, tecnologia e elegância para atender às suas necessidades.</p>
                                    <ul>
                                          <br/>
                                          <li>4 salas em formato stadium <br/>(Capacidade de 110 a 190 lugares)</li>
                                          <li>Exibição em <strong>QUALQUER FORMATO:</strong> PPT, DVD, HD e apresentações de filmes institucionais.
                                          </li>
                                          <li>Sala de exibição com equipamentos de última geração
                                          </li>
                                          <li>Ambientes climatizados e Wi-Fi gratuito
                                          </li>
                                    </ul>
                              </div>
                              <div>
                                    <img src="/images/sala-1.jpg" alt="" />
                              </div>
                        </article>

                        <article className={styles.ArticleFull}>
                              <div>
                                    <img src="/images/15-anos-editora-planeta.jpg" alt="" />
                              </div>

                              <div>
                                    <h1 className={styles.TitleSide}>Mude de ambiente</h1>
                                    <p className={styles.Paragraph}>Oferecemos um ambiente versátil e sofisticado, ideal para transformar qualquer ocasião em um momento único. Nosso cinema vai além das exibições de filmes e abre suas portas para receber diferentes tipos de eventos: <br/>
                                    </p> <br/>
                                    
                                    <ul>
                                          <li>Palestras e seminários</li>
                                          <li>Eventos corporativos</li>
                                          <li>Festas e aniversários Temáticos</li>
                                          <li>Lançamento de produtos</li>
                                    </ul> <br/>

                                    <p className={styles.Paragraph}>
                                    Entre em contato com nossa equipe comercial para solicitar seu orçamento e agendar uma visita.
                                    </p>

                                    <button 
                                    onClick={() => navigate(`/${cidade}/Contato`)}
                                    className={styles.Orcamento}>Solicitar orçamento</button>

                              </div>
                        </article>

                        <article className={styles.ArticleFull}>
                              <div>
                                    <h1 className={styles.TitleSide}>Serviços</h1>
                                    <p className={styles.Paragraph}>Espaço para recepções e coquetéis: até 350 pessoas (em pé) ou 150 pessoas (sentadas).</p> <br />
                                    <p className={styles.Paragraph}>Estacionamento conveniado para maior praticidade.</p> <br/>
                                    <p className={styles.Paragraph}>Serviços de buffet com opções variadas:</p><br />
                                    <ul>
                                          <li>Welcome Coffee</li>
                                          <li>Brunch</li>
                                          <li>Almoços</li>
                                          <li>Coquetéis</li>
                                          <li>Jantares</li>
                                    </ul>

                                    <button 
                                    onClick={() => navigate(`/${cidade}/Contato`)}
                                    className={styles.Orcamento}>Solicitar orçamento</button>
                              </div>

                              <div>
                                    <img src="/images/buffet.jpg" alt="O serviço de buffet do Cinema Reserva Cultural São Paulo"></img>
                              </div>
                        </article>

                        <article className={styles.Article} id="Parcerias">
                              <h1 className={styles.Title}>Parcerias</h1>
                                    <div className={styles.Parcerias} >
                                          <a  href="https://dancarmarketing.com.br/"
                                          target="_blank" rel="noreferrer noopener">
                                          <img src={require('../../../images/Parceiros/11_dmkt.png')} alt="Logo Dançar Marketing" />
                                          </a>
                                          
                                          <a  href="https://diplomatique.org.br/"
                                          target="_blank" rel="noreferrer noopener">
                                          <img src={require('../../../images/Parceiros/logo-le-monde-diplomatique-brasil-300px.png')} alt="Logo le monde Diplomatique" />
                                          </a>

                                          <a  href="https://reservaimovision.com.br/"
                                          target="_blank" rel="noreferrer noopener">
                                          <img src={require('../../../images/Parceiros/09_Imovision-300x114.png')} alt="Logo Reserva Imotivision" />
                                          </a>

                                          <a  href="https://www.radiotrianon.com.br/"
                                          target="_blank" rel="noreferrer noopener">
                                          <img    
                                                src={require('../../../images/Parceiros/08_RADIO_TRIANON_AM_SAO_PAULO.png')} 
                                                alt="Logo rádio Triano"/>
                                          </a>

                                          <a  href="https://www.ctv.ca/discovery-velocity"
                                          target="_blank" rel="noreferrer noopener">
                                          <img    
                                                src={require('../../../images/Parceiros/discoveryVelocity.png')} 
                                                alt="Logo Discovery Velocity"/>
                                          </a>
                                          
                                          <a  href="https://masp.org.br/"
                                          target="_blank" rel="noreferrer noopener">
                                          <img    
                                                src={require('../../../images/Parceiros/04_MASP.svg_-300x134.png')} 
                                                alt="Logo Museu de arte de são paulo"/>
                                          </a>
                                          
                                          <a  href="https://pinacoteca.org.br/"
                                          target="_blank" rel="noreferrer noopener">
                                          <img    
                                                src={require('../../../images/Parceiros/Logo-Pinacoteca.jpg')} 
                                                alt="Logo Pinacoteca de são paulo"/>
                                          </a>

                                          <a  href="https://mam.org.br/"
                                          target="_blank" rel="noreferrer noopener">
                                          <img    
                                                src={require('../../../images/Parceiros/LogoMuseuArteModerna.jpg')} 
                                                alt="Logo Museu de arte moderna"/>
                                          </a>
                                          
                                          <a  href="https://www.cartacapital.com.br/"
                                          target="_blank" rel="noreferrer noopener">
                                          <img    
                                                src={require('../../../images/Parceiros/LogoCartaCapital.jpg')} 
                                                alt="Logo Carta Capital"/>
                                          </a>
                                          
                                          <a  href="https://www.estadao.com.br/"
                                          target="_blank" rel="noreferrer noopener">
                                          <img    
                                                src={require('../../../images/Parceiros/Estadao_logo.jpg')} 
                                                alt="Logo Estadão"/>
                                          </a>
                                          
                                          <a  href="https://auwe.com/"
                                          target="_blank" rel="noreferrer noopener">
                                          <img    
                                                src={require('../../../images/Parceiros/auwe-qube_green-420x150.jpg')} 
                                                alt="Logo AUWE Digital"/>
                                          </a>

                                          <a  href="https://revistacult.uol.com.br/home/"
                                          target="_blank" rel="noreferrer noopener">
                                          <img    
                                                src={require('../../../images/Parceiros/06.jpg')} 
                                                alt="Logo revista Cult"/>
                                          </a>

                              </div>
                        </article>
                  </section>

                  <Footer />
            </main>
      );
};

export default Eventos;