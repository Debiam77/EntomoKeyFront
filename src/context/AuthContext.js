// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Cria o contexto
const AuthContext = createContext();

// Provedor do contexto
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Inicialmente null

    // Carrega o usuário do localStorage quando o app é iniciado
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        console.log('Stored User in localStorage:', storedUser); // Debug do valor armazenado no localStorage

        if (storedUser) {
            setUser(JSON.parse(storedUser));
            console.log('User after parsing localStorage:', JSON.parse(storedUser)); // Debug do valor após o parse
        }
    }, []); // Executa uma vez ao montar

    const login = (userData) => {
        console.log('Login called with userData:', userData); // Debug dos dados de login
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData); // Atualiza o estado com os dados do usuário
        console.log('User after login:', userData); // Debug do estado de usuário após o login
    };

    const logout = () => {
        console.log('Logout called'); // Debug quando logout é chamado
        localStorage.removeItem('user');
        setUser(null); // Remove o usuário do estado
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook para usar o contexto
export const useAuth = () => {
    return useContext(AuthContext);
};
