import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { PaidStamp } from './PaidStamp';



const FlagTag = ({style, children}) => {
    return (
        <View style={flagStyle.MainBox}>
            <View style={flagStyle.HighlightBox}>
                <View style={[flagStyle.RecBox, style]}>
                    <Text style={[flagStyle.msgTxt, style,
                        children==='awaiting response' || children=== 'draft' || children=== 'awaiting payment' ? 
                        {color:'#000000'} : {},
                        children==='void' ? flagStyle.voidStyle : {},
                        ]}>{children}</Text>
                </View>
            </View>
        </View>
    ) 
}

export default FlagTag

const flagStyle = StyleSheet.create({
    MainBox:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        elevation:5, 
        zIndex:5
    },
    HighlightBox: {
        backgroundColor: "transparent",
        position:'absolute',
        top:0,
        right:0,
    },
    RecBox: {
        flex:1,
        backgroundColor: "#F2BE72",
        height:16,
        // borderTopRightRadius: 4, 
        // borderBottomLeftRadius: 4,
    },
    msgTxt:{
        fontSize:12,
        color:'#fff',
        textAlign:'center',
        fontFamily:'RobotoCondensed-Bold',
        textTransform:'capitalize',
        lineHeight:15,
        paddingLeft:12, 
        paddingRight:12
    },
    voidStyle:{
        color:'#000000',
        fontWeight:'700',
        borderWidth:1,
        borderColor:'#333333',
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
    }
   
    
});
// children==='Awaiting Response' || children=== 'Draft' ? {color:'#342500', fontWeight:'bold'} : {color:'#fff'},