import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Tag = ({style, children}) => {
    return(
        <View style={flagStyle.MainBox}>
            <View style={flagStyle.HighlightBox}>
                <View style={[flagStyle.RecBox, style]}><Text style={[flagStyle.msgTxt]}>{children}</Text></View>
            </View>
        </View>
    )
}

const FlagLeft = ({children}) => {
    return(
        <Tag style={[
            children==='lost' ? {backgroundColor:'#E47272'} : {},
            children==='lead' ? {backgroundColor:'#7ACA82'} : {},
            children==='client' ? {backgroundColor:'rgba(106, 16, 176, 0.5)'} : {},
        ]}>{children}</Tag>
    )
};


export default FlagLeft;

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
        right:20,
    },
    RecBox: {
        flex:1,
        width:60,
        height: 22,
        backgroundColor: "rgba(106, 16, 176, 0.5)",
        borderRadius: 3,
    },
    msgTxt:{
        fontFamily:'Roboto-Regular',
        fontWeight:'500',
        fontSize:14,
        color:'#003415', 
        lineHeight:22, 
        textAlign:'center',
        paddingHorizontal:10,
        textTransform:'capitalize'
    },
    
});



