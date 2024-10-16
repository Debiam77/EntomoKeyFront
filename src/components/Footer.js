import React from 'react';
import EntomoKeyLogo from '../assets/HomeIMG/EntomokeyLogo.svg'; // Substitua pelo caminho correto da logo do EntomoKey
import IfamLogo from "../assets/HomeIMG/LogoIF.svg"; // Substitua pelo caminho correto da logo do IFAM
import SideDetailLeft from '../assets/HomeIMG/LogoFooter.svg'; // Substitua pelo caminho correto da imagem lateral esquerda
import SideDetailRight from '../assets/HomeIMG/LogoFooterRight.svg'; // Substitua pelo caminho correto da imagem lateral direita

import "../styles/Footer.css"

const Footer = () => {
    return (
        <footer className="container-fluid Footer text-white py-4">
            <div className="row justify-content-between align-items-center">
                {/* Detalhe lateral esquerda */}
                <div className="col-auto d-none d-lg-block">
                    <img src={SideDetailLeft} alt="Detalhe Lateral Esquerda" className="img-fluid" style={{ maxWidth: '80px' }} />
                </div>

                {/* Área central com logos */}
                <div className="col text-center">
                    <img src={EntomoKeyLogo} alt="EntomoKey Logo" className="img-fluid mb-3" style={{ maxWidth: '180px' }} />
                    <div>
                        <img src={IfamLogo} alt="IFAM Logo" className="img-fluid mb-3" style={{ maxWidth: '160px' }} />
                    </div>
                </div>

                {/* Detalhe lateral direita */}
                <div className="col-auto d-none d-lg-block">
                    <img src={SideDetailRight} alt="Detalhe Lateral Direita" className="img-fluid" style={{ maxWidth: '80px' }} />
                </div>
            </div>

            {/* Linha inferior com links e texto */}
            <div className="row mt-1">
                <div className="col text-center">
                    <a href="/politica-de-privacidade" className="text-white mx-2">POLÍTICA DE PRIVACIDADE</a>
                    <a href="/termos-de-uso" className="text-white mx-2">TERMOS DE USO</a>
                    <a href="/central-de-ajuda" className="text-white mx-2">CENTRAL DE AJUDA</a>
                    <span className="mx-2">2024</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
