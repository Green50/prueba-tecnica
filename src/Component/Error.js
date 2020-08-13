import React from 'react';
import error from '../Assets/Img/logo-error.png';

const Error = () => {

    return(
        <div className="contenedor">
            <div className="Error">
                <h2>Oops... algo ocurrio, intentelo de nuevo</h2>
                <img src={error} alt="Error"/>
            </div>
        </div>

    )

}

export default Error;