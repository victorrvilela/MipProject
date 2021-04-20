import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogOut, FiPlusCircle , FiTrash2, FiList, FiArrowLeft, FiEdit} from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';


import MIPlogo from '../../assets/logoMIP.png'

export default function Funcionario(){
    const AdmName = localStorage.getItem('AdmName');

    const history = useHistory();
    const [name, setName] = useState('');
    const [name_leader, setName_leader] = useState('');    
    const [cod, setCod] = useState('');
    const [occupation, setOcuppacion] = useState('');
    const [name2, setName2] = useState('');
    const [name_leader2, setName_leader2] = useState('');
    const [cod2, setCod2] = useState('');
    const [occupation2, setOcuppacion2] = useState('');
    const [updateId, setId] = useState('');


    useEffect(() => {
        api.get('http://localhost:3333/leaders').then(response => {
            SetLeaders(response.data);
        })
    }, []);

    async function handleRegister(e){
        e.preventDefault();
        const data= {
            name,
            cod,
            occupation,
            name_leader,
        };
       
        try {
            await (await api.post('employees', data, {
                headers:{
                    authorization : AdmName
                    }
                }   
            ));
            handeleList();
            
        }catch (err){
            alert('erro no cadastro, tente novamente!')
        }
    }
    
    const[Employees, SetEmployees] = useState([]);
    const[Leaders, SetLeaders] = useState([]);
    
       
    
    function handeleList(){
        api.get('employees').then(response => {
            SetEmployees(response.data);
        })
    };

    async function handleDelete(id){
        if(window.confirm(`Tem certeza que deseja deletar o funcionário de id ${id}?`))
        {
            try{
                await api.delete(`employees/${id}`);
                handeleList();       
            }catch(err){
                alert('Erro ao deletar funcionário');
            }
        }

    }
    
    async function handleUpdate(e){  
        if(updateId!==''){
            if(name2!==''&&cod2!==''&&occupation2!==''&&name_leader2!==''){
                if(window.confirm(`Tem certeza que deseja atualizar o funcionário de ID: ${updateId}`)){
                    e.preventDefault();        
                    const data2= {
                        name2,
                        cod2,
                        occupation2,
                        name_leader2,
                    };                            
                    try{
                        await api.put(`employees/${updateId}`, data2);
                        alert('Funcionário atualizado com sucesso!')
                        handeleList();
                        
                    }catch (err){
                        const erro = err.response.data
                        alert(err.message)
                    }
                }
            }
            else{
                alert('Todos os campos devem ser preenchidos!')
            }
        }            
        else{
            alert('Nenhum funcionário selecionado!')
        }      
       
    }

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
                    <section className="actions">
                    <button onClick={handeleList} className="card-title"> <FiList size={25}/>Lista de Funcionários </button>
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
                                <section className="button-section">
                                    <button onClick={()=>handleDelete(employe.id)} className="button-card" type="submit"> <FiTrash2 size={25} color="red"/></button>
                                    <button onClick={()=>setId(employe.id)} className="button-card" type="submit"> <FiEdit size={25} color="green"/></button>
                                </section>
                            </li>
                        ))}
                        </ul>
                    </section>
                    <section className="actions">
                         <text className="card-title"> <FiPlusCircle size={25}/>Adicionar novo funcionário</text>
                    </section>
                    <section className="cards-new">
                        <section className="form">
                        <form onSubmit={handleRegister} className="new">
                                <section className="campos">
                                    <input className="imput" 
                                        placeholder="Digite o nome do novo Funcionário"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                    <input className="imput" 
                                        placeholder="Digite a matrícula do novo Funcionário"
                                        value={cod}
                                        onChange={e => setCod(e.target.value)}
                                    />
                                    <input className="imput" 
                                        placeholder="Digite o cargo do novo Funcionário"
                                        value={occupation}
                                        onChange={e => setOcuppacion(e.target.value)}
                                    />                                                                    
                                    <label>Líder:
                                        <select name="Lider" id="lider" onChange={e => setName_leader(e.target.value)} >
                                            <option value={name_leader}>Selecione um líder</option>
                                            {Leaders.map(leader => (<option key={leader.name} value={leader.name} >{leader.name}</option>))}
                                        </select>
                                    </label>                                
                                </section>
                                <section >
                                    <button className="button-card" type="submit"> <FiPlusCircle size={25} color="blue"/></button>
                                </section> 
                            </form>
                        </section>                                         
                    </section>   
                    <section className="actions">
                         <text className="card-title"> <FiEdit size={25}/>Editar funcionário</text>
                    </section>
                    <section className="cards-new">
                        <section className="form">
                        <form className="new">
                                <section className="campos">
                                    <input className="imput" 
                                        placeholder="Digite o nome do novo Funcionário"
                                        value={name2}
                                        onChange={e => setName2(e.target.value)}
                                    />
                                    <input className="imput" 
                                        placeholder="Digite a matrícula do novo Funcionário"
                                        value={cod2}
                                        onChange={e => setCod2(e.target.value)}
                                    />
                                    <input className="imput" 
                                        placeholder="Digite o cargo do novo Funcionário"
                                        value={occupation2}
                                        onChange={e => setOcuppacion2(e.target.value)}
                                    />
                                    <label>Líder:
                                        <select name="Lider" id="lider" onChange={e => setName_leader2(e.target.value)} >
                                            <option value={name_leader2}>Selecione um líder</option>
                                            {Leaders.map(leader => (<option key={leader.name} value={leader.name} >{leader.name}</option>))}
                                        </select>
                                    </label>                                                                                                              
                                </section>
                                <section >
                                 <submit onClick={handleUpdate} className="button-card" > <FiEdit size={25} color="green"/>Id:{updateId}</submit>    
                                </section> 
                            </form>
                        </section>                                  
                    </section>                  
                </div>               
             </div>           
          </section>
        </div>
           
    );
}

