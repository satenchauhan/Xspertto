import React from 'react';
import {Text, View, StyleSheet} from 'react-native';



const TagBox = ({style,children}) => {
    return(
        <View style={flagStyle.MainBox}>
            <View style={flagStyle.HighlightBox}>
                <View style={[flagStyle.RecBox, style]}><Text style={[flagStyle.msgTxt]}>{children}</Text></View>
            </View>
        </View>
    )
}


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
        backgroundColor: "#23BF7E",
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    },
    msgTxt:{
        fontFamily:'RobotoCondensed-Regular',
        fontSize:14,
        color:'#FFFFFF', 
        fontWeight:'500',
        lineHeight:22, 
        textAlign:'center',
        paddingHorizontal:10,
        textTransform:'capitalize'
    },
    
});

export default TagBox;