import React from "react";
import Styles from './Fidelidade.module.css'
import Navbar from "../../../components/navbar/Navbar";
import Info from "../../../components/Info/Info";
import Footer from "../../../components/Footer/Footer";
import data from '../../../data/data.json'

function Fidelidade() {
    return (
        <div className="Guide">
            <Navbar 
                cidade={data.saoPaulo.cidade}/>
            <article className={Styles.Article}>
                {/* Adicionando a classe title ao h1 */}
                <h1 className={Styles.title}>Regulamento interno <br /> Programa cartão fidelidade</h1>
                
                <div>
                    {/* Adicionando a classe subtitle a todos os h2 */}
                    <h2 className={Styles.subtitle}>O Regulamento</h2>

                    {/* Adicionando a classe paragraph a todos os p */}
                    <p className={Styles.paragraph}>
                        1. O RESERVA CULTURAL DE CINEMA, empresa privada, com sede na Avenida Paulista, 900 – térreo baixo, CEP: 01310-100, Bela Vista, São Paulo-SP, simplesmente designado “RESERVA CULTURAL”, com base no presente regulamento, institui o PROGRAMA CARTÃO FIDELIDADE – RESERVA CULTURAL com o objetivo de oferecer aos clientes titulares pelos mesmos cartões, um ingresso gratuito para exibição de quaisquer filmes que conste na programação.
                    </p>

                    <p className={Styles.paragraph}>
                        2. Este é um programa de caráter exclusivamente do Reserva Cultural e seu uso, bem como o direito ao serviço, deverá ser em sua unidade – sede.
                    </p>

                    <p className={Styles.paragraph}>
                        3. O programa é oferecido a todos os clientes, mediante preenchimento de uma ficha cadastral entregue na bilheteria do cinema Reserva Cultural, sendo necessário apresentação do RG para emissão de um cartão pessoal e intransferível no ato da compra do ingresso. A modalidade praticada será: “a cada dez ingressos adquiridos, o cliente ganha um”.
                    </p>

                    <p className={Styles.paragraph}>
                        4. O benefício deste programa é restrito aos filmes que constam na programação vigente do Reserva Cultural e não estão inclusos na participação do programa: filmes de Festivais, Mostras ou outros eventos, pois os mesmos são de responsabilidade de produção externa.
                    </p>

                    <p className={Styles.paragraph}>
                        5. Os valores dos ingressos serão os já praticados e vigentes no Reserva Cultural, não podendo participar do programa sessões promocionais como: “Cine-Club Francês”, “Sessão Última Chance” ou sessões de eventos particulares.
                    </p>

                    <p className={Styles.paragraph}>
                        6. O programa não é acumulativo com outros programas nem como outras promoções.
                    </p>

                    <p className={Styles.paragraph}>
                        7. Somente será permitido creditar 1 (um) ponto por ingresso no Cartão Fidelidade, ou seja, na aquisição de mais de um ingresso para um mesmo filme e sessão, será validado apenas 1 (um) ponto no Cartão Fidelidade.
                    </p>

                    <p className={Styles.paragraph}>
                        8. Ingressos adquirdos pela internet também podem pontuar no Cartão Fidelidade, desde que estejam dentro das regras deste regulamento. Vale ressaltar que estes ingressos não poderão ultrapassar o prazo de uma semana da sessão conferida para se ter o direito ao crédito do ponto no Cartão Fidelidade.
                    </p>

                    <p className={Styles.paragraph}>
                        9. Quaisquer dúvidas, divergências ou possíveis alterações no regulamento serão apreciadas e decididas pela Diretoria da empresa, que em seu âmbito julgador fará criar, se necessário, um novo regulamento.
                    </p>
                </div>
            </article>
            <Info />
            <Footer />
        </div>
    );
}

export default Fidelidade;
