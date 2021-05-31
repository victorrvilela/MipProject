import React, { useEffect, useState } from 'react';
import {View, Image, Text, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import { Input, Button } from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage';

import logoMip from '../../assets/logoMIP.png';
import styles from './styles';

export default function Login(){

    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);

    async function handleLogin(){         
        const data = {email, password}    
        try {            
            const response = await api.post('leaderlogin', data);                         
            if(response){                                
                try {
                    const jsonValue = JSON.stringify(response.data.name)
                    await AsyncStorage.setItem('LeaderName', jsonValue)                 
                  } catch (e) {
                    alert('erro ao logar');
                  }  
                                                                           
                navigateToResponse();
            }else{
                alert('erro ao logar');
            }
        }catch(err){
            alert('erro ao logar');
        }
    }
   
    const entrar = () => {                
        handleLogin();     
    }


    const navagation = useNavigation()
    function navigateToResponse(){
        navagation.navigate('Response');
    }
    
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding":"height"}
                style={styles.container}
                keyboardVerticalOffset={150}
            >
                <ScrollView style ={{width: "100%"}} showsVerticalScrollIndicator ={false}>
                  
                    <View style={styles.header} >
                        <View >
                            <Image style={styles.image} source={logoMip}/>                
                        </View>
                        <View style={styles.wellcome}>
                            <Text style={styles.title}>Bem-vindo(a) líder</Text>
                            <Text></Text>
                            <Text style={styles.title}>Faça login para responder seu RDC</Text>
                        </View>                
                    </View>
                    <View style={styles.input}>
                        <Input 
                            placeholder='Digite seu e-mail' 
                            keyboardType = 'email-address' 
                            rightIcon = {{ type: 'font-awesome', name: 'envelope', color:'#faad64'}}
                            onChangeText={value => setEmail(value)}           
                        />
                    </View>
                    <View style={styles.input}>
                        <Input 
                            placeholder='Digite sua senha' 
                            rightIcon = {{ type: 'font-awesome', name: 'lock', color:'#faad64'}}  
                            secureTextEntry = {true}         
                            onChangeText={value => setPassword(value)}
                        />                
                    </View>
                    <View style={styles.input}>
                        <Button 
                            onPress = {()=> entrar()}                                         
                            title = "Entrar"
                            type = {"clear"}
                            iconRight = {true}
                            icon={{
                                name: "login",
                                size: 30,
                                color: "#faad64"
                            }}
                        />
                    </View>
                    
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}