import React from 'react'
import {Text, View, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MyICON from 'react-native-vector-icons/Ionicons';
import SecStyles from './SectionStyle';


const InvoiceSection = ({children}) => {

    return (
        <View style={SecStyles.columnBox}>
            <View style={[SecStyles.infoBox,{height:60}]}>
                <View style={[SecStyles.dateBox,{height:60}]}>
                    <Text style={SecStyles.dateTxt}>{children[0]}</Text>
                </View>
                <View style={{flex:1, alignItems:'flex-start', justifyContent:'flex-start'}}>
                    <View style={[SecStyles.secBox, {paddingTop:3}]}>
                        <MyICON name="md-location-outline" size={18} />
                        <Text style={[SecStyles.infoTxt]}>{children[3]}</Text>
                    </View> 
                    <View style={[billStyle.billBox,{paddingLeft:3}]}>
                        <View style={[SecStyles.secBox,{marginTop:4}]}>
                            <MaterialIcons name="construction" size={18} color={'rgba(50, 51, 56, 1)'}/>
                            <Text style={[SecStyles.infoTxt,{paddingRight:3}]}>{children[1]}</Text>
                            <View style={billStyle.midLine}></View>
                        </View>
                        <View style={[SecStyles.secBox,billStyle.balanceBox,{marginTop:4}]}>
                            <Text style={[SecStyles.infoTxt,billStyle.balanceTxt]}>$ {children[2]}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default InvoiceSection;

const billStyle = StyleSheet.create({
    billBox:{
        flex:1,
        flexDirection:'row',
        flexWrap: 'wrap', 
        alignItems:'flex-start',
        justifyContent:'center', 
        // paddingTop:8
    },
    midLine:{
        height:20,
        borderWidth:1,
        borderColor:'#1C1C1C', 
        marginHorizontal:3
    },
    balanceBox:{
        flex:1, 
        alignItems:'flex-end', 
        justifyContent:'flex-end'
    },
    balanceTxt:{
        fontFamily:'RobotoCondensed-Bold',
        lineHeight:16,
        paddingRight:3,
    }
});



