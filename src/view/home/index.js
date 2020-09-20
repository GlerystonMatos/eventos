import React from 'react';
import './home.css';
import Navbar from '../../componentes/navbar';
import { useSelector } from 'react-redux';

function Home() {
    return (
        <>
            <Navbar />
            <h1>{useSelector(state => state.usuarioEmail)}</h1>
            <h1>Logado: {useSelector(state => state.usuarioLogado)}</h1>
        </>
    )
}

export default Home;