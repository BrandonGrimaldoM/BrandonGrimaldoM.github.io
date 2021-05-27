import React from 'react';


class Runordie extends React.Component{
    render(){
        return (
            <React.Fragment>
              <div className="Page">
                 <div className="OneApp">
                        <h5>Run Or Die</h5>
                        
                        <p align="center">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/F5tuGQg71uw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" allowfullscreen></iframe>
                        </p>
                        
                        
                        
                        <p align="left">Este juego fue creado con Unity y consta en escapar de la aplanadora para no morir, el terreno es procedural por lo que en general ¡no tiene fin! acumulas puntos mientras mas avanzas en la partida.</p>
                        <p align="left">Puedes ver el repositorio dando click <a href="https://github.com/BrandonGrimaldoM/RunOrDieGame" target="_blank">AQUI.</a></p>
                        
                        <div className="space"></div>
                        
                        
                 </div>
                 
                
             </div>
          
            </React.Fragment>
        ); 
    }
}

export default Runordie;