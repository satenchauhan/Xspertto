import React,{useEffect, useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../../components/common/colors';
import clientsDatas from './ClientDatas';
import { SuperContext } from '../../../context/ContextProvider';
import FlagLeft from '../../../components/common/FlagLeft';
import Notfound from '../../../components/common/NotFound';



const  search = "search";

const  FilterContact  = (props) =>{
    const {selectContactKey,setTabScreen} = useContext(SuperContext);

    const data = clientsDatas.filter((item) => {
        return item.type === selectContactKey;
        
    });
    const wd = Dimensions.get('screen').height*65/100;
     
    const CardData = data.map((item, i) => {
        return(
            <View key={i} style={{flex:1,marginTop:10,marginBottom:10}}>
                <TouchableOpacity  style={Styles.cardBox} onPress={() => navigation.navigate("Client",{myname:'saten'})}>
                    <View style={{flexDirection:'column', marginTop:5}}>
                        <View style={[Styles.infoBox, item.business === 'individual' ? {marginTop: 12} :{ marginTop: 0}]}>
                            <Icon name="user" style={{marginRight:10,color:colors.Dark}} size={18} />
                            <Text style={Styles.infoText2}>{item.name}</Text>
                        </View>
                        <View style={Styles.infoBox}>
                            {item.business !== 'individual' ?
                                <Icon name="building" style={{marginRight:10,color:colors.Dark}} size={18} />
                            :null}
                            <Text style={Styles.infoText2}>{item.business === 'individual' ? ' ' : item.business }</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <View style={[Styles.infoBox,{marginTop:18}]}></View>
                        <FlagLeft style={{backgroundColor:'red', borderColor:'red'}}>{item.type}</FlagLeft>
                    </View>
                </TouchableOpacity>
            </View>
        )
    })


    return (
        <View style={Styles.section}>
           <Text style={Styles.title}>{CardData.length < 1 ? "" : props.msg[0].toUpperCase() +  props.msg.substring(1)}</Text>
                {CardData.length < 1 ? 
                    <Notfound>{props.msg}</Notfound>
                : CardData}
        </View>
    )
}


const Styles = StyleSheet.create({
    outerBox:{
        backgroundColor:"#F5F5F5",  
        padding:1.5
    },
    section:{
        flex:1,
        alignSelf:'center',
        width:'98%',
        marginVertical:50, 
        // paddingLeft:5,
        // paddingRight:5,
    },
    title:{
        fontSize:20, 
        lineHeight:23.44, 
        fontWeight:'700',
        marginLeft:7
    },
    cardBox:{
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-between',
        height:67, 
        backgroundColor:'#FFFFFF',
        borderRadius:5, 
        paddingLeft:5,
        paddingRight:5,
        borderColor:'rgba(128, 128, 128, 0.8)', 
        borderWidth:1,
        shadowColor: "black",
        shadowOpacity: 0.5,
        elevation:5
    },
    infoBox:{
        flexDirection:'row', 
        alignItems:'flex-start',
        justifyContent:'flex-start',
        padding:5,
    },
    infoTxt:{
        fontFamily:'Roboto',
        fontSize:13, 
        fontWeight:'bold', 
        color:'#454D6A', 
        lineHeight:16.41
    },
    infoText2:{
        fontFamily:'Roboto', 
        fontSize:14, 
        fontWeight:'bold', 
        color:'#1C202D', 
        textTransform:'capitalize'
       
    },
})


export {FilterContact, search};








