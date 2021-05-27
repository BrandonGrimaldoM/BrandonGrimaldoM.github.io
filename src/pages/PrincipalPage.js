import React from 'react';
import { Link } from 'react-router-dom'

class PrincipalPage extends React.Component{
    render(){
        return (
            <React.Fragment>
            <div className="Page">
                 <header>
                  <h1>Desarrollo de Soluciones Digitales</h1>
                  <h2>Brandon James Grimaldo Moscote</h2>
            
                 </header>
           
                 <h3>Proyectos</h3>

                 <div className="proyect">
                 
                 <Link to="/Apps" className="Link AppE">
                   <div className="Etiqueta">Apps de escritorio</div>
                 </Link>

                 <Link to="/Web" className="Link Web">
                  <div className="Etiqueta">Desarrollo web</div>
                 </Link>

                  <Link to="/DataBase" className="Link BI">
                  <div className="Etiqueta">Base de datos y BI</div>
                  </Link> 

                  <Link to="/VideoGames" className="Link VJ">
                  <div className="Etiqueta">Video Juegos</div>
                  </Link>    
                </div>
              <div className="space"></div>
            </div>
            
          
            </React.Fragment>
        ); 
    }
}

export default PrincipalPage;