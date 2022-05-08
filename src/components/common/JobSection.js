import React from 'react'
import {Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MyICON from 'react-native-vector-icons/Ionicons';
import SecStyles from './SectionStyle';

const JobSection = ({children}) => {

    return (
        <View style={SecStyles.columnBox}>
            <View style={[SecStyles.infoBox,{height:60}]}>
                <View style={[SecStyles.dateBox,{height:60}]}>
                    <Text style={SecStyles.dateTxt}>{children[0]}</Text>
                </View>
                <View style={{flex:1, alignItems:'flex-start', justifyContent:'flex-start'}}>
                    <View style={[SecStyles.secBox]}>
                        <MyICON name="md-location-outline" size={18} />
                        <Text style={[SecStyles.infoTxt]}>{children[3]}</Text>
                    </View> 
                    <View style={[jbStyle.jbBox,{paddingLeft:3}]}>
                        <View style={[SecStyles.secBox,{marginTop:5}]}>
                            <MaterialIcons name="construction" size={18} color={'rgba(50, 51, 56, 1)'}/>
                            <Text style={[SecStyles.infoTxt,{paddingRight:3}]}>{children[1]}</Text>
                            <View style={jbStyle.midLine}></View>
                        </View>
                        <View style={[SecStyles.secBox,jbStyle.balanceBox,{marginTop:5}]}>
                            <Text style={[SecStyles.infoTxt,jbStyle.balanceTxt]}>$ {children[2]}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default JobSection;

const jbStyle = StyleSheet.create({
    jbBox:{
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



/* 
<View style={SecStyles.secBox}>
    <MaterialIcons name="business" size={18} style={SecStyles.IconStyle} /> 
    <Text style={SecStyles.cltName}>{children[0]}</Text>
</View>
*/



/* 
<View style={SecStyles.secBox}>
    <MaterialIcons name="business" size={18} style={SecStyles.IconStyle} /> 
    <Text style={SecStyles.cltName}>{children[0]}</Text>
</View>
*/

