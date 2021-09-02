import React, {useCallback, useEffect, useState } from 'react';
import {CheckBox, View, Image, Text, KeyboardAvoidingView, Platform, ScrollView, FlatList, TextInput} from 'react-native';
import {Button, Switch } from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import SelectPicker from 'react-native-form-select-picker'; 
import logoMip from '../../assets/logoMIP.png';
import styles from './styles';


export default function Response(){

    useEffect(()=>{
        getRdc();  
        getData();                              
        getArea();
        getQuest();
        getObra()
        getEmployee(); 
             
    },employees);

    //////////////////////////constantes///////////////////////////
    
    const [obs, setObs] = useState('');
    const [flag, setFlag] = useState(0);
    const [flag2, setFlag2] = useState(0);
    const [flag3, setFlag3] = useState(0);
    const [flag4, setFlag4] = useState(0);
    const [flag5, setFlag5] = useState(0);
    const [leader, setLeader] = useState('');
    const [area, setArea] = useState([]);  
    const [obra, setObra] = useState('');       
    const [cod,setcod]= useState('') 
    const [rain, setrain] = useState("Não houve");
    const [redalert, setredalert] = useState("Não houve");       
    const [quest, setQuest] = useState([]); 
    const [rdc,setRdc] = useState([]);  
    const [employees, setEmployees] = useState([]);  
    const [responseQuest, setResponse] = useState([])     
    const options = ["Manhã ", "Tarde ", "Não houve "];
    const [atividadeFilter, setAtividadeFilter] = useState([]);
   
    const [isSelected, setSelection]  = useState(
        new Array(50).fill(false)
    );
    const [atividadeText, setAtividadeText] = useState(
        new Array(50).fill('')
    );
    const [funcionarioText, setFuncionarioText] = useState(
        new Array(50).fill('')
    );
    const [data, setData]= useState('')
    

    /////////////////////////vairiáveis para atualizar Data////////////////////    
    
    const [area_activity1,setarea_activity1]= useState('')
    const [cod_activity1,setcod_activity1]= useState('')
    const [description_activity1,setdescription_activity1]= useState('')
    const [report1,setreport1]= useState('')
    const [area_activity2,setarea_activity2]= useState('')
    const [cod_activity2,setcod_activity2]= useState('')
    const [description_activity2,setdescription_activity2]= useState('')
    const [report2,setreport2]= useState('')
    const [area_activity3,setarea_activity3]= useState('')
    const [cod_activity3,setcod_activity3]= useState('')
    const [description_activity3,setdescription_activity3]= useState('')
    const [report3,setreport3]= useState('')
    const [area_activity4,setarea_activity4]= useState('')
    const [cod_activity4,setcod_activity4]= useState('')
    const [description_activity4,setdescription_activity4]= useState('')
    const [report4,setreport4]= useState('')
    const [area_activity5,setarea_activity5]= useState('')
    const [cod_activity5,setcod_activity5]= useState('')
    const [description_activity5,setdescription_activity5]= useState('')
    const [report5,setreport5]= useState('')
    const [area_activity6,setarea_activity6]= useState('')
    const [cod_activity6,setcod_activity6]= useState('')
    const [description_activity6,setdescription_activity6]= useState('')
    const [report6,setreport6]= useState('')
    const [name_employee1,setname_employee1]= useState('')
    const [cod_employee1,setcod_employee1]= useState('')
    const [occupation_employee1,setoccupation_employee1]= useState('')
    const [hr_1_ativ,sethr_1_ativ]= useState('')
    const [name_employee2,setname_employee2]= useState('')
    const [cod_employee2,setcod_employee2]= useState('')
    const [occupation_employee2,setoccupation_employee2]= useState('')
    const [hr_2_ativ,sethr_2_ativ]= useState('')
    const [name_employee3,setname_employee3]= useState('')
    const [cod_employee3,setcod_employee3]= useState('')
    const [occupation_employee3,setoccupation_employee3]= useState('')
    const [hr_3_ativ,sethr_3_ativ]= useState('')
    const [name_employee4,setname_employee4]= useState('')
    const [cod_employee4,setcod_employee4]= useState('')
    const [occupation_employee4,setoccupation_employee4]= useState('')
    const [hr_4_ativ,sethr_4_ativ]= useState('')
    const [name_employee5,setname_employee5]= useState('')
    const [cod_employee5,setcod_employee5]= useState('')
    const [occupation_employee5,setoccupation_employee5]= useState('')
    const [hr_5_ativ,sethr_5_ativ]= useState('')
    const [name_employee6,setname_employee6]= useState('')
    const [cod_employee6,setcod_employee6]= useState('')
    const [occupation_employee6,setoccupation_employee6]= useState('')
    const [hr_6_ativ,sethr_6_ativ]= useState('')
    const [name_employee7,setname_employee7]= useState('')
    const [cod_employee7,setcod_employee7]= useState('')
    const [occupation_employee7,setoccupation_employee7]= useState('')
    const [hr_7_ativ,sethr_7_ativ]= useState('')
    const [name_employee8,setname_employee8]= useState('')
    const [cod_employee8,setcod_employee8]= useState('')
    const [occupation_employee8,setoccupation_employee8]= useState('')
    const [hr_8_ativ,sethr_8_ativ]= useState('')
    const [name_employee9,setname_employee9]= useState('')
    const [cod_employee9,setcod_employee9]= useState('')
    const [occupation_employee9,setoccupation_employee9]= useState('')
    const [hr_9_ativ,sethr_9_ativ]= useState('')
    const [name_employee10,setname_employee10]= useState('')
    const [cod_employee10,setcod_employee10]= useState('')
    const [occupation_employee10,setoccupation_employee10]= useState('')
    const [hr_10_ativ,sethr_10_ativ]= useState('')
    const [name_employee11,setname_employee11]= useState('')
    const [cod_employee11,setcod_employee11]= useState('')
    const [occupation_employee11,setoccupation_employee11]= useState('')
    const [hr_11_ativ,sethr_11_ativ]= useState('')
    const [name_employee12,setname_employee12]= useState('')
    const [cod_employee12,setcod_employee12]= useState('')
    const [occupation_employee12,setoccupation_employee12]= useState('')
    const [hr_12_ativ,sethr_12_ativ]= useState('')
    const [name_employee13,setname_employee13]= useState('')
    const [cod_employee13,setcod_employee13]= useState('')
    const [occupation_employee13,setoccupation_employee13]= useState('')
    const [hr_13_ativ,sethr_13_ativ]= useState('')
    const [name_employee14,setname_employee14]= useState('')
    const [cod_employee14,setcod_employee14]= useState('')
    const [occupation_employee14,setoccupation_employee14]= useState('')
    const [hr_14_ativ,sethr_14_ativ]= useState('')
    const [name_employee15,setname_employee15]= useState('')
    const [cod_employee15,setcod_employee15]= useState('')
    const [occupation_employee15,setoccupation_employee15]= useState('')
    const [hr_15_ativ,sethr_15_ativ]= useState('')
   

    



    //////////////////////////funções///////////////////////////
    async function carregaData(){
        if(responseQuest.length ===0){
            alert("Você não marcou nenhuma atividade")
        }else if(responseQuest.length > 6){
            alert("O numero máximo de atividades que podem ser selecionadas é 6")
        }else{
            await setaAtividade();
            await salvaDados();
        }
    }

    async function sendBd(){                                                 
        try {
            await api.post('response', data, {
                headers:{
                    authorization: leader
                    }
                }   
            );
            alert('RDC enviado corretamente ao Banco de dados! Você será redirecionado a página de Login!')
            navigateToLogin();         
        }catch (err){
            alert('erro no envio, tente novamente!')
        }

        
    }  
    
    async function setaAtividade(){
        if(flag5 === 0){  
            setFlag5(1) 
            alert('Clique em salvar novamente para confirmar os dados!')                           
            for(let i=0; i<responseQuest.length;i++){
                if(i===0){
                setarea_activity1(responseQuest[i].area)
                setcod_activity1(responseQuest[i].cod)   
                setdescription_activity1(responseQuest[i].description)
                setreport1(atividadeFilter[0])
                }else if(i===1){
                setarea_activity2(responseQuest[i].area)
                setcod_activity2(responseQuest[i].cod)   
                setdescription_activity2(responseQuest[i].description)
                setreport2(atividadeFilter[1])                
                }else if(i===2){
                setarea_activity3(responseQuest[i].area)                
                setcod_activity3(responseQuest[i].cod)   
                setdescription_activity3(responseQuest[i].description)
                setreport3(atividadeFilter[2])
                }else if(i===3){
                setarea_activity4(responseQuest[i].area)                
                setcod_activity4(responseQuest[i].cod)   
                setdescription_activity4(responseQuest[i].description)
                setreport4(atividadeFilter[3])
                }else if(i===4){
                setarea_activity5(responseQuest[i].area)                
                setcod_activity5(responseQuest[i].cod)   
                setdescription_activity5(responseQuest[i].description)
                setreport5(atividadeFilter[4])
                }else if(i===5){
                setarea_activity6(responseQuest[i].area)                
                setcod_activity6(responseQuest[i].cod)   
                setdescription_activity6(responseQuest[i].description)
                setreport6(atividadeFilter[5])
                }
            }
            for(let j=0; j<employees.length;j++){
                if(j===0){
                setname_employee1(employees[j].name)
                setcod_employee1(employees[j].cod)
                setoccupation_employee1(employees[j].occupation)
                sethr_1_ativ(funcionarioText[0])                
                }else if(j===1){
                setname_employee2(employees[j].name)
                setcod_employee2(employees[j].cod)
                setoccupation_employee2(employees[j].occupation)
                sethr_2_ativ(funcionarioText[1])
                }else if(j===2){
                setname_employee3(employees[j].name)
                setcod_employee3(employees[j].cod)
                setoccupation_employee3(employees[j].occupation)
                sethr_3_ativ(funcionarioText[2])
                }else if(j===3){
                setname_employee4(employees[j].name)
                setcod_employee4(employees[j].cod)
                setoccupation_employee4(employees[j].occupation)
                sethr_4_ativ(funcionarioText[3])
                }else if(j===4){
                setname_employee5(employees[j].name)
                setcod_employee5(employees[j].cod)
                setoccupation_employee5(employees[j].occupation)
                sethr_5_ativ(funcionarioText[4])
                }else if(j===5){
                setname_employee6(employees[j].name)
                setcod_employee6(employees[j].cod)
                setoccupation_employee6(employees[j].occupation)
                sethr_6_ativ(funcionarioText[5])
                }else if(j===6){
                setname_employee7(employees[j].name)
                setcod_employee7(employees[j].cod)
                setoccupation_employee7(employees[j].occupation)
                sethr_7_ativ(funcionarioText[6])
                }else if(j===7){
                setname_employee8(employees[j].name)
                setcod_employee8(employees[j].cod)
                setoccupation_employee8(employees[j].occupation)
                sethr_8_ativ(funcionarioText[7])
                }else if(j===8){
                setname_employee9(employees[j].name)
                setcod_employee9(employees[j].cod)
                setoccupation_employee9(employees[j].occupation)
                sethr_9_ativ(funcionarioText[8])
                }else if(j===9){
                setname_employee10(employees[j].name)
                setcod_employee10(employees[j].cod)
                setoccupation_employee10(employees[j].occupation)
                sethr_10_ativ(funcionarioText[9])
                }else if(j===10){
                setname_employee11(employees[j].name)
                setcod_employee11(employees[j].cod)
                setoccupation_employee11(employees[j].occupation)
                sethr_11_ativ(funcionarioText[10])
                }else if(j===11){
                setname_employee12(employees[j].name)
                setcod_employee12(employees[j].cod)
                setoccupation_employee12(employees[j].occupation)
                sethr_12_ativ(funcionarioText[11])
                }else if(j===12){
                setname_employee13(employees[j].name)
                setcod_employee13(employees[j].cod)
                setoccupation_employee13(employees[j].occupation)
                sethr_13_ativ(funcionarioText[12])
                }else if(j===13){
                setname_employee14(employees[j].name)
                setcod_employee14(employees[j].cod)
                setoccupation_employee14(employees[j].occupation)
                sethr_14_ativ(funcionarioText[13])
                }else if(j===14){
                setname_employee15(employees[j].name)
                setcod_employee15(employees[j].cod)
                setoccupation_employee15(employees[j].occupation)
                sethr_15_ativ(funcionarioText[14])
                }
            } 
        }else{  
            setFlag5(0)          
            alert('Dados salvos, clique em enviar para efetuar o envio dos dados ao Banco de Dados!')                   
            for(let i=0; i<responseQuest.length;i++){
                if(i===0){
                setarea_activity1(responseQuest[i].area)
                setcod_activity1(responseQuest[i].cod)   
                setdescription_activity1(responseQuest[i].description)
                setreport1(atividadeFilter[0])
                }else if(i===1){
                setarea_activity2(responseQuest[i].area)
                setcod_activity2(responseQuest[i].cod)   
                setdescription_activity2(responseQuest[i].description)
                setreport2(atividadeFilter[1])                
                }else if(i===2){
                setarea_activity3(responseQuest[i].area)                
                setcod_activity3(responseQuest[i].cod)   
                setdescription_activity3(responseQuest[i].description)
                setreport3(atividadeFilter[2])
                }else if(i===3){
                setarea_activity4(responseQuest[i].area)                
                setcod_activity4(responseQuest[i].cod)   
                setdescription_activity4(responseQuest[i].description)
                setreport4(atividadeFilter[3])
                }else if(i===4){
                setarea_activity5(responseQuest[i].area)                
                setcod_activity5(responseQuest[i].cod)   
                setdescription_activity5(responseQuest[i].description)
                setreport5(atividadeFilter[4])
                }else if(i===5){
                setarea_activity6(responseQuest[i].area)                
                setcod_activity6(responseQuest[i].cod)   
                setdescription_activity6(responseQuest[i].description)
                setreport6(atividadeFilter[5])
                }
            }
            for(let j=0; j<employees.length;j++){
                if(j===0){
                setname_employee1(employees[j].name)
                setcod_employee1(employees[j].cod)
                setoccupation_employee1(employees[j].occupation)
                sethr_1_ativ(funcionarioText[0])                
                }else if(j===1){
                setname_employee2(employees[j].name)
                setcod_employee2(employees[j].cod)
                setoccupation_employee2(employees[j].occupation)
                sethr_2_ativ(funcionarioText[1])
                }else if(j===2){
                setname_employee3(employees[j].name)
                setcod_employee3(employees[j].cod)
                setoccupation_employee3(employees[j].occupation)
                sethr_3_ativ(funcionarioText[2])
                }else if(j===3){
                setname_employee4(employees[j].name)
                setcod_employee4(employees[j].cod)
                setoccupation_employee4(employees[j].occupation)
                sethr_4_ativ(funcionarioText[3])
                }else if(j===4){
                setname_employee5(employees[j].name)
                setcod_employee5(employees[j].cod)
                setoccupation_employee5(employees[j].occupation)
                sethr_5_ativ(funcionarioText[4])
                }else if(j===5){
                setname_employee6(employees[j].name)
                setcod_employee6(employees[j].cod)
                setoccupation_employee6(employees[j].occupation)
                sethr_6_ativ(funcionarioText[5])
                }else if(j===6){
                setname_employee7(employees[j].name)
                setcod_employee7(employees[j].cod)
                setoccupation_employee7(employees[j].occupation)
                sethr_7_ativ(funcionarioText[6])
                }else if(j===7){
                setname_employee8(employees[j].name)
                setcod_employee8(employees[j].cod)
                setoccupation_employee8(employees[j].occupation)
                sethr_8_ativ(funcionarioText[7])
                }else if(j===8){
                setname_employee9(employees[j].name)
                setcod_employee9(employees[j].cod)
                setoccupation_employee9(employees[j].occupation)
                sethr_9_ativ(funcionarioText[8])
                }else if(j===9){
                setname_employee10(employees[j].name)
                setcod_employee10(employees[j].cod)
                setoccupation_employee10(employees[j].occupation)
                sethr_10_ativ(funcionarioText[9])
                }else if(j===10){
                setname_employee11(employees[j].name)
                setcod_employee11(employees[j].cod)
                setoccupation_employee11(employees[j].occupation)
                sethr_11_ativ(funcionarioText[10])
                }else if(j===11){
                setname_employee12(employees[j].name)
                setcod_employee12(employees[j].cod)
                setoccupation_employee12(employees[j].occupation)
                sethr_12_ativ(funcionarioText[11])
                }else if(j===12){
                setname_employee13(employees[j].name)
                setcod_employee13(employees[j].cod)
                setoccupation_employee13(employees[j].occupation)
                sethr_13_ativ(funcionarioText[12])
                }else if(j===13){
                setname_employee14(employees[j].name)
                setcod_employee14(employees[j].cod)
                setoccupation_employee14(employees[j].occupation)
                sethr_14_ativ(funcionarioText[13])
                }else if(j===14){
                setname_employee15(employees[j].name)
                setcod_employee15(employees[j].cod)
                setoccupation_employee15(employees[j].occupation)
                sethr_15_ativ(funcionarioText[14])
                }
            } 
        }                   
    }
    async function salvaDados(){            
        await setData({
            area,
            cod,   
            obra,
            rain,
            redalert,
            area_activity1,
            cod_activity1,
            description_activity1,
            report1,
            area_activity2,
            cod_activity2,
            description_activity2,
            report2,
            area_activity3,
            cod_activity3,
            description_activity3,
            report3,
            area_activity4,
            cod_activity4,
            description_activity4,
            report4,
            area_activity5,
            cod_activity5,
            description_activity5,
            report5,
            area_activity6,
            cod_activity6,
            description_activity6,
            report6,
            name_employee1,
            cod_employee1,
            occupation_employee1,
            hr_1_ativ,
            name_employee2,
            cod_employee2,
            occupation_employee2,
            hr_2_ativ,
            name_employee3,
            cod_employee3,
            occupation_employee3,
            hr_3_ativ,
            name_employee4,
            cod_employee4,
            occupation_employee4,
            hr_4_ativ,
            name_employee5,
            cod_employee5,
            occupation_employee5,
            hr_5_ativ,
            name_employee6,
            cod_employee6,
            occupation_employee6,
            hr_6_ativ,
            name_employee7,
            cod_employee7,
            occupation_employee7,
            hr_7_ativ,
            name_employee8,
            cod_employee8,
            occupation_employee8,
            hr_8_ativ,
            name_employee9,
            cod_employee9,
            occupation_employee9,
            hr_9_ativ,
            name_employee10,
            cod_employee10,
            occupation_employee10,
            hr_10_ativ,
            name_employee11,
            cod_employee11,
            occupation_employee11,
            hr_11_ativ,
            name_employee12,
            cod_employee12,
            occupation_employee12,
            hr_12_ativ,
            name_employee13,
            cod_employee13,
            occupation_employee13,
            hr_13_ativ,
            name_employee14,
            cod_employee14,
            occupation_employee14,
            hr_14_ativ,
            name_employee15,
            cod_employee15,
            occupation_employee15,
            hr_15_ativ,
            obs,
        })
        
    }

    async function handleOnChange (idx){                
        const checked = isSelected.map((item, index) =>
            index === quest.findIndex(quest => idx.description === quest.description) ? !item : item
            );
        setSelection(checked);  
       
        const questResponse = quest.map((item, index) =>
            checked[index] === false ? '' : item
            );
        const questfilter = questResponse.filter(function(i){return i})    
        setResponse(questfilter)                                  
    }

    async function onChangeAtividade(text, idx){        
        const atividadeResponse = atividadeText.map((item, index) => 
        index === idx ? text : item
        );        
        setAtividadeText(atividadeResponse);
        filtraatividade(atividadeResponse);  
             
    }

    async function filtraatividade(atividadeResponse){
        const atividadefiltrada = atividadeResponse.filter(function(i){return i})      
        setAtividadeFilter(atividadefiltrada);          
    }

    async function onChangeFuncionario(text, idx){          
        const funcionarioResponse = funcionarioText.map((item, index) => 
        index === idx ? text : item
        );           
        setFuncionarioText(funcionarioResponse);                                          
    }
    async function getData(){        
        try {
            const valueData = await AsyncStorage.getItem('LeaderName')
            if(valueData !== null) {
                setLeader(valueData.replace(/\"/g, ""));          
            }          
        }catch(e) {
            alert('erro ao logar');
            logout();
        }        
      }
          
    async function getArea(){  
        if(area.length===0 && flag4 === 0 && leader){
            await setFlag4(1);
            try{
                const response = await api.post('area', {leader});                                       
                await setArea(response.data)                                                                                          
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
            setAtividadeText(
                new Array(quest.length).fill('')
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
        }else if(employees.length > 15 && flag3 === 0){
            alert("Limite máximo é de 15 funcionarios para cada lider nesta versão, você será redirecionado à página de login! Entre em contato com o administrador do sistema informando o erro")
            navigateToLogin();
            setFlag3(1);
        }  
        else if(flag2===0){
            setFuncionarioText(
                new Array(employees.length).fill('')
              );                    
            setFlag2(1);
        }                 
    }

    async function getRdc(){  
        if(rdc.length === 0){
            await api.get('rdcsresponse',{
                headers:{
                    leader : leader
                    }
            }).then(response => {setRdc(response.data);})                                     
        }              
    }
    async function getObra(){
        if(obra === '' && rdc.length !== 0){
            setObra(rdc[0].obra.toString())
            setcod(rdc[0].cod.toString())
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
                <Image style={styles.image} source={logoMip}/>                
            </View>  
            <View style={styles.header} >                                               
                <View style={styles.wellcome}>                                                    
                    <View>
                        <Text style={styles.title}>Bem-vindo(a) {leader} </Text>
                        <Text style={styles.title}>Obra: {obra} </Text>
                    </View> 
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
                </View>                                  
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding":"height"}
                style={styles.container}
                keyboardVerticalOffset={150}
            >
                <ScrollView style ={{width: "100%"}} showsVerticalScrollIndicator ={false} >                    
                    <View style={styles.body}> 
                        <Text style={styles.title2}>Alertas</Text>           
                        <View style={styles.quest}>
                            <Text style={styles.title}>Chuva</Text> 
                            <SelectPicker    
                                placeholder={"clique para responder"}
                                placeholderStyle={{color:"black"}}
                                doneButtonText={"escolhido"}                                
                                onValueChange={(value) => {                                    
                                    setrain(value);
                                }}
                                rain={rain}
                            >                                
                                {Object.values(options).map((val,index) => (
                                    <SelectPicker.Item label={val} value={val} key={val} />
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
                                setredalert(value);
                                }}
                                redalert={redalert}
                            >                                
                                {Object.values(options).map((val, index) => (
                                    <SelectPicker.Item label={val} value={val} key={val} />
                                ))}
                            </SelectPicker>
                            
                        </View>
                        <Text style={styles.title2}>Atividades</Text>
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
                                    onChangeText={text=> onChangeAtividade(text, index)}
                                    value={atividadeText[index]}                                                                                                     
                                />                                                
                            </View>
                                                        
                        )}
                        
                        />
                        <Text style={styles.title2}>Funcionários</Text>
                        <FlatList                        
                        data={employees}                                                          
                        keyExtractor = {employees => String(employees.name)}                                                
                        showsVerticalScrollIndicator = {false}                        
                        renderItem ={({item: employees, index})=>(
                            <View style={styles.quest}>
                                <Text>Nome: {employees.name}</Text>
                                <Text>Função: {employees.occupation}</Text>
                                <TextInput
                                defaultValue = {'0'}
                                style={styles.input}                                                                
                                placeholder="Digite as horas trabalhadas pelo funcionário"
                                keyboardType="numeric"  
                                onChangeText={text=> onChangeFuncionario(text, index)}
                                value={funcionarioText[index]}                              
                            />      
                                <Text>Digite acima as horas trabalhadas no dia.</Text>                                                                                                           
                            </View>                            
                        )}
                        
                        />
                        <Text style={styles.title2}>Observação</Text>
                        <View style={styles.quest}>                            
                            <TextInput
                                style={styles.input}                                                                
                                placeholder="Utilize caso haja alguma observação a ser feita"                                
                                onChangeText={obs => setObs(obs)}
                                defaultValue={obs}
                            />
                        </View>            

                                                                                                                                                 
                        <View style={styles.input}>
                            <Button 
                                onPress = {()=>carregaData()}                                          
                                title = "Salvar"
                                type = {"clear"}
                                iconRight = {true}
                                icon={{
                                    name: "save",
                                    size: 30,
                                    color: "#faad64"
                                }}
                            />                            
                        </View>
                        <View style={styles.input}>
                            <Button 
                                onPress = {()=> sendBd()}                                          
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