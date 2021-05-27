import React from 'react';
import { Link } from 'react-router-dom'

class DataBases extends React.Component{
    render(){
        return (
            <React.Fragment>
              <div className="Page">
                 <div className="Apps">

                 <Link to="/BI" className="Link Application">
                 </Link>   
                 <Link to="/DataBaseKanjaban" className="Link Application">
                 </Link>
                 <Link to="/DataBaseCinegon" className="Link Application">
                 </Link>
                 <Link to="/DataBasePython" className="Link Application">
                 </Link>
                 
                        
                        
                 </div>
             </div>
          
            </React.Fragment>
        ); 
    }
}

export default DataBases;