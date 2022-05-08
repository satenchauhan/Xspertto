import React from 'react';
import { StyleSheet } from 'react-native';

const FrameStyles = StyleSheet.create({
    OuterSection:{
        flex:1,
        padding:5,  
        marginBottom:5
     },
     areaSection:{
        flex:1,
        backgroundColor: '#fff',
        // width: '100%',
        padding:10,  
        borderRadius:8, 
        borderColor:"#1e272e",
        elevation:3,
    },
    sectionTitle:{
        color:"black",
        fontSize:16,
        fontWeight:'bold', 
        lineHeight:35
    },
    middlePrice:{
        color:"black",
        fontSize:14,
        fontWeight:'bold', 
        paddingLeft:5,
        paddingRight:5,
        lineHeight:33,
        borderWidth:1,
        borderColor:"rgba(128,128,128, 0.3)",
        borderRadius:5,
    },
    deletePopUp: { 
        flexDirection:'row', 
        alignItems:'flex-end',
        justifyContent:'flex-end', 
        marginRight:2,
        position:'absolute', 
        right:0, 
        top:0, 
        zIndex: 10  
    },
    
   
});


export default FrameStyles;