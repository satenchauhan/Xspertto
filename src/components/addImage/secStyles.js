import React from 'react';
import { StyleSheet } from 'react-native';


const secStyles = StyleSheet.create({
        imgSection:{
            position:'relative',
            bottom:0,
            marginTop:5,
            marginLeft:7,  
            marginRight:7,  
        },
        imgPlus:{
            flexDirection:'row',
            alignItems:'center',
            backgroundColor:'white', 
            borderRadius:8, 
            shadowColor: "#1e272e",
            shadowOffset: {
                width: 2,
                height: 2,
            },
            shadowOpacity: 1,
            shadowOpacity: 0.5,
            elevation:5, 
            padding:6,
        },
        imgIcon:{
            borderRadius:100, 
            paddingLeft:2, 
            marginLeft:3, 
            color:'black',
            opacity: 0.7
        },
        imgDiv:{
            flex:1,
            flexDirection:'row',
            alignItems:'center',
            backgroundColor:'white',
            height:40,
            shadowColor: "#1e272e",
            shadowOffset: {
                width: 2,
                height: 2,
            },
            shadowOpacity: 1,
            shadowOpacity: 1,
            elevation:5, 
            margin:5,
            borderWidth:1,
            borderColor:'#E5E5E5',
            borderRadius:8,   
        },
        img: {
            height: 35,
            width: 35,
            resizeMode: 'center',
            alignItems: 'center',
            justifyContent: 'center',     
        },
        
});

export default secStyles;