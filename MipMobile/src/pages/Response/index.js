import React, { Component, useEffect, useState } from 'react';
import {CheckBox, View, Image, Text, KeyboardAvoidingView, Platform, ScrollView, FlatList} from 'react-native';
import {Button, Switch } from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

import api from '../../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import SelectPicker from 'react-native-form-select-picker'; // Import the pack

import logoMip from '../../assets/logoMIP.png';

import styles from './styles';


/* ///////////////////////comentários//////////////////////////////
fazer switch funcionar por questão

https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
multi checkbox mais promissor por enquanto
*/
export default function Response(){
    const [leader, setLeader] = useState('');
    const [area, setArea] = useState('');    
    const [flag, setFlag] = useState(0); 
    const [checked, setCheked] = useState();
      
    const [isSelected, setSelection]  = useState({0:false},{1:false},{2:false});  

    async function handleOnChange (idx){
        console.log(idx)
        setCheked(quest.findIndex(quest => idx.description === quest.description));
        //isSelected.map((item, index) =>
        //index === checked ? item : !item)
        //alert(checked);                      
    }
    console.log(isSelected);
        
    useEffect(()=>{
        getData();                              
        getArea();
        getQuest();
    },quest);

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
   
    
    const [quest, setquest] = useState([]);
    
    
    const options = ["Manhã ", "Tarde ", "Não houve "];
    

    

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
                <ScrollView style ={{width: "100%"}} showsVerticalScrollIndicator ={false} >                    
                    <View style={styles.body}>            
                        <View style={styles.quest}>
                            <Text style={styles.title}>Chuva</Text> 
                            <SelectPicker 
                                placeholder={"clique para responder"}
                                placeholderStyle={{color:"black"}}
                                doneButtonText={"escolhido"}
                                onValueChange={(value) => {                                    
                                    setchuva_Selected(value);
                                }}
                                chuva_selected={chuva_selected}
                            >                                
                                {Object.values(options).map((val,index) => (
                                    <SelectPicker.Item label={val} value={val} /> //exclui a key, pode ser que precise voltar
                                ))}
                            </SelectPicker>
                        </View>
                        <View style={styles.quest}>
                            <Text style={styles.title}>Alerta vermelho</Text> 
                            <SelectPicker 
                                placeholder={"clique para responder"}
                                placeholderStyle={{color:"black"}}
                                doneButtonText={"escolhido"}
                                onValueChange={(value) => {
                                    setredalert_Selected(value);
                                }}
                                redalert_selected={redalert_selected}
                            >                                
                                {Object.values(options).map((val, index) => (
                                    <SelectPicker.Item label={val} value={val}/> //exclui a key, pode ser que precise voltar
                                ))}
                            </SelectPicker>
                            
                        </View>
                        
                        <FlatList                        
                        data={quest}
                        extraData={checked}                                    
                        keyExtractor = {quest => String(quest.description)}                        
                        showsVerticalScrollIndicator = {false}                        
                        renderItem ={({item: quest}, index)=>(
                            <View style={styles.quest}>
                                <Text>{quest.description}</Text>                                
                                <CheckBox
                                    value={false}
                                    onChange={()=>handleOnChange(quest)} //index tá dando undefined                             
                                />                                                  
                            </View>                            
                        )}
                        
                        />
                           
                    
                          

                      
                    
                        
                        <View>
                            <Text>  carregar funcionários com campo para horas trabalhadas

                            </Text>
                        </View>
                       
                        <View>
                            <Text>  OBS</Text>
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