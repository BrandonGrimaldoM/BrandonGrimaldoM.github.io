import React from 'react';
import { Link } from 'react-router-dom'

class Web extends React.Component{
    render(){
        return (
            <React.Fragment>
              <div className="Page">
                 <div className="Apps">
                     
                 <Link to="/GameOverWeb" className="Link Application image-3">
                 </Link>
                 <Link to="/PizzaHot" className="Link Application image-4">
                 </Link>
                        
                        
                 </div>
             </div>
          
            </React.Fragment>
        ); 
    }
}

export default Web;