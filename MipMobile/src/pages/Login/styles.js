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
        width:150,
        height:150,
        borderRadius:10,
    },
    title:{
        fontSize:20,
        alignItems: 'center',
    },

    header:{
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    wellcome:{
        alignItems: 'center',  
        justifyContent: 'space-between',
        marginTop:20,      
    },

    input:{
        backgroundColor: '#FFFFFF',
        width:300,
        borderRadius:20,
        marginTop:30,
    },
    

});