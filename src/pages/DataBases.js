import React from 'react';
import { Link } from 'react-router-dom'

class DataBases extends React.Component{
    render(){
        return (
            <React.Fragment>
              <div className="Page">
                 <div className="Apps">

                 <Link to="/BI" className="Link Application image-5">
                 </Link>   
                 <Link to="/DataBaseKanjaban" className="Link Application image">
                 </Link>
                 <Link to="/DataBaseCinegon" className="Link Application image-2">
                 </Link>
                 <Link to="/DataBasePython" className="Link Application image-3">
                 </Link>
                 
                        
                        
                 </div>
             </div>
          
            </React.Fragment>
        ); 
    }
}

export default DataBases;