import React from 'react'
import { Text, View,StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SecStyles from './SectionStyle';



const QuoteSection = ({children}) => {

    return (
        <View style={SecStyles.columnBox}>
            <View style={[SecStyles.infoBox]}>
                <View style={[SecStyles.dateBox]}>
                    <Text style={SecStyles.dateTxt}>{children[0]}</Text>
                </View>
                <View style={[qtStyle.qtBox,{paddingLeft:3}]}>
                    <View style={[SecStyles.secBox]}>
                        <MaterialIcons name="construction" size={18} color={'rgba(50, 51, 56, 1)'}/>
                        <Text style={[SecStyles.infoTxt,{paddingRight:3}]}>{children[1]}</Text>
                        <View style={qtStyle.midLine}></View>
                    </View>
                    <View style={[SecStyles.secBox,qtStyle.balanceBox]}>
                        <Text style={[SecStyles.infoTxt,qtStyle.balanceTxt]}>$ {children[2]}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default QuoteSection;

const qtStyle = StyleSheet.create({
    qtBox:{
        flex:1,
        flexDirection:'row',
        flexWrap: 'wrap', 
        alignItems:'flex-start',
        justifyContent:'center', 
        paddingTop:8
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
        justifyContent:'flex-end',
    },
    balanceTxt:{
        fontFamily:'RobotoCondensed-Bold',
        lineHeight:16,
        paddingRight:3,
    }
});




