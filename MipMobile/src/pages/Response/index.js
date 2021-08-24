import React, {useEffect, useState } from 'react';
import {CheckBox, View, Image, Text, KeyboardAvoidingView, Platform, ScrollView, FlatList, TextInput} from 'react-native';
import {Button, Switch } from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import SelectPicker from 'react-native-form-select-picker'; 
import logoMip from '../../assets/logoMIP.png';
import styles from './styles';


 ///////////////////////comentários//////////////////////////////

export default function Response(){

    useEffect(()=>{
        getData();                              
        getArea();
        getQuest();
        getEmployee();        
    },employees);
    //////////////////////////constantes///////////////////////////

    const [flag, setFlag] = useState(0);
    const [leader, setLeader] = useState('');
    const [area, setArea] = useState('');       
    const [chuva_selected, setchuva_Selected] = useState('');
    const [redalert_selected, setredalert_Selected] = useState('');       
    const [quest, setQuest] = useState([]);   
    const [employees, setEmployees] = useState([]);       
    const options = ["Manhã ", "Tarde ", "Não houve "];
    const [isSelected, setSelection]  = useState(
        new Array(50).fill(false)
      );
    
    //////////////////////////funções///////////////////////////

    function faztudo(){
        
      // 
       console.log(isSelected)
       
     }
    
     
    async function handleOnChange (idx){                
        const checked = isSelected.map((item, index) =>
        index === quest.findIndex(quest => idx.description === quest.description) ? !item : item
        );
        setSelection(checked);           
    }
          
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
            setQuest(atividade.data)                
        }else if(flag===0){
            setSelection(
                new Array(quest.length).fill(false)
              );
              setFlag(1);
        }                                       
    }
    
    async function getEmployee(){  
        if(employees.length===0){
            await api.get('profiles',{
                headers:{
                    leader : leader
                    }
            }).then(response => {setEmployees(response.data);})                         
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

    
    //////////////////////////tela///////////////////////////

    

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
                        <Text style={styles.title}>Alertas</Text>           
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
                                    <SelectPicker.Item label={val} value={val} key={val} /> //exclui a key, pode ser que precise voltar
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
                                    <SelectPicker.Item label={val} value={val} key={val} />
                                ))}
                            </SelectPicker>
                            
                        </View>
                        <Text style={styles.title}>Atividades</Text>
                        <FlatList                        
                        data={quest}
                        extraData={isSelected}                                    
                        keyExtractor = {quest => String(quest.id)}                        
                        showsVerticalScrollIndicator = {false}                        
                        renderItem ={({item: quest, index} )=>(
                            <View style={styles.quest}>                                                                
                                <CheckBox
                                    value={isSelected[index]}
                                    onChange={()=>handleOnChange(quest)}                            
                                />  
                                <Text>   {quest.description}</Text>
                                <TextInput
                                    style={styles.input}                                                                
                                    placeholder="Descrição da atividade"                                
                                />                                                
                            </View>
                                                        
                        )}
                        
                        />
                        <Text style={styles.title}>Funcionários</Text>
                        <FlatList                        
                        data={employees}                                                          
                        keyExtractor = {employees => String(employees.name)}                                                
                        showsVerticalScrollIndicator = {false}                        
                        renderItem ={({item: employees}, index)=>(
                            <View style={styles.quest}>
                                <Text>Nome: {employees.name}</Text>
                                <Text>Função: {employees.occupation}</Text>
                                <TextInput
                                style={styles.input}                                                                
                                placeholder="Digite as horas trabalhadas pelo funcionário"
                                keyboardType="numeric"
                            />                                                                                                                 
                            </View>                            
                        )}
                        
                        />
                        
                        <View style={styles.quest}>
                            <Text>  OBS</Text>
                            <TextInput
                                style={styles.input}                                                                
                                placeholder="Utilize caso haja alguma observação a ser feita"                                
                            />
                        </View>            

                                                                                                                                                 
                        <View style={styles.input}>
                            <Button 
                                onPress = {()=>faztudo()}                                          
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