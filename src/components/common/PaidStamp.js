import React,{useState,useEffect,useRef} from 'react';
import {Text, View, StyleSheet, TextInput,Alert, Modal,Pressable, TouchableOpacity, Image} from 'react-native';


const PaidStamp = ({children}) => {
    return (
        <View style={[children==='paid' ? flagStyle.PaidHighlightBox : flagStyle.DefaultHighlightBox]}>
            <Text style={[flagStyle.msgTxt]}>{children==='paid'? children.toUpperCase() : children}</Text>
        </View>
      
    );
};

            

export {PaidStamp};

const flagStyle = StyleSheet.create({
    MainBox:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
       
    },
    topLine:{
        flex:1,
        borderWidth:2, 
        borderColor:"#7ACA82",
        position:'relative',
        top: 2
    },
    PaidHighlightBox: {
        backgroundColor: "#fff",
        position:'absolute',
        top:50,
        right:40,
        borderWidth:2,
        borderColor:'#7ACA82',
        borderRadius:5,
        elevation:5, 
        zIndex:5,
        transform: [{ rotate: '-15deg'}]
    },
    DefaultHighlightBox: {
        backgroundColor: "#fff",
        position:'absolute',
        top:12,
        right:8,
        borderWidth:2,
        borderColor:'#7ACA82',
        borderRadius:5,
        elevation:5, 
        zIndex:5,
        transform: [{ rotate: '-15deg'}]
    },
    msgTxt:{
        color:'#7ACA82', 
        lineHeight:20, 
        fontSize:15,
        textAlign:'center',
        // paddingLeft:15, 
        // paddingRight:15,
        letterSpacing:5
    },
    
});



