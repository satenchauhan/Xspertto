import React from 'react';
import { StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    
    lastSpace:{
        color:'#fff',
        width:40, 
        height:35, 
        padding: 5
    },
    priceTxt:{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,

        color:"#000000",
        fontWeight: 'bold', 
        lineHeight: 34 
    },
    lwhSection:{  //*
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between',
        paddingLeft:5, 
        paddingRight:5, 
        marginTop:5
    },
    L_W_H_Input:{  //*
        width:85, 
        fontWeight:'bold',
        backgroundColor:'white',
        padding:3,
        paddingLeft:5,
        borderWidth:1, 
        borderColor:'gray', 
        borderRadius:5, 
        paddingRight:28, 
        shadowColor: "#1e272e",
         shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,      
    },
    l_w_h_container:{
        flexDirection:'row', 
        alignItems:'flex-end', 
        justifyContent:'flex-end',  
        paddingRight:5
    },
    l_w_h_box:{
        flexDirection:'column', 
        alignItems:'center', 
        justifyContent:'space-between'
    },
    bottomFlex:{
        flexDirection:'row', 
        alignItems:'flex-end', 
        justifyContent:'flex-end',
        
    },
    txtBold:{ 
        fontWeight:'bold',
        color:'black'
    },
// All Section===========================================
    OnlyInpt:{
        width:90, 
        fontWeight:'bold',
        padding:3,
        paddingLeft:5,
        borderWidth:1, 
        backgroundColor:'white',
        borderColor:'gray', 
        borderRadius:5, 
        shadowColor: "#1e272e",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,  
    },
   
    Inpute:{
        width:90, 
        fontWeight:'bold',
        padding:3,
        paddingLeft:5,
        borderWidth:1, 
        backgroundColor:'white',
        borderColor:'gray', 
        borderRadius:5,
        // paddingRight:38, 
        shadowColor: "#1e272e",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,   
    },
    
    lastTotalPlacehoder:{
        position:'relative',
        bottom:8,
        left:-18,
        color:'#b2bec3',
        elevation:5,
    },  
    SqftPlaceholder:{
        position:'absolute',
        top:7,
        left:55,
        color:'#b2bec3',
        elevation:5 
    },
    FtPlaceholder:{
        width:38, 
        color:'#b2bec3',
        padding:2,
        position:'relative',
        bottom:28,
        left:42,
        elevation:5
    },
    padding:{
        paddingLeft:5, 
        paddingRight:5
    },
    topLabel:{
        flex:2, 
        flexDirection:'row', 
        justifyContent:'space-between'
    },
    collapstitle:{
        marginLeft:5, 
        fontSize:16, 
        color:'black',
        fontWeight:'bold'
    },
    label:{
        fontWeight:'bold',
        textAlign:'center'
    },

    // Bottom Section Total Input field
    bottomLastSec:{
        flexDirection:'row', 
        alignItems:'flex-end', 
        justifyContent:'space-between', 
        paddingRight:5,
        marginBottom:20,
    },
    upload:{
        width:100,
        flexDirection:'column', 
        alignItems:'flex-end',
    },
    imgInpt:{
        color:'gray',
        fontSize:12, 
        paddingTop:5,
        position:'absolute',
        top:40,
        left:25
    },   
    hrLine:{
        marginTop:15,
        borderBottomWidth:1, 
        color:'#b2bec3',
        opacity:0.4
    },
    selectCutom:{
        backgroundColor:'white',
        paddingTop:5, 
        paddingBottom:5, 
        borderWidth:1,
        borderColor:'gray',
        borderRadius:5,
        shadowColor: "#1e272e",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
    },
    line:{
        borderBottomWidth:1,
        color:'#b2bec3',
        width:'100%',
        marginBottom:10, 
        opacity:0.1 
    },
    plus:{
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
        padding:10,
    },
    
});

export {Styles};