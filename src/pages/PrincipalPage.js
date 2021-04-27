import React from 'react';


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
                 <div className="AppE">

                   
                   <div className="Etiqueta">Apps de escritorio</div>
                 </div> 
                <div className="Web">
                  
                  <div className="Etiqueta">Desarrollo web</div>
                </div> 
                <div className="BI">
                  
                  <div className="Etiqueta">Base de datos y BI</div>
                </div> 
                <div className="VJ">
                  
                  <div className="Etiqueta">Video Juegos</div>
                </div>    
              </div>

           </div>
            </React.Fragment>
        ); 
    }
}

export default PrincipalPage;