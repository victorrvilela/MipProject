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
//
//fazer DATA receber os dados corretamente
//já está feito, falta ajusta data -- enviar para backend
//colocar tudo online{backend, frontend, criar apk}
//ser feliz
//tratar para máximo de 6 atividades
//tratar para máximo de 15 funcionários
///////////////////////////////////////////////////////////////////
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
    const [leader, setLeader] = useState('');
    const [area, setArea] = useState('');  
    const [obra, setObra] = useState('');       
    const [chuva_selected, setchuva_Selected] = useState("Não houve");
    const [redalert_selected, setredalert_Selected] = useState("Não houve");       
    const [quest, setQuest] = useState([]); 
    const [rdc,setRdc] = useState([]);  
    const [employees, setEmployees] = useState([]);  
    const [responseQuest, setResponse] = useState([])     
    const options = ["Manhã ", "Tarde ", "Não houve "];
    const [isSelected, setSelection]  = useState(
        new Array(50).fill(false)
    );
    const [atividadeText, setAtividadeText] = useState(
        new Array(50).fill('')
    );
    const [funcionarioText, setFuncionarioText] = useState(
        new Array(50).fill('0')
    );
    const [data, setData]= useState(
        {            
            "area": "civil",
            "cod": 2,
            "obra": "Ouro branco",
            "name_leader": "Julio Cezar Coelho",         
            "rain": "Manhâ",
            "redalert": "Manhâ",
            "area_activity1": "civil",
            "cod_activity1": 1245,
            "description_activity1": "montagem de forma",
            "report1": "descrição atividade",
            "area_activity2": null,
            "cod_activity2": null,
            "description_activity2": null,
            "report2": null,
            "area_activity3": null,
            "cod_activity3": null,
            "description_activity3": null,
            "report3": null,
            "area_activity4": null,
            "cod_activity4": null,
            "description_activity4": null,
            "report4": null,
            "area_activity5": null,
            "cod_activity5": null,
            "description_activity5": null,
            "report5": null,
            "area_activity6": null,
            "cod_activity6": null,
            "description_activity6": null,
            "report6": null,
            "name_employee1": "jose",
            "cod_employee1": 54321,
            "occupation_employee1": "pedreiro",
            "hr_1_ativ": 10,
            "name_employee2": null,
            "cod_employee2": null,
            "occupation_employee2": null,
            "hr_2_ativ": null,
            "name_employee3": null,
            "cod_employee3": null,
            "occupation_employee3": null,
            "hr_3_ativ": null,
            "name_employee4": null,
            "cod_employee4": null,
            "occupation_employee4": null,
            "hr_4_ativ": null,
            "name_employee5": null,
            "cod_employee5": null,
            "occupation_employee5": null,
            "hr_5_ativ": null,
            "name_employee6": null,
            "cod_employee6": null,
            "occupation_employee6": null,
            "hr_6_ativ": null,
            "name_employee7": null,
            "cod_employee7": null,
            "occupation_employee7": null,
            "hr_7_ativ": null,
            "name_employee8": null,
            "cod_employee8": null,
            "occupation_employee8": null,
            "hr_8_ativ": null,
            "name_employee9": null,
            "cod_employee9": null,
            "occupation_employee9": null,
            "hr_9_ativ": null,
            "name_employee10": null,
            "cod_employee10": null,
            "occupation_employee10": null,
            "hr_10_ativ": null,
            "name_employee11": null,
            "cod_employee11": null,
            "occupation_employee11": null,
            "hr_11_ativ": null,
            "name_employee12": null,
            "cod_employee12": null,
            "occupation_employee12": null,
            "hr_12_ativ": null,
            "name_employee13": null,
            "cod_employee13": null,
            "occupation_employee13": null,
            "hr_13_ativ": null,
            "name_employee14": null,
            "cod_employee14": null,
            "occupation_employee14": null,
            "hr_14_ativ": null,
            "name_employee15": null,
            "cod_employee15": null,
            "occupation_employee15": null,
            "hr_15_ativ": null,
            "obs": "observação final do RDC"
          }
    )
    
    //////////////////////////funções///////////////////////////

    async function faztudo(){
        setData({
            area: chuva_selected
        })
        console.log(data)

        if(responseQuest.length ===0){
            alert("Você não marcou nenhuma atividade")
        }else if(responseQuest.length > 6){
            alert("O numero máximo de atividades selecionadas é 6")
        }else{
            alert("enviou BD")
            /*console.log(chuva_selected)
            console.log(redalert_selected)
            console.log(responseQuest)              
            console.log(employees)   
            console.log(rdc)       
            console.log(atividadeText);
            console.log(funcionarioText);
            console.log(obs)
            try {
                await (await api.post('response', data, {
                    headers:{
                        authorization : leader
                        }
                    }   
                ));
                                
            }catch (err){
                alert('erro no cadastro, tente novamente!')
            }*/
        }          
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
    }
     
    async function onChangeFuncionario(text, idx){          
        const funcionarioResponse = funcionarioText.map((item, index) => 
        index === idx ? text : item
        );
        
        console.log(funcionarioResponse);
        setFuncionarioText(funcionarioResponse);                               
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
                new Array(employees.length).fill('0')
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
            setObra(rdc[0].obra)
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
                                <Text style={styles.title}>Obra: {obra} </Text>
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
                                    onChangeText={text=> onChangeAtividade(text, index)}
                                    value={atividadeText[index]}                                                                                                     
                                />                                                
                            </View>
                                                        
                        )}
                        
                        />
                        <Text style={styles.title}>Funcionários</Text>
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
                        
                        <View style={styles.quest}>
                            <Text>  OBS</Text>
                            <TextInput
                                style={styles.input}                                                                
                                placeholder="Utilize caso haja alguma observação a ser feita"                                
                                onChangeText={obs => setObs(obs)}
                                defaultValue={obs}
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