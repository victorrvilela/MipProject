import {StyleSheet} from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        alignItems: 'center',
        backgroundColor: '#faad64',
        
    },

    image:{        
        width:350,
        height:150,
        backgroundColor:'white',
        resizeMode: "center",        
    },

    title:{
        fontSize:20,
        alignItems: 'center',
    },

    header:{
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        
    },
    wellcome:{
        alignItems: 'center',  
        justifyContent: 'space-between',
        marginTop:20,      
    },

    input:{
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        width:'100%',
        borderRadius:20,
        marginTop:40,
    },
    

});