import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/Logo-y.png';
import Button from '../Button'
import "./Menu.css";

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="PLFLIX Logo" />
            </Link>
            <Button as = {Link} className="ButtonLink" to="/cadastro/video" alt = "Novo Vídeo">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;