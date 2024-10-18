import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import EntomoKeyLogo from "../assets/HomeIMG/EntomokeyLogo.svg";
import "../styles/Header.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Debora from "../assets/HomeIMG/DeboraCalheiros.svg"
import Thiago from "../assets/HomeIMG/Thiago.svg"

const Header = () => {
    const { user, login, logout } = useAuth();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false); // Estado para controlar a sidebar

    const handleLogout = () => {
        console.log('Logout button clicked');
        logout();
        setDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen); // Alterna a visibilidade da sidebar
    };

    useEffect(() => {
        console.log('Current user in Header:', user);
    }, [user]);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <img src={EntomoKeyLogo} className="img-fluid logo" alt="EntomoKey Logo" />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">

                            {user ? (
                                <li className="nav-item">
                                    <Link className="nav-link active text-white" aria-current="page" to="/insectQuiz">QUIZ</Link>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <Link className="nav-link active text-white" aria-current="page" to="/">INICIO</Link>
                                </li>
                            )}

                            <li className="nav-item">
                                <button className="nav-link text-white btn" onClick={toggleSidebar}>SOBRE</button> {/* Botão para abrir a sidebar */}
                            </li>

                            {user ? (
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img
                                            src={user.avatar_url}
                                            alt="User"
                                            className="rounded-circle"
                                            style={{ width: '30px', height: '30px', objectFit: 'cover' }}
                                        />
                                    </a>

                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <li>
                                            <button className="dropdown-item" onClick={handleLogout}>Sair</button>
                                        </li>
                                    </ul>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/login">ENTRAR</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Sidebar */}
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <button className="close-btn text-white" onClick={toggleSidebar}>×</button> {/* Botão de fechar */}
                <div className="sidebar-content">
                    <h2>Sobre</h2>
                    <p>
                        Somos uma equipe enxuta e dedicada, formada por uma desenvolvedora que uniu pesquisa, design e programação para dar vida a este projeto inovador. A ideia original do projeto foi concebida pelo professor Thiago Moreira, nosso orientador e especialista em biologia, cuja orientação científica foi essencial para a concretização dessa iniciativa. Juntos, criamos uma plataforma que integra ciência e tecnologia, com o objetivo de facilitar o acesso ao conhecimento sobre a biodiversidade dos insetos de forma interativa e educativa.

                    </p>

                    {/* Imagens e texto abaixo */}
                    <div className="image-section d-flex">
                        <div className="image-container mx-auto">
                            <img src={Debora} alt="Inseto 1" className="sidebar-image" />
                            <p>Desenvolvedora</p>
                        </div>
                        <div className="image-container mx-auto">
                            <img src={Thiago} alt="Inseto 2" className="sidebar-image" />
                            <p>Orientador</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Estilo da sidebar */}
            <style jsx>{`
                .sidebar {
                    position: fixed;
                    top: 0;
                    right: -300px; /* Fora da tela inicialmente */
                    width: 300px;
                    height: 100%;
                    background-color: #051110;
                    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
                    padding: 20px;
                    transition: right 0.3s ease;
                    color:white
                }
                .sidebar.open {
                    right: 0; /* Mostra a sidebar quando aberta */
                }
                .sidebar-content {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    height: 100%;
                }
                .close-btn {
                    background-color: transparent;
                    border: none;
                    font-size: 24px;
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    cursor: pointer;
                }
                .image-section {
                    margin-top: 20px;
                }
                .image-container {
                    text-align: center;
                    margin-bottom: 20px;
                }
                .sidebar-image {
                    width: 70%;
                    height: auto;
                    border-radius: 8px;
                }
            `}</style>
        </>
    );
};

export default Header;
