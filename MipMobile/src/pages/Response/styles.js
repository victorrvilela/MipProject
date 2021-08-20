import {StyleSheet} from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 10,
        alignItems: 'center',
        backgroundColor: '#faad64', 
            
    },

    image:{        
        width:50,
        height:50,
        borderRadius:10,
    },

    header:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-around',
        width:'100%'
    },

    wellcome:{
        width:'80%',
    },

    quest:{
        backgroundColor: '#FFFFFF', 
        borderRadius:20,
        width:300,
        marginTop:10,
        alignItems:'center', 
               
    },
  
    title:{
        fontWeight:'bold',
    },
    
    form:{
        paddingTop:10,            
    },
    
    body:{
        paddingTop:10,
        alignItems:'center',
    },
    
    input:{
        backgroundColor: '#FFFFFF',
        borderRadius:20,
        marginTop:10,
        height:50,
        alignItems:'center',
        textAlign:'center',
    },
    submitButtonText: {
        fontWeight: 'bold',
        color: 'black',
        borderRadius:20,
        borderColor: 'black',
        marginTop:10,
      },

})