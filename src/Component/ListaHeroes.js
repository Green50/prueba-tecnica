import React, { useState, useRef } from 'react';
import Heroe from './Heroe';
import HeroeId from './HeroeId';

const ListaHeroes = ({listaHeroes}) => {
    
    
    const [heroe, guardarHeroe] = useState({});
    const [nombreHeroe, guardarNombreHeroe] = useState('');
    const [puedeVolar, guardarPuedeVolar] = useState(false);

    let auxListaHeroes;
    let nombreHeroeRef = useRef('');

    //Al ejecutar esta acción del componente Heroe, este nos trae el heroe preciso al que se le hizo click
    const consultarHeroe = auxHeroe =>{
        guardarHeroe(auxHeroe);
    }

    //Al ejecutar esta acción del componente HeroeId, este nos vacia el state heroe para poder desplegar nuevamente la lista completa de heroes
    const vaciarHeroe = () => guardarHeroe({});

    const handleSubmit = e => {
        e.preventDefault();
        guardarNombreHeroe(nombreHeroeRef.current.value);
        

        
    }


    if(puedeVolar){
        
        auxListaHeroes = listaHeroes.filter(heroes => heroes.puedeVolar === true)
        
    }
    else{
        auxListaHeroes = listaHeroes;
    }
    

    if(nombreHeroe.length > 0){
        auxListaHeroes = auxListaHeroes.filter(heroes => heroes.nombre.toLowerCase() === nombreHeroe.toLowerCase());
    }
    



    return(
        <div className="contenedor">
            <div className="contenedor-heroes">

                <div className="enunciado">
                    <h2 className="titulo">Superhéroes</h2>
                    <form onSubmit={handleSubmit} >
                        <input 
                            type="Text"
                            placeholder="Nombre del héroe"
                            ref={nombreHeroeRef}
                        >
                        </input>

                        <input type="checkbox" name="vuela" onChange={e => guardarPuedeVolar(e.target.checked)}/>
                        <label htmlFor="vuela">Personaje volador?</label>
                        <button type="submit">Enviar</button>
                    </form>


                </div>

                
                { 
                

                    //Si no hay nada dentro del state heroe, muestra la lista completa
                    Object.keys(heroe).length === 0
                    ? 
                        auxListaHeroes.map(elemento => (
                            <Heroe key={elemento.id} heroe={elemento} consultarHeroe={consultarHeroe}/>
                        ))
                    
                    : //Si se pasó algo que muestre al heroe seleccionado
                    <HeroeId key={heroe.id} heroe={heroe} vaciarHeroe={vaciarHeroe}/>
                
                
            } 
                
        


            </div>
        </div>
    );

}

export default ListaHeroes;