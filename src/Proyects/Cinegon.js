import React from 'react';


class Cinegon extends React.Component{
    render(){
        return (
            <React.Fragment>
              <div className="Page">
                 <div className="OneApp">
                        <h5>Cinegon</h5>
                        
                        <p align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/vduaXbgnnLw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" allowfullscreen></iframe></p>
                        
                        
                        
                        <p align="left">Esta versión de la aplicación creada con C# permite subir películas a una base de datos oracle, 
                                        almacenar sus imágenes de portadas para luego mostrarlos en pantalla.</p>
                        <p align="left">Puedes ver el repositorio dando click <a href="https://github.com/BrandonGrimaldoM/Cinegon" target="_blank">AQUI.</a></p>
                        
                        <div className="space"></div>
                        
                        
                 </div>
                 
                
             </div>
          
            </React.Fragment>
        ); 
    }
}

export default Cinegon;