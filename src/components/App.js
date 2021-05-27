import React from 'react';
//importar browserroute para usar route
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PrincipalPage from '../pages/PrincipalPage';
import Contacto from '../pages/Contacto';
import Layout from './Layout';
import NotFound from '../pages/NotFound';
import Curriculum from '../pages/Curriculum';
import AppsPage from '../pages/AppsPage';
import Web from '../pages/Web';
import DataBases from '../pages/DataBases';
import VideoGames from '../pages/VideoGames';
import Kanjaban from '../Proyects/Kanjaban';
import Cinegon from '../Proyects/Cinegon';
import Gameoverweb from '../Proyects/Gameoverweb';
import Pizzahot from '../Proyects/Pizzahot';
import Databasekanjaban from '../Proyects/Databasekanjaban';
import Databasecinegon from '../Proyects/Databasecinegon';
import Databasepython from '../Proyects/Databasepython';
import Runordie from '../Proyects/Runordie';
import BI from '../Proyects/BI';



function App(){
   return(
      <BrowserRouter>
      <Layout>
        <Switch>
        
         <Route exact path="/Portafolio" component={PrincipalPage}/>
         <Route exact path="/Contacto" component={Contacto}/>
         <Route exact path="/Curriculum" component={Curriculum}/>
         <Route exact path="/Apps" component={AppsPage}/>
         <Route exact path="/Web" component={Web}/>
         <Route exact path="/DataBase" component={DataBases}/>
         <Route exact path="/VideoGames" component={VideoGames}/>
         <Route exact path="/Kanjaban" component={Kanjaban}/>
         <Route exact path="/Cinegon" component={Cinegon}/>
         <Route exact path="/GameOverWeb" component={Gameoverweb}/>
         <Route exact path="/PizzaHot" component={Pizzahot}/>
         <Route exact path="/DataBaseKanjaban" component={Databasekanjaban}/>
         <Route exact path="/DataBaseCinegon" component={Databasecinegon}/>
         <Route exact path="/DataBasePython" component={Databasepython}/>
         <Route exact path="/BI" component={BI}/>
         <Route exact path="/RunOrDie" component={Runordie}/>
         
         <Route exact path="" component={PrincipalPage}/>
         <Route component={NotFound}/>
        </Switch>
      </Layout>
      </BrowserRouter>

   );
}

export default App;