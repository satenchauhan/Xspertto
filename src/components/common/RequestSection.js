import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import MyICON from 'react-native-vector-icons/Ionicons';
import SecStyles from './SectionStyle';



const RequestSection = ({children}) => {

    return (
        <View style={[SecStyles.columnBox,{borderRadius:4}]}>
            <View style={[SecStyles.infoBox,{height:40}]}>
                <View style={[SecStyles.dateBox,{height:40,borderTopLeftRadius:4,borderBottomLeftRadius:4}]}>
                    <Text style={SecStyles.dateTxt}>{children[0]}</Text>
                </View>
                <View style={[SecStyles.secBox,{paddingLeft:8}]}>
                    <Feather name="inbox" size={18} /> 
                    <Text style={SecStyles.cltName}>{children[1]}</Text>
                </View>   
            </View>
        </View>
    )
}

export default RequestSection;

const qtStyle = StyleSheet.create({
    qtBox:{
        flex:1,
        flexDirection:'row',
        flexWrap: 'wrap', 
        alignItems:'flex-start',
        justifyContent:'center', 
        paddingTop:8
    }
});

