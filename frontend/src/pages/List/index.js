import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogOut, FiList, FiArrowLeft, FiCheck} from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';


import MIPlogo from '../../assets/logoMIP.png'

export default function List(){
    const AdmName = localStorage.getItem('AdmName');

    const history = useHistory();
    const [name, setName] = useState('');
    const [name_leader, setName_leader] = useState('');    
    const [cod, setCod] = useState('');
    const [occupation, setOcuppacion] = useState('');

    useEffect(() => {
        api.get('http://localhost:3333/leaders').then(response => {
            SetLeaders(response.data);
        })
    }, []);

    
    const[Employees, SetEmployees] = useState([]);
    const[Leaders, SetLeaders] = useState([]);
    
       
    
    async function handeleList(){
        
        try{
            api.get('profiles',{
                headers:{
                    leader : name_leader
                    }
                }).then(response => {
                SetEmployees(response.data);
            })
        }catch{
            alert('erro na listagem dos funcionários, tente novamente!')
        }
    }; 

    async function singout(){
        localStorage.setItem('AdmName', '');
        history.push('/')
    }

    return(      
      <div className="Funcionario-container">
          <section className="Cabeçalho">
            <section className="Texto-cabeçalho">

                <h1>Relatório Diário de Campo</h1>
            </section> 
            <section className="Logo">
                
                <h1>Unidade Congonhas do campo</h1>
                <img src={MIPlogo} alt ="MIP Engenharia"/>
            </section>
          </section>

          <section className="Corpo">              
             <section className ="Topo">
                 <section className="Wellcome" >
                    <h1>Bem vindo(a), {AdmName}</h1>
                 </section>
                 <section className="Titulo">
                    <h1>Gerenciamento de Funcionarios</h1>
                 </section>
                 <section className="Logout">
                 <Link to="/Home" className="button-logout"> <FiArrowLeft size={25}></FiArrowLeft> Voltar </Link>
                 <button onClick={singout}  className="button-logout" > <FiLogOut size={25}/>Sair</button>
                 </section>
             </section>
             <div className="Meio">
                <div className="Crud">                   
                    <section className="cards-new">
                        <section className="form">
                            <form className="new-list" >
                                <section className="campos">
                                    <label>Líder:
                                        <select name="Lider" id="lider" onChange={e => setName_leader(e.target.value)} >
                                            <option value={name_leader}>Selecione um líder</option>
                                            {Leaders.map(leader => (<option key={leader.name} value={leader.name} >{leader.name}</option>))}
                                        </select>
                                    </label>                                      
                                </section >
                                <section className="campos">
                                    <submit  onClick={()=>handeleList()}  className="button-card" > <FiCheck size={25} color="green"/></submit>                                                                                                          
                                </section>
                            </form>
                        </section>                                  
                    </section>    
                    <section className="actions">
                        <button  className="card-title"> <FiList size={25}/>Lista de Funcionários </button>
                    </section> 
                    <section className="cards">
                        <ul className="list">
                        {Employees.map(employe => (
                            <li key={employe.id}>
                                <strong>ID: </strong>
                                <text>{employe.id}  /  </text>
                                <strong>Nome: </strong>
                                <text>{employe.name}  /  </text>
                                <strong>Matrícula: </strong>
                                <text>{employe.cod}  /  </text>
                                <strong>Função: </strong>
                                <text>{employe.occupation}    </text>                              
                            </li>
                        ))}
                        </ul>
                    </section>
                    
                   
                    
                               
                </div>               
             </div>           
          </section>
        </div>
           
    );
}

