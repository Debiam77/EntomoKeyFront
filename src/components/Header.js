// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import EntomoKeyLogo from "../assets/HomeIMG/EntomokeyLogo.svg";
import "../styles/Header.css";

const Header = () => {
    const { user, logout } = useAuth(); // Obtém o estado e as funções do contexto
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleLogout = () => {
        logout(); // Chama a função de logout do contexto
        setSidebarOpen(false); // Fecha a sidebar ao sair
        // Redirecionar ou fazer outras ações necessárias
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <img src={EntomoKeyLogo} className="img-fluid logo" alt="EntomoKey Logo" />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item">
                                <Link className="nav-link active text-dark" aria-current="page" to="/">INICIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/sobre">SOBRE</Link>
                            </li>
                            {/* Se o usuário estiver logado, mostrar a imagem */}
                            {user ? (
                                <li className="nav-item">
                                    <img
                                        src={user.profilePicture} // Imagem do usuário
                                        alt="User"
                                        className="user-avatar"
                                        onClick={() => setSidebarOpen(!sidebarOpen)} // Alterna a sidebar
                                    />
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/login">ENTRAR</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Sidebar */}
            {sidebarOpen && (
                <div className="sidebar position-fixed bg-light" style={{ right: 0, top: 0, width: '200px', height: '100%', boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.5)', zIndex: 1000 }}>
                    <ul className="list-group">
                        <li className="list-group-item" onClick={handleLogout}>SAIR</li>
                    </ul>
                </div>
            )}
        </>
    );
}

export default Header;
