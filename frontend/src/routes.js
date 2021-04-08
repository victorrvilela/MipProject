import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Logon from './pages/Logon';
import Casa from './pages/Home';
import Adm from './pages/Administradores';
import Lider from './pages/Lideres';
import Atividade from './pages/Atividades';
import Funcionario from './pages/Funcionarios';
import RDC from './pages/RDCs';
import PrivateRoute from './pages/PrivateRoute';
import NotFound from './pages/NotFound';


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component ={Logon}/>
                <PrivateRoute path="/Home" component ={Casa}/>
                <PrivateRoute path="/Administradores" component ={Adm}/>
                <PrivateRoute path="/Atividades" component ={Atividade}/>
                <PrivateRoute path="/Lideres" component ={Lider}/>
                <PrivateRoute path="/Funcionarios" component ={Funcionario}/>
                <PrivateRoute path="/RDCs" component ={RDC}/>
                <PrivateRoute component ={NotFound}/>
            </Switch>
        </BrowserRouter>    
    )
}