import React from 'react';
import { Link } from 'react-router-dom'

class AppPage extends React.Component{
    render(){
        return (
            <React.Fragment>
              <div className="Page">
                 <div className="Apps">
                     
                 <Link to="/Kanjaban" className="Link Application image">
                 </Link>
                 <Link to="/Cinegon" className="Link Application image-2">
                 </Link>
                        
                        
                        
                        
                 </div>
             </div>
          
            </React.Fragment>
        ); 
    }
}

export default AppPage;