import React from 'react';
import { Link } from 'react-router-dom'

class AppPage extends React.Component{
    render(){
        return (
            <React.Fragment>
              <div className="Page">
                 <div className="Apps">
                     
                 <Link to="/Kanjaban" className="Link Application">
                 </Link>
                 <Link to="/Cinegon" className="Link Application">
                 </Link>
                        
                        
                        
                        
                 </div>
             </div>
          
            </React.Fragment>
        ); 
    }
}

export default AppPage;