import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogOut, FiPlusCircle , FiTrash2, FiList, FiArrowLeft, FiEdit} from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';

import MIPlogo from '../../assets/logoMIP.png'

export default function Atividade(){
    const AdmName = localStorage.getItem('AdmName');
    
    const history = useHistory();
    const [area, setArea] = useState('');
    const [cod, setCod] = useState('');
    const [description, setDescription] = useState('');    
    const [area2, setArea2] = useState('');
    const [cod2, setCod2] = useState('');
    const [description2, setDescription2] = useState('');
    const [updateId, setId] = useState('');
    

    async function handleRegister(e){
        e.preventDefault();
        const data= {
            area,
            cod,
            description,
        };
       
        try {
            await api.post('activities', data);
            handeleList();
            
        }catch (err){
            alert('erro no cadastro, tente novamente!')
        }
    }
    

    const[Activities, SetActivities] = useState([]);

   

    function handeleList(){
        api.get('activities').then(response => {
            SetActivities(response.data);            
        })
    };

    async function handleDelete(id){
        if(window.confirm(`Tem certeza que deseja deletar a atividade de id ${id}?`))
        {
            try{
                await api.delete(`activities/${id}`);
                handeleList();       
            }catch(err){
                alert('Erro ao deletar atividade');
            }
        }

    }
    
    async function handleUpdate(e){  
        if(updateId!==''){
            if(area2!==''&&cod2!==''&&description2!==''){
                if(window.confirm(`Tem certeza que deseja atualizar a atividade de ID: ${updateId}`)){
                    e.preventDefault();        
                    const data2= {
                        area2,
                        cod2,
                        description2,
                    };                            
                    try{
                        await api.put(`activities/${updateId}`, data2);
                        alert('Atividade atualizado com sucesso!')
                        handeleList();
                        
                    }catch (err){
                        const erro = err.response.data
                        alert(erro)
                    }
                }
            }
            else{
                alert('Todos os campos devem ser preenchidos!')
            }
        }            
        else{
            alert('Nenhuma atividade selecionada!')
        }      
       
    }

    async function singout(){
        localStorage.setItem('AdmName', '');
        history.push('/')
    }
    
    
    return(      
      <div className="Atividade-container">
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
                    <h1>Gerenciamento de Atividades</h1>
                 </section>
                 <section className="Logout">
                    <Link to="/Home" className="button-logout"> <FiArrowLeft size={25}></FiArrowLeft> Voltar </Link>
                    <button onClick={singout}  className="button-logout" > <FiLogOut size={25}/>Sair</button>
                 </section>
             </section>
             <div className="Meio">
                <div className="Crud">
                    <section className="actions">
                         <button onClick={handeleList} className="card-title"> <FiList size={25}/>Lista de atividades </button>
                    </section>
                    <section className="cards">
                        <ul className="list">
                        {Activities.map(activities => (
                                <li key={activities.id}>
                                <strong>ID: </strong>
                                <text>{activities.id}  /  </text>
                                <strong>Area: </strong>
                                <text>{activities.area}  /  </text>
                                <strong>Código: </strong>
                                <text>{activities.cod}</text>
                                <p></p>
                                <strong>Descrição: </strong>
                                <text>{activities.description}    </text>
                                <section className="button-section">
                                    <button onClick={()=>handleDelete(activities.id)} className="button-card" type="submit"> <FiTrash2 size={25} color="red"/></button>
                                    <button onClick={()=>setId(activities.id)} className="button-card" type="submit"> <FiEdit size={25} color="green"/></button>
                                </section>
                            </li>
                           ))}
                        </ul>
                    </section>
                    <section className="actions">
                         <text className="card-title"> <FiPlusCircle size={25}/>Adicionar nova atividade</text>
                    </section>
                    <section className="cards-new">
                        <section className="form">
                            <form onSubmit={handleRegister} className="new">
                                <section className="campos">
                                    <input className="imput"
                                         placeholder="Digite a área da atividade"
                                         value={area}
                                         onChange={e => setArea(e.target.value)}
                                    />
                                    <input className="imput"
                                         placeholder="Digite o código da atividade"
                                         value={cod}
                                         onChange={e => setCod(e.target.value)}
                                    />
                                    <textarea className="imput" 
                                        type="textarea" 
                                        placeholder="Digite a descrição da atividade"
                                        value={description}
                                        onChange={e => setDescription(e.target.value)}
                                    />
                                </section>
                                <section >
                                    <button className="button-card" type="submit"> <FiPlusCircle size={25} color="blue"/></button>
                                </section>
                            </form>
                        </section>                                          
                    </section>
                    <section className="actions">
                         <text className="card-title"> <FiEdit size={25}/>Editar atividade</text>
                    </section>
                    <section className="cards-new">
                        <section className="form">
                            <form className="new">
                                <section className="campos">
                                    <input className="imput"
                                         placeholder="Digite a área da atividade"
                                         value={area2}
                                         onChange={e => setArea2(e.target.value)}
                                    />
                                    <input className="imput"
                                         placeholder="Digite o código da atividade"
                                         value={cod2}
                                         onChange={e => setCod2(e.target.value)}
                                    />
                                    <textarea className="imput" 
                                        type="textarea" 
                                        placeholder="Digite a descrição da atividade"
                                        value={description2}
                                        onChange={e => setDescription2(e.target.value)}
                                    />
                                </section>
                                <section >
                                    <submit onClick={handleUpdate} className="button-card"> <FiEdit size={25} color="Green"/>Id:{updateId}</submit>  
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

