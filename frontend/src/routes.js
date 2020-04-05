import React from 'react';

//tem necessario para a formulação das rotas
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

//Importando as rotas
import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
  return (
    //BrowserRouter Precisa estar por volta de tudo 
    <BrowserRouter>
      {/* Vai garantir apenas uma rota seja executada por momento mesmo que o caminho seja semelhante */}
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/incidents/new" component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
}