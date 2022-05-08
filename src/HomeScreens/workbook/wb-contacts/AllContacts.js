import React,{useState,useEffect,useRef} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../../components/common/colors';
import clientsDatas from './ClientDatas';
import FlagLeft from '../../../components/common/FlagLeft';

const contacts ="contacts";

const AllContacts = () => {
    const navigation = useNavigation();
    return (
        <View style={Styles.section}>
            <Text style={[Styles.title,{color:'#808490C9'}]}>Recent Contacts</Text>
            {clientsDatas.map((item, i) => 
                <View key={i} style={{flex:1,marginTop:10,marginBottom:2}}>
                    <TouchableOpacity  style={Styles.cardBox} onPress={() => navigation.navigate("Client", {myname:'saten'})}>
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
                            <FlagLeft>{item.type}</FlagLeft>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
            </View>
    )
}

export {AllContacts, contacts};

const Styles = StyleSheet.create({
    section:{
        flex:1,
        alignSelf:'center',
        width:'98%',
        marginTop:60, 
    },
    title:{
        fontFamily:'Roboto-Bold',
        fontSize:20, 
        lineHeight:23.44, 
        // fontWeight:'700',
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
        fontFamily:'Roboto-Bold',
        fontSize:13, 
        color:'#454D6A', 
        lineHeight:16.41
    },
    infoText2:{
        fontFamily:'Roboto-Bold', 
        fontSize:16, 
        color:'#1C202D', 
        textTransform:'capitalize'
    },

})
