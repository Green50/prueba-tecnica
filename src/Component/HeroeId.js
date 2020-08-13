import React, { Fragment } from 'react';

const HeroeId = ({heroe, vaciarHeroe}) =>{

    let key = 0;

    const volverMenu = () => {
        vaciarHeroe();
    }

    //Obtener lista de habilidades
    const habilidades = heroe.habilidades.map((elemento) => <li key={key++}>{elemento}</li>)

    return(
        <Fragment>
            <h2>{heroe.nombre}</h2>
            <h3>Nombre real: {heroe.nombreReal}</h3>
            {heroe.puedeVolar ? <h3>Puede volar</h3> : <h3>No puede volar</h3>}
            <h3>
                Habilidades: 
                <ul>
                    {habilidades}
                </ul>
            </h3>
            <h3>Descripcion {heroe.descripcion}</h3>
            <div className="contenedor-button">
                <input type="button" value="Volver" onClick={volverMenu}/>
            </div>
        </Fragment>
    )

}


export default HeroeId;