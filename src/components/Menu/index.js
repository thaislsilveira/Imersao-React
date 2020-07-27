import React from 'react';
import Logo from '../../assets/img/Logo-y.png';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button'
import "./Menu.css";

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="PLFLIX Logo" />
            </a>
            <Button as = "a" className="ButtonLink" href="/" alt = "Botão">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;