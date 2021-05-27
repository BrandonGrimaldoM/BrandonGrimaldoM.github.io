import React from 'react';


class Gameoverweb extends React.Component{
    render(){
        return (
            <React.Fragment>
              <div className="Page">
                 <div className="OneApp">
                        <h5>GameOverWeb</h5>
                        
                        <p align="center">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/OMgYyvn_Rew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" allowfullscreen></iframe>
                        </p>
                        
                        
                        
                        <p align="left">Esta pagina web a sido creada con Django, MySql y Bootstrap, ambientada al mundo gaming le permite crear usuarios, perfiles y subir posts acerca de sus video juegos favoritos.</p>
                       
                        <p align="left">Puedes ver el repositorio dando click <a href="https://github.com/BrandonGrimaldoM/gameoverweb" target="_blank" rel='noreferrer'>AQUI.</a></p>
                        
                        <div className="space"></div>
                        
                        
                 </div>
                 
                
             </div>
          
            </React.Fragment>
        ); 
    }
}

export default Gameoverweb;