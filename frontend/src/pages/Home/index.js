import React from 'react';
import { FaList, FaWrench } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { Link , useHistory} from 'react-router-dom';

import './styles.css';

import MIPlogo from '../../assets/logoMIP.png'

export default function Casa(){
    const AdmName = localStorage.getItem('AdmName');
    const history = useHistory();
    async function singout(){
        localStorage.setItem('AdmName', '');
        history.push('/')
    }
    
    return(
      <div className="Home-container">
          <section className="Cabeçalho">
            <section className="Texto-cabeçalho">
                <div>
                    <h1>Relatório Diário de Campo</h1>
                </div>
                <div className="unidade">
                    <h1>Unidade Congonhas do campo</h1>
                </div>                
            </section> 
            <section className="logo">                
                
                <img src={MIPlogo} alt ="MIP Engenharia"/>
            </section>
          </section>

          <section className="Corpo">
            <section className ="Topo">
                    <section className="Wellcome" >
                        <h1>Bem vindo(a), {AdmName}</h1>
                    </section>
                    <section className="Logout">
                        <button onClick={singout}  className="button-logout" > <FiLogOut size={25}/>Sair</button>
                    </section>
            </section>
            <section className ="linhas">
                <section className ="MeioHome">
                    <section className="Colunas">
                        <Link to="/Lideres"  className="button" > <FaWrench size={20}/> <text className="gerenciar">Gerenciar Líderes</text></Link>
                    </section>
                    <section className="Colunas">
                        <Link to="/Funcionarios"  className="button" > <FaWrench size={20}/> <text className="gerenciar">Gerenciar Funcionários</text></Link>
                    </section>
                    <section className="Colunas">
                        <Link to="/Atividades"  className="button" > <FaWrench size={20}/><text className="gerenciar"> Gerenciar Atividades</text></Link>
                    </section>
                </section>
                <section className ="MeioHome">
                    <section className="Colunas">
                        <Link to="/RDCs"  className="button" > <FaWrench size={20}/><text className="gerenciar">Gerenciar RDCs</text></Link>
                    </section>
                    <section className="Colunas">
                        <Link to="/Administradores"  className="button" > <FaWrench size={20}/><text className="gerenciar">Gerenciar Administradores</text></Link>
                    </section>
                    <section className="Colunas">
                        <Link to="/list"  className="button" > <FaList size={20}/><text className="gerenciar">Listagem de funcionários</text></Link>
                    </section>
                </section>
            </section>
        </section>   

      </div>
       
    );
}

