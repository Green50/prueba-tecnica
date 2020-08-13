import React from 'react';
import logo from '../Assets/Img/logo.png';

const Header = () => {

    return(

        <header className="head">
            <img src={logo} className="logo" alt="Logo de superheroes"></img>
        </header>
    )

}


export default Header;