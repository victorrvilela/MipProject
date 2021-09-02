import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogOut, FiPlusCircle , FiTrash2, FiList, FiArrowLeft, FiEdit} from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';

import MIPlogo from '../../assets/logoMIP.png'

export default function Lider(){

        const AdmName = localStorage.getItem('AdmName');
       
        const history = useHistory();
        
        const [name, setName] = useState('');
        const [password, setPassword] = useState('');
        const [email, setEmail] = useState('');
        const [phone, setPhone] = useState('');
        const [area, setArea] = useState('');
        const [name2, setName2] = useState('');
        const [password2, setPassword2] = useState('');
        const [email2, setEmail2] = useState('');
        const [phone2, setPhone2] = useState('');
        const [area2, setArea2] = useState('');
        const [updateId, setId] = useState('');
        
        
        
        async function handleRegister(e){
            e.preventDefault();
            const data= {
                name,
                password,
                email,
                phone, 
                area,                       
            };
            
            try {
                await (await api.post('leaders', data, {
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
        
    
        const[Leaders, SetLeaders] = useState([]);
    
       
    
        function handeleList(){
            api.get('leaders').then(response => {
                SetLeaders(response.data);
            })
        };
    
        async function handleDelete(id){
            if(window.confirm(`Tem certeza que deseja deletar o lider de id ${id}?`))
            {
                try{
                    await api.delete(`leaders/${id}`);
                    handeleList();       
                }catch(err){
                    alert('Erro ao deletar líder');
                }
            }
    
        }
        
        async function handleUpdate(e){  
            if(updateId!==''){
                if(name2!==''&&password2!==''&&email2!==''&&phone2!==''&&area2!==''){
                    if(window.confirm(`Tem certeza que deseja atualizar o líder de ID: ${updateId}`)){
                        e.preventDefault();        
                        const data2= {
                            name2,
                            password2,
                            email2,
                            phone2,
                            area2,
                        };                            
                        try{
                            await api.put(`leaders/${updateId}`, data2);
                            alert('Líder atualizado com sucesso!')
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
                alert('Nenhum líder selecionado!')
            }      
           
        }
    
        async function singout(){
            localStorage.setItem('AdmName', '');
            history.push('/')
        }
        return(      
            <div className="Lider-container">
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
                       <section className="Titulo">
                          <h1>Gerenciamento de Líderes</h1>
                       </section>
                       <section className="Logout">
                       <Link to="/Home" className="button-logout"> <FiArrowLeft size={25}></FiArrowLeft> Voltar </Link>
                       <button onClick={singout}  className="button-logout" > <FiLogOut size={25}/>Sair</button>
                      
                       </section>
                   </section>
                   <div className="Meio">
                      <div className="Crud">
                          <section className="actions">
                               <button onClick={handeleList} className="card-title"> <FiList size={25}/>Lista de Líderes </button>
                          </section>
                          <section className="cards">
                              <ul className="list">
                                 {Leaders.map(leader => (
                                      <li key={leader.id}>
                                      <strong>ID: </strong>
                                      <text>{leader.id}  /  </text>
                                      <strong>Nome: </strong>
                                      <text>{leader.name}  /  </text>
                                      <strong>Email: </strong>
                                      <text>{leader.email}  /  </text>
                                      <strong>Telefone: </strong>
                                      <text>{leader.phone}    </text>
                                      <strong>Area: </strong>
                                      <text>{leader.area}    </text>
                                      <section className="button-section">
                                          <button onClick={()=>handleDelete(leader.id)} className="button-card" type="submit"> <FiTrash2 size={25} color="red"/></button>
                                          <button onClick={()=>setId(leader.id)} className="button-card" type="submit"> <FiEdit size={25} color="green"/></button>
                                      </section>
                                  </li>
                                 ))}
                              </ul>
                          </section>
                          <section className="actions">
                               <text className="card-title"> <FiPlusCircle size={25}/>Adicionar novo líder</text>
                          </section>
                          <section className="cards-new">
                              <section className="form">
                                  <form onSubmit={handleRegister} className="new">
                                      <section className="campos">
                                          <input 
                                              className="imput" 
                                              placeholder="Digite o nome do novo Lider"
                                              value={name}
                                              onChange={e => setName(e.target.value)}
                                          />
                                          <input 
                                              type="email"
                                              className="imput" 
                                              placeholder="Digite o email do novo Lider"
                                              value={email}
                                              onChange={e => setEmail(e.target.value)}
                                          />
                                          <input 
                                              className="imput" 
                                              placeholder="Digite a senha do novo Lider"
                                              value={password}
                                              onChange={e => setPassword(e.target.value)}
                                          />
                                          <input 
                                              className="imput" 
                                              placeholder="Digite o telefone do novo Lider"
                                              value={phone}
                                              onChange={e => setPhone(e.target.value)}
                                          />      
                                          <input 
                                              className="imput" 
                                              placeholder="Digite a área de atuação do novo Lider"
                                              value={area}
                                              onChange={e => setArea(e.target.value)}
                                          />                              
                                      </section>
                                      <section>
                                          <button className="button-card" type="submit"> <FiPlusCircle size={25} color="blue"/></button>
                                      </section>   
                                  </form>
                              </section>
                                                                       
                          </section> 
                          <section className="actions">
                               <text className="card-title"> <FiEdit size={25}/>Editar Lider</text>
                          </section>
                          <section className="cards-new">
                              <section className="form">
                                  <form className="new">
                                          <section className="campos">
                                              <input 
                                                  className="imput" 
                                                  placeholder="Digite o nome do novo Lider"
                                                  value={name2}
                                                  onChange={e => setName2(e.target.value)}
                                              />
                                              <input 
                                                  type="email"
                                                  className="imput" 
                                                  placeholder="Digite o email do novo Lider"
                                                  value={email2}
                                                  onChange={e => setEmail2(e.target.value)}
                                              />
                                              <input 
                                                  className="imput" 
                                                  placeholder="Digite a senha do novo Lider"
                                                  value={password2}
                                                  onChange={e => setPassword2(e.target.value)}
                                              />
                                              <input 
                                                  className="imput" 
                                                  placeholder="Digite o telefone do novo Lider"
                                                  value={phone2}
                                                  onChange={e => setPhone2(e.target.value)}
                                              />   
                                              <input 
                                                    className="imput" 
                                                    placeholder="Digite a área de atuação do novo Lider"
                                                    value={area2}
                                                    onChange={e => setArea2(e.target.value)}
                                                />      
                                                                               
                                          </section>
                                          <section>
                                              <submit onClick={handleUpdate} className="button-card" > <FiEdit size={25} color="green"/>Clique para editar Id:{updateId}</submit>    
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
      
      