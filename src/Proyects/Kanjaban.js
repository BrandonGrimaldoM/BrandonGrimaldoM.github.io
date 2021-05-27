import React from 'react';


class Kanjaban extends React.Component{
    render(){
        return (
            <React.Fragment>
              <div className="Page">
                 <div className="OneApp">
                        <h5>Kanjaban</h5>
                        
                        <p align="center">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/0VUgrZptHR4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" allowfullscreen></iframe>
                        </p>
                        
                        
                        
                        <p align="left">Kanjaba es una aplicación hecha en java usando NetBeans y MySql para organizar proyectos personales basado en la metodología kanban enfocado en un solo usuario.</p>
                        <p align="left">Puedes ver el repositorio dando click <a href="https://github.com/BrandonGrimaldoM/Kanjaban" target="_blank">AQUI.</a></p>
                        
                        <div className="space"></div>
                        
                        
                 </div>
                 
                
             </div>
          
            </React.Fragment>
        ); 
    }
}

export default Kanjaban;