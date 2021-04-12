import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogOut, FiPlusCircle , FiTrash2, FiList, FiArrowLeft, FiEdit} from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';


import MIPlogo from '../../assets/logoMIP.png'

export default function RDC(){
    const AdmName = localStorage.getItem('AdmName');
    
    const history = useHistory();
    const [area, setArea] = useState('');
    const [cod, setCod] = useState('');
    const [obra, setObra] = useState('');
    const [name_leader, setName_leader] = useState('');
    const [area2, setArea2] = useState('');
    const [cod2, setCod2] = useState('');
    const [obra2, setObra2] = useState('');
    const [name_leader2, setName_leader2] = useState('');
    const [updateId, setId] = useState('');
    const[Leaders, SetLeaders] = useState([]);
    
    useEffect(()=>handlePopulate(), []);

   

    async function handlePopulate(){
        try{
            api.get('http://localhost:3333/leaders').then(response => {
            SetLeaders(response.data);
            })
        }catch{
            alert('Erro ao caregar o formulário');
            history.push('/RDCs')
        }
    }


    async function handleRegister(e){
        e.preventDefault();
        const data= {
            area,
            cod,
            obra,
            name_leader,             
        };
       
        try {
            await (await api.post('rdcs', data, {
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
    
    const[rdc, SetRdc] = useState([]);
    
       
    
    function handeleList(){
        api.get('rdcs').then(response => {
            SetRdc(response.data);
        })
    };

    async function handleDelete(id){
        if(window.confirm(`Tem certeza que deseja deletar o RDC de id ${id}?`))
        {
            try{
                await api.delete(`rdcs/${id}`);
                handeleList();       
            }catch(err){
                alert('Erro ao deletar RDC');
            }
        }

    }
    
    async function handleUpdate(e){  
        if(updateId!==''){            
                if(window.confirm(`Tem certeza que deseja atualizar o RDC de ID: ${updateId}`)){
                    e.preventDefault();        
                    const data2= {
                        area2,
                        cod2,
                        obra2,
                        name_leader2,                         
                    };                            
                    try{
                        await api.put(`rdcs/${updateId}`, data2);
                        alert('RDC atualizado com sucesso!')
                        handeleList();
                        
                    }catch (err){
                        const erro = err.response.data
                        alert(err.message)
                    }
                }
            
        }            
        else{
            alert('Nenhum RDC selecionado!')
        }      
       
    }

    async function singout(){
        localStorage.setItem('AdmName', '');
        history.push('/')
    }



    return(      
      <div className="Rdc-container">
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
                    <h1>Gerenciamento de RDCs</h1>
                 </section>
                 <section className="Logout">
                    <Link to="/Home" className="button-logout"> <FiArrowLeft size={25}></FiArrowLeft> Voltar </Link>
                    <button onClick={singout}  className="button-logout" > <FiLogOut size={25}/>Sair</button>
                 </section>
             </section>
             <div className="Meio">
                <div className="Crud">
                    <section className="actions">
                        <button onClick={handeleList} className="card-title"> <FiList size={25}/>Lista de RDCs</button>
                    </section>
                    <section className="cards">
                    <ul className="list">
                        {rdc.map(rdc => (
                            <li key={rdc.id}>
                                <strong>Area: </strong>
                                <text>{rdc.area}  /  </text>
                                <strong>cod: </strong>
                                <text>{rdc.cod}  /  </text>
                                <strong>Obra: </strong>
                                <text>{rdc.obra}  /  </text>
                                <strong>Lider: </strong>
                                <text>{rdc.name_leader}    </text>
                                <section className="button-section">
                                    <button onClick={()=>handleDelete(rdc.id)} className="button-card" type="submit"> <FiTrash2 size={25} color="red"/></button>
                                    <button onClick={()=>setId(rdc.id)} className="button-card" type="submit"> <FiEdit size={25} color="green"/></button>
                                </section>
                            </li>
                        ))}
                        </ul>
                    </section>
                    <section className="actions">
                         <text className="card-title"> <FiPlusCircle size={25}/>Adicionar novo RDC</text>
                    </section>
                    <section className="cards-new">
                        <section className="form">
                            <form onSubmit={handleRegister} className="new">
                                <section className="campos">
                                    <input className="imput" 
                                        placeholder="Digite a área do RDC"
                                        value={area}
                                        onChange={e => setArea(e.target.value)}
                                    />
                                    <input className="imput" 
                                        placeholder="Digite o código do RDC"
                                        value={cod}
                                        onChange={e => setCod(e.target.value)}
                                    />
                                    <input className="imput" 
                                        placeholder="Digite a obra do RDC"
                                        value={obra}
                                        onChange={e => setObra(e.target.value)}
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
                         <text className="card-title"> <FiEdit size={25}/>Editar RDC</text>
                    </section>
                    <section className="cards-new">
                        <section className="form">
                            <form className="new">
                                <section className="campos">
                                    <input className="imput" 
                                        placeholder="Digite a área do RDC"
                                        value={area2}
                                        onChange={e => setArea(e.target.value)}
                                    />
                                    <input className="imput" 
                                        placeholder="Digite o código do RDC"
                                        value={cod2}
                                        onChange={e => setCod(e.target.value)}
                                    />
                                    <input className="imput" 
                                        placeholder="Digite a obra do RDC"
                                        value={obra2}
                                        onChange={e => setObra(e.target.value)}
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

