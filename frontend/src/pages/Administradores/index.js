import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogOut, FiPlusCircle , FiTrash2, FiList, FiArrowLeft, FiEdit} from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';


import MIPlogo from '../../assets/logoMIP.png'

export default function Adm(){

    const AdmName = localStorage.getItem('AdmName');
   
    const history = useHistory();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name2, setName2] = useState('');
    const [password2, setPassword2] = useState('');
    const [email2, setEmail2] = useState('');
    const [phone2, setPhone2] = useState('');
    const [updateId, setId] = useState('');
    

    async function handleRegister(e){
        e.preventDefault();
        const data= {
            name,
            password,
            email,
            phone,
        };
       
        try {
            await api.post('adms', data);
            handeleList();
            
        }catch (err){
            alert('erro no cadastro, tente novamente!')
        }
    }
    
    const[Adms, SetAdms] = useState([]);

   

    function handeleList(){
        api.get('adms').then(response => {
            SetAdms(response.data);
        })
    };

    async function handleDelete(id){
        if(window.confirm(`Tem certeza que deseja deletar o adm de id ${id}?`))
        {
            try{
                await api.delete(`adms/${id}`);
                handeleList();       
            }catch(err){
                alert('Erro ao deletar Administrador');
            }
        }

    }
    
    async function handleUpdate(e){  
        if(updateId!==''){
            if(name2!==''&&password2!==''&&email2!==''&&phone2!==''){
                if(window.confirm(`Tem certeza que deseja atualizar o adm de ID: ${updateId}`)){
                    e.preventDefault();        
                    const data2= {
                        name2,
                        password2,
                        email2,
                        phone2,
                    };                            
                    try{
                        await api.put(`adms/${updateId}`, data2);
                        alert('Administrador atualizado com sucesso!')
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
            alert('Nenhum administrador selecionado!')
        }      
       
    }

    async function singout(){
        localStorage.setItem('AdmName', '');
        history.push('/')
    }
    
    return(      
      <div className="Administrador-container">
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
                    <h1>Gerenciamento de Administradores</h1>
                 </section>
                 <section className="Logout">
                 <Link to="/Home" className="button-logout"> <FiArrowLeft size={25}></FiArrowLeft> Voltar </Link>
                 <button onClick={singout}  className="button-logout" > <FiLogOut size={25}/>Sair</button>
                
                 </section>
             </section>
             <div className="Meio">
                <div className="Crud">
                    <section className="actions">
                         <button onClick={handeleList} className="card-title"> <FiList size={25}/>Lista de Administradores </button>
                    </section>
                    <section className="cards">
                        <ul className="list">
                           {Adms.map(adm => (
                                <li key={adm.id}>
                                <strong>ID: </strong>
                                <text>{adm.id}  /  </text>
                                <strong>Nome: </strong>
                                <text>{adm.name}  /  </text>
                                <strong>Email: </strong>
                                <text>{adm.email}  /  </text>
                                <strong>Telefone: </strong>
                                <text>{adm.phone}    </text>
                                <section className="button-section">
                                    <button onClick={()=>handleDelete(adm.id)} className="button-card" type="submit"> <FiTrash2 size={25} color="red"/></button>
                                    <button onClick={()=>setId(adm.id)} className="button-card" type="submit"> <FiEdit size={25} color="green"/></button>
                                </section>
                            </li>
                           ))}
                        </ul>
                    </section>
                    <section className="actions">
                         <text className="card-title"> <FiPlusCircle size={25}/>Adicionar novo Administrador</text>
                    </section>
                    <section className="cards-new">
                        <section className="form">
                            <form onSubmit={handleRegister} className="new">
                                <section className="campos">
                                    <input 
                                        className="imput" 
                                        placeholder="Digite o nome do novo Administrador"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                    <input 
                                        type="email"
                                        className="imput" 
                                        placeholder="Digite o email do novo Administrador"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                    <input 
                                        className="imput" 
                                        placeholder="Digite a senha do novo Administrador"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                    <input 
                                        className="imput" 
                                        placeholder="Digite o telefone do novo Administrador"
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}
                                    />                                    
                                </section>
                                <section>
                                    <button className="button-card" type="submit"> <FiPlusCircle size={25} color="blue"/></button>
                                </section>   
                            </form>
                        </section>
                                                                 
                    </section> 
                    <section className="actions">
                         <text className="card-title"> <FiEdit size={25}/>Editar Administrador</text>
                    </section>
                    <section className="cards-new">
                        <section className="form">
                            <form className="new">
                                    <section className="campos">
                                        <input 
                                            className="imput" 
                                            placeholder="Digite o nome do novo Administrador"
                                            value={name2}
                                            onChange={e => setName2(e.target.value)}
                                        />
                                        <input 
                                            type="email"
                                            className="imput" 
                                            placeholder="Digite o email do novo Administrador"
                                            value={email2}
                                            onChange={e => setEmail2(e.target.value)}
                                        />
                                        <input 
                                            className="imput" 
                                            placeholder="Digite a senha do novo Administrador"
                                            value={password2}
                                            onChange={e => setPassword2(e.target.value)}
                                        />
                                        <input 
                                            className="imput" 
                                            placeholder="Digite o telefone do novo Administrador"
                                            value={phone2}
                                            onChange={e => setPhone2(e.target.value)}
                                        />   
                                                                         
                                    </section>
                                    <section>
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

