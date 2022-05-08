import React,{useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SuperContext } from '../../context/ContextProvider';


const Notfound = ({children}) => {
    const {selectContactKey} = useContext(SuperContext);
    if(selectContactKey==='Filter'){
        return (
            <View style={Styles.defaultBox}>
                <View style={{flex:1, alignItems:'center'}}>
                    <Text>{' '}</Text>
                </View>
            </View> 
        )
    }else{
        return (
            <View style={Styles.msgBox}>
                <View style={{flex:1, alignItems:'center', }}>
                    <Text style={Styles.TopMsg}>This client has no {children} </Text>
                    <Text style={Styles.msg}>This section will list the {children} made for this client</Text>
                </View>
            </View> 
        )
    }
}

export default Notfound;


const Styles = StyleSheet.create({
    defaultBox:{
            borderWidth:2,
            borderColor:'rgba(245, 245, 245, 0.8)',
            borderRadius:5,
            marginTop: 50,
            height: 300,
    },
    msgBox:{
        borderWidth:2,
        borderColor:'rgba(128,128,128, 0.5)',
        borderRadius:5,
        marginTop: 50,
        height: 250,
    },
    TopMsg:{
        marginTop:25, 
        lineHeight:50, 
        fontSize:25, 
        textAlign:'center', 
        color:'rgba(0,0,0,0.78)', 
        fontWeight:'bold',
    },
    msg:{
        fontSize:20, 
        textAlign:'center', 
        color:'rgba(0,0,0,0.6)', 
        fontStyle:'italic', 
        paddingHorizontal:10
    }
})
