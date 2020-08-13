import React from 'react';

const Heroe = ({heroe, consultarHeroe}) =>{

    

    const handleClick = () => {
        
        consultarHeroe(heroe);

    }

    return(
        <div className="lista-heroes" onClick={handleClick}>

            <img src={heroe.avatarURL} className="avatar" alt={heroe.nombre}/>

            <div className="descripcion-heroe">
                <h3>{heroe.nombre}</h3>
                {heroe.nombreReal}
            </div>

        </div>
    )

}


export default Heroe;