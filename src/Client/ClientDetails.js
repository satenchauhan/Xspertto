import React,{useEffect,useContext} from 'react';
import {SafeAreaView, Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ClientTabsButton from './ClientTabsButton';
import TagBox from './TagBox';
import { SuperContext } from '../context/ContextProvider';


const  ClientDetails= (props) => {
    const {setTabColor,tabColor}= useContext(SuperContext);
    useEffect(() => {
        setTabColor('#23BF7E');
    }, [])
    return (
        <View style={ClientStyle.mainContainer}>
            <ClientTabsButton showScreen={props.showScreen} />
            <View style={[ClientStyle.cliectSection]}>
                <View style={{flex:1}}>
                    <View style={[ClientStyle.clientBox, {marginTop:8, marginRight:10}]}>
                        <View style={ClientStyle.clientBox}>
                            <Icon name="building"  color={'#051E75'}  size={18}  />
                            <Text style={[ClientStyle.cltName,{marginLeft:10}]}>Daniel Garden Center</Text>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'flex-start', marginTop:7}}>
                            <View style={{width:61}}><Text>{''}</Text></View>
                            <TagBox style={{backgroundColor:'rgba(106, 16, 176, 0.5)'}}>{'Client'}</TagBox>
                            <View ><Text>{' '}</Text></View>
                        </View>
                    </View>
                    <View style={[ClientStyle.clientBox, {marginTop:10, marginRight:10}]}>
                        <View style={ClientStyle.clientBox}>
                            <Icon name="user"  color={'#051E75'}  size={18}  />
                            <Text style={[ClientStyle.Txt,{marginLeft:10}]}>Daniel </Text>
                        </View>
                        <View style={ClientStyle.clientBox}>
                            <Text style={ClientStyle.Txt}>Balance:</Text>
                            <Text style={[ClientStyle.Txt,{marginLeft:5}]}><Text>$</Text>1455.00</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}


export default ClientDetails;

const ClientStyle = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#fff',
        paddingTop:-10, 
        paddingLeft:2, 
        paddingRight:2
    },
    cliectSection:{
        flex:1,
        marginTop:-2,
        paddingTop:15,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:15,
        borderWidth:2, 
        borderColor:'#B4B1B1', 
        borderBottomLeftRadius:5 ,
        borderBottomRightRadius:5 ,
        borderTopWidth:0,   
    },
    clientBox:{
        flexDirection:'row',
        alignItems:'flex-start', 
        justifyContent:'space-between'
    },
    cltName:{
        fontFamily:'Roboto-Bold',
        // fontWeight:'700',
        fontSize:14, 
        marginLeft:10, 
        lineHeight:22, 
    },
    Txt:{
        fontFamily:'RobotoCondensed-Regular',
        fontSize:16,
        color:"#000000",
        lineHeight:20
    },
    flag:{
      backgroundColor:'rgba(106, 16, 176, 0.5)', 
      borderColor:'rgba(106, 16, 176, 0.5)'
    }
});
