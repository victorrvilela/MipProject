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
        width:300,
        borderRadius:20,
        marginTop:30,
    },

})