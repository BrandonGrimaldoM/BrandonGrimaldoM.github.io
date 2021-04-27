import React from 'react';
import '../styles/index.css';
import { Link } from 'react-router-dom'
function Layout(props){
     return (
         <React.Fragment>
             <div className="container">
             <nav className="Menu">
           <ul>
               <li>
                  <a href="https://www.canva.com/design/DAEcmwfqpEk/jd73a6UL82-dAPd36yv-SQ/view?website#4" className="Link">Curriculum</a>
                  
               </li>

               <li><Link to="/Portafolio" className="Link">Portafolio</Link></li>
               <li><Link to="/Contacto" className="Link">Contacto</Link></li>
           </ul>
       </nav>
               {props.children}
             <footer className="Footer">
            <div className="red-list">
                <div className="insta"></div> 
                <div className="youtu"></div> 
                <div className="face"></div>
                 <div className="twit"></div>
            </div>
            </footer>

             </div>
             
             
             

         </React.Fragment>
     );
}
export default Layout;