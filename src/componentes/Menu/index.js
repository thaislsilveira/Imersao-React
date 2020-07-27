import React from 'react';
import "./Menu.css";
import Logo from '../../assets/img/Logo-b.png';
import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="PLFLIX Logo" />
            </a>
            <ButtonLink className="ButtonLink" href="/" alt = "Botão">
                Novo Vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;