import React from 'react';
//importar browserroute para usar route
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PrincipalPage from '../pages/PrincipalPage';
import Contacto from '../pages/Contacto';
import Layout from './Layout';
import NotFound from '../pages/NotFound';


function App(){
   return(
      <BrowserRouter>
      <Layout>
        <Switch>
         <Route exact path="/Portafolio" component={PrincipalPage}/>
         <Route exact path="/Contacto" component={Contacto}/>
         <Route component={NotFound}/>
        </Switch>
      </Layout>
      </BrowserRouter>

   );
}

export default App;