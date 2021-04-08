import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut, FiPlusCircle , FiTrash2, FiList, FiArrowLeft, FiEdit} from 'react-icons/fi';
import './styles.css';


import MIPlogo from '../../assets/logoMIP.png'

export default function RDC(){
    const AdmName = localStorage.getItem('AdmName');
    


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
                    <Link to="/"  className="button-logout" > <FiLogOut size={25}/>Sair</Link>
                 </section>
             </section>
             <div className="Meio">
                <div className="Crud">
                    <section className="actions">
                         <text className="card-title"> <FiList size={25}/>Lista de RDCs </text>
                    </section>
                    <section className="cards">
                        <ul className="list">
                            <li>
                                <strong>ID:</strong>
                                <text>id:1</text>
                                <strong>Area:</strong>
                                <text>Civil</text>
                                <strong>Código</strong>
                                <text>001</text>
                                <strong>Descriçao</strong>
                                <text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit sed mollitia illo ratione sit eligendi odio similique odit! .</text>
                                <section className="button-section">
                                    <button className="button-card" type="submit"> <FiTrash2 size={25} color="red"/></button>
                                    <button className="button-card" type="submit"> <FiEdit size={25} color="green"/></button>
                                </section>
                            </li>
                            <li>
                                <strong>ID:</strong>
                                <text>id:1</text>
                                <strong>Area:</strong>
                                <text>Civil</text>
                                <strong>Código</strong>
                                <text>001</text>
                                <strong>Descriçao</strong>
                                <text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit sed mollitia illo ratione sit eligendi odio similique odit! .</text>
                                <section className="button-section">
                                    <button className="button-card" type="submit"> <FiTrash2 size={25} color="red"/></button>
                                    <button className="button-card" type="submit"> <FiEdit size={25} color="green"/></button>
                                </section>
                            </li>
                            <li>
                                <strong>ID:</strong>
                                <text>id:1</text>
                                <strong>Area:</strong>
                                <text>Civil</text>
                                <strong>Código</strong>
                                <text>001</text>
                                <strong>Descriçao</strong>
                                <text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit sed mollitia illo ratione sit eligendi odio similique odit! .</text>
                                <section className="button-section">
                                    <button className="button-card" type="submit"> <FiTrash2 size={25} color="red"/></button>
                                    <button className="button-card" type="submit"> <FiEdit size={25} color="green"/></button>
                                </section>
                            </li>
                            <li>
                                <strong>ID:</strong>
                                <text>id:1</text>
                                <strong>Area:</strong>
                                <text>Civil</text>
                                <strong>Código</strong>
                                <text>001</text>
                                <strong>Descriçao</strong>
                                <text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit sed mollitia illo ratione sit eligendi odio similique odit! .</text>
                                <section className="button-section">
                                    <button className="button-card" type="submit"> <FiTrash2 size={25} color="red"/></button>
                                    <button className="button-card" type="submit"> <FiEdit size={25} color="green"/></button>
                                </section>
                            </li>
                            <li>
                                <strong>ID:</strong>
                                <text>id:1</text>
                                <strong>Area:</strong>
                                <text>Civil</text>
                                <strong>Código</strong>
                                <text>001</text>
                                <strong>Descriçao</strong>
                                <text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit sed mollitia illo ratione sit eligendi odio similique odit! .</text>
                                <section className="button-section">
                                    <button className="button-card" type="submit"> <FiTrash2 size={25} color="red"/></button>
                                    <button className="button-card" type="submit"> <FiEdit size={25} color="green"/></button>
                                </section>
                            </li>
                        </ul>
                    </section>
                    <section className="actions">
                         <text className="card-title"> <FiList size={25}/>Adicionar novo RDC</text>
                    </section>
                    <section className="cards-new">
                        <section className="form">
                            <form className="new">
                                <section className="campos">
                                    <input className="imput" placeholder="Digite a área do RDC"/>
                                    <input className="imput" placeholder="Digite o código do RDC"/>
                                    <input className="imput" placeholder="Digite a obra do RDC"/>
                                    <label htmlFor="Lider">Selecione o lider</label>
                                    <select id="Lider" name="Lider" className="imput">
                                        <option value="Lider1">1</option>
                                        <option value="Lider2">2</option>
                                        <option value="Lider 3">3</option>
                                    </select>
                                    <label htmlFor="Atividade">Selecione a primeira atividade:</label>
                                    <select id="atividade" name="atividade" className="imput">
                                        <option value="atividade1">Atividade 1</option>
                                        <option value="atividade2">Atividade 2</option>
                                        <option value="atividade3">Atividade 3</option>
                                        <option value="atividade4">Atividade 4</option>
                                        <option value="atividade5">Atividade 5</option>
                                    </select>
                                    <textarea className="imput" type="textarea" placeholder="Digite uma pequena descrição da atividade"/>  
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

