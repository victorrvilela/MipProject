import React, { useEffect, useState } from 'react';
import {View, Image, Text, KeyboardAvoidingView, Platform, ScrollView, FlatList} from 'react-native';
import { Input, Button } from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import api from '../../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import SelectPicker from 'react-native-form-select-picker'; // Import the pack

import logoMip from '../../assets/logoMIP.png';
import styles from './styles';

export default function Response(){
    const [leader, setLeader] = useState('');
    const [area, setArea] = useState('');

    useEffect(()=>{
        getData();                              
    },[]);

    
    setTimeout(() => {
        getArea()
    }, 0);
    setTimeout(() => {
        getQuest()
    }, 0);
    async function getData(){        
        try {
          const valueData = await AsyncStorage.getItem('LeaderName')
          if(valueData !== null) {
            setLeader(valueData.replace(/\"/g, ""));          
          }          
        } catch(e) {
            alert('erro ao logar');
            logout();
        }        
      }
      
    //arrumar o fluxo das funções callback ou algo do tipo
    //ver settimeout
    //ver callback

    async function getArea(){  
        if(area==''){
            try{
                const response = await api.post('area', {leader});                        
                await response.data.map(item => {setArea(item.area)}) 
                                                                                         
            }catch{
                alert('erro ao buscar area')
            }       
        }
    }
    
    async function getQuest(){  
        if(quest.length===0){
            const atividade = await api.post('areafiltrada', {area});
            setquest(atividade.data) 
        }             
    }
    
    const logout = async () =>{
        await AsyncStorage.setItem('LeaderName', '')
        navigateToLogin();
    }

    const navagation = useNavigation()
    function navigateToLogin(){
        navagation.navigate('Login');
    }

    const [chuva_selected, setchuva_Selected] = useState('');
    const [redalert_selected, setredalert_Selected] = useState('');
    const [quest_selected, setquest_Selected] = useState('');
    
    const [quest, setquest] = useState([]);
    
    const options = ["Manhã ", "Tarde ", "Não houve "];
    const options2 = ["Manhã", "Tarde", "Não houve"];

    

    return (
        <View style={styles.container}>
            <View style={styles.header} >                        
                        <View style={styles.wellcome}>                                                    
                            <View style={styles.logout}>
                                <Button 
                                    onPress = {()=> logout()}                                          
                                    title = "Sair"
                                    type = {"clear"}
                                    iconleft = {true}
                                    icon={{
                                        name: "logout",
                                        size: 20,
                                        color: "#4169E1"
                                    }}
                                />
                            </View>   
                            <View>
                                <Text style={styles.title}>Bem-vindo(a) {leader} </Text> 
                            </View>                           
                        </View>              
                        <View >
                            <Image style={styles.image} source={logoMip}/>                
                        </View>  
                    </View>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding":"height"}
                style={styles.container}
                keyboardVerticalOffset={150}
            >
                <ScrollView style ={{width: "100%"}} showsVerticalScrollIndicator ={false}>                    
                    <View style={styles.body}>
                    

                        <View style={styles.quest}>
                            <SelectPicker 
                                placeholder={"Chuva"}
                                placeholderStyle={{color:"black"}}
                                doneButtonText={"escolhido"}
                                onValueChange={(value2) => {                                    
                                    setchuva_Selected(value2);
                                }}
                                chuva_selected={chuva_selected}
                            >                                
                                {Object.values(options2).map((val2,index2) => (
                                    <SelectPicker.Item label={val2} value={val2} key={index2}/>
                                ))}
                            </SelectPicker>
                        </View>
                        <View style={styles.quest}>
                            <SelectPicker 
                                placeholder={"Alerta Vermelho"}
                                placeholderStyle={{color:"black"}}
                                doneButtonText={"escolhido"}
                                onValueChange={(value) => {
                                    // Do anything you want with the value. 
                                    // For example, save in state.
                                    setredalert_Selected(value);
                                }}
                                redalert_selected={redalert_selected}
                            >                                
                                {Object.values(options).map((val, index2) => (
                                    <SelectPicker.Item label={val} value={val}  key={index2} />
                                ))}
                            </SelectPicker>
                        </View>
                        <FlatList
                        data={quest}
                        keyExtractor = {quest => String(quest.description)}
                        showsVerticalScrollIndicator = {false}
                        renderItem ={({item: quest})=>(
                            <View>
                                <Text>{quest.description}</Text>
                            </View> 
                           

                        )}
                        />
                        
                    








                      
                        <View>
                            <Text>     atividade (6 vezes)</Text>
                        </View>
                        <View>
                            <Text>   atividade (6 vezes)</Text>
                        </View>
                        <View>
                            <Text> atividade (6 vezes)</Text>
                        </View>
                        <View>
                            <Text>  atividade (6 vezes)</Text>
                        </View>
                        <View>
                            <Text>  atividade (6 vezes)</Text>
                        </View>
                        <View>
                            <Text>  atividade (6 vezes)</Text>
                        </View>
                        <View>
                            <Text>  funcionário 15 vezes</Text>
                        </View>
                        <View>
                            <Text>  funcionário 15 vezes</Text>
                        </View>
                        <View>
                            <Text> funcionário 15 vezes</Text>
                        </View>
                        <View>
                            <Text>  funcionário 15 vezes</Text>
                        </View>
                        <View>
                            <Text>   funcionário 15 vezes</Text>
                        </View>
                        <View>
                            <Text>  funcionário 15 vezes</Text>
                        </View>
                        <View>
                            <Text>   funcionário 15 vezes</Text>
                        </View>
                        <View>
                            <Text> funcionário 15 vezes</Text>
                        </View>
                        <View>
                            <Text>  funcionário 15 vezes</Text>
                        </View>
                        <View>
                            <Text>  funcionário 15 vezes</Text>
                        </View>
                        <View>
                            <Text>  OBS</Text>
                        </View>
                        <View style={styles.input}>
                            <Button 
                                onPress = {()=> getQuest()}                                          
                                title = "carregar atividades"
                                type = {"clear"}
                                iconRight = {true}
                                icon={{
                                    name: "send",
                                    size: 30,
                                    color: "#faad64"
                                }}
                            />
                        </View>

                        <View style={styles.input}>
                            <Button 
                                onPress = {()=>getArea()}                                          
                                title = "Enviar"
                                type = {"clear"}
                                iconRight = {true}
                                icon={{
                                    name: "send",
                                    size: 30,
                                    color: "#faad64"
                                }}
                            />
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}