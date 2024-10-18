// src/components/Login.js
import React, { useEffect, useRef, useState } from 'react';
import "../styles/Login.css";
import LoginBackground from "../assets/LoginIMG/LoginBackground.svg";
import LogoBug from "../assets/LoginIMG/LogoBug.svg";
import axios from '../axiosConfig';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importar FontAwesome se estiver usando ícones

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const googleButtonRef = useRef(null);

    useEffect(() => {
        /* global google */
        if (googleButtonRef.current) {
            google.accounts.id.initialize({
                client_id: "849586959948-s1dfl9tu6ujnujrvjln8o5osalmhqpsr.apps.googleusercontent.com", // Substitua pelo seu Client ID
                callback: handleGoogleResponse,
            });

            google.accounts.id.renderButton(
                googleButtonRef.current,
                { theme: "outline", size: "large", text: "continue_with", shape: "pill" } // Configurações do botão
            );

            google.accounts.id.prompt(); // Opcional: exibe o prompt One Tap
        }
    }, []);

    const handleGoogleResponse = async (response) => {
        try {
            const { credential } = response; // O id_token

            // Enviar o id_token para o backend
            const res = await axios.post('/api/auth/google', {
                token: credential,
            });

            // O backend retorna o token e as informações do usuário
            const { token, user } = res.data;
            localStorage.setItem('token', token); // Armazena o token
            localStorage.setItem('user', JSON.stringify(user)); // Armazena o perfil do usuário

            // Redirecionar ou atualizar o estado da aplicação após o login
            window.location.href = '/';
        } catch (error) {
            console.error('Erro durante o login com Google:', error.response ? error.response.data : error.message);
            alert(error.response && error.response.data.error ? error.response.data.error : 'Erro durante o login com Google');
        }
    };


    // Função para lidar com o envio do formulário de login tradicional
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/login', {
                email,
                password,
            });

            const { token } = res.data;
            localStorage.setItem('token', token);
            // Redirecionar ou atualizar o estado da aplicação após o login
            window.location.href = '/';
        } catch (error) {
            console.error('Erro durante o login tradicional:', error.response ? error.response.data : error.message);
            alert(error.response && error.response.data.error ? error.response.data.error : 'Erro no login');
        }
    };

    return (
        <div className="container-fluid vh-100 d-flex align-items-center">
            <div className="row w-100 h-100 flex-column flex-md-row">
                {/* Logo no canto superior esquerdo */}
                <img src={LogoBug} alt="Logo" className="logo-top-left" />

                {/* Formulário na esquerda */}
                <div className="form col-md-4 d-flex flex-column justify-content-center align-items-center text-white p-5 h-100">
                    <div className="text-center mb-4">
                        <h2 className='h1'>Login</h2>
                        <p>Faça login para continuar</p>
                    </div>

                    <form className="w-75 d-flex flex-column" onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="email" className="sr-only fw-light">EMAIL</label>
                            <input
                                type="email"
                                className="form-control bg-white"
                                id="email"
                                placeholder="******@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password" className="sr-only fw-light">PASSWORD</label>
                            <input
                                type="password"
                                className="form-control bg-white"
                                id="password"
                                placeholder="*****"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-custom align-self-center text-white fw-bold w-50">Continuar</button>
                    </form>

                    <div className="my-3 text-center w-75">
                        <span>OU</span>
                    </div>

                    <div ref={googleButtonRef} className="g_id_signin"></div>
                </div>

                {/* Background cobrindo toda a coluna direita */}
                <div className="col-md-8 d-none d-md-block login-bg-container  ">
                    <img
                        src={LoginBackground}
                        alt="EntomoKey background"
                        className="login-bg img-fluid"
                    />
                </div>
            </div>
        </div>
    );
}

export default Login;
