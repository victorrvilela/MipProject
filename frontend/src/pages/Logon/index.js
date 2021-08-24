import React, { useState } from 'react';
import {useHistory } from 'react-router-dom';

import './styles.css';

import api from '../../services/api';
import MIPlogo from '../../assets/logoMIP.png';

export default function Logon(){

    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        try {
            const response = await api.post('login', { email, password });
            if(response){                
                localStorage.setItem('AdmName', response.data.name )
                history.push('/Home')
            }else{
                alert('erro ao logar');
            }
        }catch(err){
            alert('erro ao logar');
        }
    }


    return(
       <div className="logon-container">
           <div className="logon-color">
                 <section className="img">
                    <img src={MIPlogo} alt ="MIP Engenharia"/>
                </section>
                <section className="form">
                    <form onSubmit={handleLogin}>
                        <section className="campos">
                            <h1>Faça seu login</h1>
                            <input 
                                className="imput" 
                                placeholder="Digite seu Email"
                                type ="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <input 
                                type="password"
                                className="imput" 
                                placeholder="Digite sua Senha"
                                value={password}
                                
                                onChange={e => setPassword(e.target.value)}
                            />
                            <button className="button" type="submit">Entrar</button>
                        </section>
                    </form>
                </section>
                
            </div>
       </div>
       
    );
}

