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
    const [area_activity1, setAreaactivity1] = useState('');
    const [cod_activity1, setCodactivity1] = useState('');
    const [description_activity1, setDescription_activity1] = useState('');
    const [area_activity2, setAreaactivity2] = useState('');
    const [cod_activity2, setCodactivity2] = useState('');
    const [description_activity2, setDescription_activity2] = useState('');
    const [area_activity3, setAreaactivity3] = useState('');
    const [cod_activity3, setCodactivity3] = useState('');
    const [description_activity3, setDescription_activity3] = useState('');
    const [area_activity4, setAreaactivity4] = useState('');
    const [cod_activity4, setCodactivity4] = useState('');
    const [description_activity4, setDescription_activity4] = useState('');
    const [area_activity5, setAreaactivity5] = useState('');
    const [cod_activity5, setCodactivity5] = useState('');
    const [description_activity5, setDescription_activity5] = useState('');
    const [area_activity6, setAreaactivity6] = useState('');
    const [cod_activity6, setCodactivity6] = useState('');
    const [description_activity6, setDescription_activity6] = useState('');
    const [area2, setArea2] = useState('');
    const [cod2, setCod2] = useState('');
    const [obra2, setObra2] = useState('');
    const [name_leader2, setName_leader2] = useState('');
    const [area_activity12, setAreaactivity12] = useState('');
    const [cod_activity12, setCodactivity12] = useState('');
    const [description_activity12, setDescription_activity12] = useState('');
    const [area_activity22, setAreaactivity22] = useState('');
    const [cod_activity22, setCodactivity22] = useState('');
    const [description_activity22, setDescription_activity22] = useState('');
    const [area_activity32, setAreaactivity32] = useState('');
    const [cod_activity32, setCodactivity32] = useState('');
    const [description_activity32, setDescription_activity32] = useState('');
    const [area_activity42, setAreaactivity42] = useState('');
    const [cod_activity42, setCodactivity42] = useState('');
    const [description_activity42, setDescription_activity42] = useState('');
    const [area_activity52, setAreaactivity52] = useState('');
    const [cod_activity52, setCodactivity52] = useState('');
    const [description_activity52, setDescription_activity52] = useState('');
    const [area_activity62, setAreaactivity62] = useState('');
    const [cod_activity62, setCodactivity62] = useState('');
    const [description_activity62, setDescription_activity62] = useState('');
    const [updateId, setId] = useState('');
    const[Leaders, SetLeaders] = useState([]);
    const [atividade, setAtividade] = useState('');
    useEffect(()=>handlePopulate(), []);

   

    async function handlePopulate(){
        try{
            api.get('http://localhost:3333/activities').then(response => {
                setAtividade(response.data);
            })
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
            area_activity1,           
            cod_activity1,
            description_activity1,
            area_activity2,           
            cod_activity2,
            description_activity2,
            area_activity3,           
            cod_activity3,
            description_activity3,
            area_activity4,           
            cod_activity4,
            description_activity4,
            area_activity5,           
            cod_activity5,
            description_activity5,
            area_activity6,           
            cod_activity6,
            description_activity6,
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
                        area_activity12,           
                        cod_activity12,
                        description_activity12,
                        area_activity22,           
                        cod_activity22,
                        description_activity22,
                        area_activity32,           
                        cod_activity32,
                        description_activity32,
                        area_activity42,           
                        cod_activity42,
                        description_activity42,
                        area_activity52,           
                        cod_activity52,
                        description_activity52,
                        area_activity62,           
                        cod_activity62,
                        description_activity62,
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
                        <button onClick={handeleList} className="card-title"> <FiList size={25}/>Lista de Funcionários </button>
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
                         <text className="card-title"> <FiList size={25}/>Adicionar novo RDC</text>
                    </section>
                    <section className="cards-new">
                        <section className="form">
                            <form className="new">
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
                                        <select name="Lider" id="lider" onChange={e => setName_leader2(e.target.value)} >
                                            <option value={name_leader2}>Selecione um líder</option>
                                            {Leaders.map(leader => (<option key={leader.name} value={leader.name} >{leader.name}</option>))}
                                        </select>
                                    </label>  
                                    <label>Líder:
                                        <select name="Lider" id="lider" onChange={e => setName_leader2(e.target.value)} >
                                            <option value={name_leader2}>Selecione um líder</option>
                                            {atividade.map(atividade => (<option key={atividade.name} value={atividade.name} >{atividade.name}</option>))}
                                        </select>
                                    </label>  
                                    <label htmlFor="Atividade">Selecione a segunda atividade:</label>
                                    <select id="atividade" name="atividade" className="imput">
                                        <option value="atividade1">Atividade 1</option>
                                        <option value="atividade2">Atividade 2</option>
                                        <option value="atividade3">Atividade 3</option>
                                        <option value="atividade4">Atividade 4</option>
                                        <option value="atividade5">Atividade 5</option>
                                    </select>  
                                    <textarea className="imput" type="textarea" placeholder="Digite uma pequena descrição da atividade"/>  
                                    <label htmlFor="Atividade">Selecione a terceira atividade:</label>
                                    <select id="atividade" name="atividade" className="imput">
                                        <option value="atividade1">Atividade 1</option>
                                        <option value="atividade2">Atividade 2</option>
                                        <option value="atividade3">Atividade 3</option>
                                        <option value="atividade4">Atividade 4</option>
                                        <option value="atividade5">Atividade 5</option>
                                    </select>
                                    <textarea className="imput" type="textarea" placeholder="Digite uma pequena descrição da atividade"/>    
                                    <label htmlFor="Atividade">Selecione a quarta atividade:</label>
                                    <select id="atividade" name="atividade" className="imput">
                                        <option value="atividade1">Atividade 1</option>
                                        <option value="atividade2">Atividade 2</option>
                                        <option value="atividade3">Atividade 3</option>
                                        <option value="atividade4">Atividade 4</option>
                                        <option value="atividade5">Atividade 5</option>
                                    </select>
                                    <textarea className="imput" type="textarea" placeholder="Digite uma pequena descrição da atividade"/>    
                                    <label htmlFor="Atividade">Selecione a quinta atividade:</label>
                                    <select id="atividade" name="atividade" className="imput">
                                        <option value="atividade1">Atividade 1</option>
                                        <option value="atividade2">Atividade 2</option>
                                        <option value="atividade3">Atividade 3</option>
                                        <option value="atividade4">Atividade 4</option>
                                        <option value="atividade5">Atividade 5</option>
                                    </select>
                                    <textarea className="imput" type="textarea" placeholder="Digite uma pequena descrição da atividade"/>    
                                        <label htmlFor="Atividade">Selecione a sexta atividade:</label>
                                    <select id="atividade" name="atividade" className="imput">
                                        <option value="atividade1">Atividade 1</option>
                                        <option value="atividade2">Atividade 2</option>
                                        <option value="atividade3">Atividade 3</option>
                                        <option value="atividade4">Atividade 4</option>
                                        <option value="atividade5">Atividade 5</option>
                                    </select>
                                    <textarea className="imput" type="textarea" placeholder="Digite uma pequena descrição da atividade"/>                                           
                                </section>
                                <section >
                                    <button className="button-card" type="submit"> <FiPlusCircle size={25} color="blue"/></button>
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

