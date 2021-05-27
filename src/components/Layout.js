import React from 'react';
import '../styles/index.css';
import { Link } from 'react-router-dom'
function Layout(props){
     return (
         <React.Fragment>
             <div className="container">
              <nav className="Menu">
               <ul>
                <li><Link to="/Curriculum" className="Link">Curriculum</Link></li>
                <li><Link to="/Portafolio" className="Link">Portafolio</Link></li>
                <li><Link to="/Contacto" className="Link">Contacto</Link></li>
               </ul>
              </nav>
               {props.children}
             </div>
             
             
             

         </React.Fragment>
     );
}
export default Layout;