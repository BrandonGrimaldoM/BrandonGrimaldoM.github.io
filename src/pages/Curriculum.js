import React from 'react';


class Curriculum extends React.Component{
    render(){
        return (
              <React.Fragment>
                  
                  <div className="Curriculum">
                          <div className="Info-CV">
                          <h1>Curriculum</h1>
                          <h2>Ver en <a href={require("../Docs/ing.pdf")} download="ing.pdf" >PDF</a></h2>
                        
                          <h2>Ver en  <a href="https://www.canva.com/design/DAEcmwfqpEk/jd73a6UL82-dAPd36yv-SQ/view?website#4" target="_blank">WED</a></h2>
                          </div>
                  </div>
              </React.Fragment>
             
        ); 
    }
}

export default Curriculum;