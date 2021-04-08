import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut, FiPlusCircle , FiTrash2, FiList, FiArrowLeft, FiEdit} from 'react-icons/fi';
import './styles.css';


import MIPlogo from '../../assets/logoMIP.png'

export default function Lider(){
    const AdmName = localStorage.getItem('AdmName');
    

    return(      
      <div className="Lider-container">
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
                    <h1>Gerenciamento de Lideres</h1>
                 </section>
                 <section className="Logout">
                 <Link to="/Home" className="button-logout"> <FiArrowLeft size={25}></FiArrowLeft> Voltar </Link>
                    <Link to="/"  className="button-logout" > <FiLogOut size={25}/>Sair</Link>
                 </section>
             </section>
             <div className="Meio">
                <div className="Crud">
                    <section className="actions">
                         <text className="card-title"> <FiList size={25}/>Lista de lideres </text>
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
                         <text className="card-title"> <FiList size={25}/>Adicionar novo Líder</text>
                    </section>
                    <section className="cards-new">
                        <section className="form">
                            <form className="new">
                                <section className="campos">
                                    <input className="imput" placeholder="Digite o nome do novo Líder"/>
                                    <input className="imput" placeholder="Digite a senha do novo Líder"/>
                                    <input className="imput" placeholder="Digite o email do novo Líder"/>
                                    <input className="imput" placeholder="Digite o telefone do novo Líder"/>                                    
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

