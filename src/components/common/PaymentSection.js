import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Calen from 'react-native-vector-icons/FontAwesome';
import Paytm from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from './colors';

const PaymentSection = ({children}) => {
    return (
        <View style={Styles.columnBox}>
            <View style={Styles.infoBox}>
                <Text style={Styles.invoiceTxt}>{children[0]}</Text>
                <View style={Styles.secBox}>
                    <Calen name="calendar" size={19} style={[Styles.IconStyle,{marginLeft:2}]} /> 
                    <Text style={Styles.infoTxt}>{children[1]}</Text>
                </View>
                <View style={Styles.secBox}>
                    <Paytm name="question" size={22} style={[Styles.IconStyle,{marginLeft:0}]} />
                    <Text style={Styles.infoTxt}>{'Payment Type'} - {children[2]}</Text>
                </View>
                <View style={Styles.secBox}>
                    <Icon name="dollar-sign" size={19} style={{color:'black',margin:4}} />
                    <Text style={[Styles.infoTxt,{lineHeight:17,paddingLeft:5}]}>Paid: ${children[3]}</Text>
                </View>
                <View style={Styles.secBox}>
                    <MaterialIcons name="construction" size={19} style={{color:'black',margin:4}} />
                    <Text style={[Styles.infoTxt,{lineHeight:17,paddingLeft:5}]}>{children[4]}</Text>
                </View>
            </View>
        </View>
    )
}

export default PaymentSection;

const Styles = StyleSheet.create({
    columnBox:{
        // height:110, 
        backgroundColor:'#FFFFFF',
        paddingLeft:2,
        paddingRight:2,
        borderRadius:5, 
        borderColor:'rgba(128, 128, 128, 0.1)', 
        borderWidth:1,
        shadowColor: "rgba(128, 128, 128, 0.6)",
        shadowOffset: { width: -1, height: 1 },
        shadowOpacity: 0.8,
        elevation:5,  

    },
    infoBox:{
        flexDirection:'column', 
        alignItems:'flex-start',
        justifyContent:'flex-start',
        padding:5,
        marginLeft:5
    },
    infoTxt:{
        fontFamily:'Roboto',
        fontSize: 14, 
        fontWeight:'bold', 
        color:'#454D6A', 
        marginTop:5,
        marginLeft:5,
    },
    invoiceTxt:{
        marginBottom:5, 
        fontWeight:'bold', 
        color:'black'
    },
    secBox:{
        flexDirection:'row'
    },
    IconStyle:{ 
        color:colors.Dark,
        margin:5
    }  
})


