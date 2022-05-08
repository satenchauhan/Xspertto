import React from 'react';
import { StyleSheet } from 'react-native';

const modalStyles =  StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 56,
      backgroundColor:'rgba(0, 0, 0, 0.8)',
    },
    modalView: {
      // height: 548,
      width: '90%',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth:1,
      borderColor:'gray',
      // borderRadius: 5,
      // marginBottom: 5,
    },
    column:{
      // flex:1,
      height:60,
      width: '100%',
      borderBottomWidth:1.5,
      borderColor:'gray'
    },
    row: {
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      paddingTop:12,
      // paddingBottom:10,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: '#fff',
      
    },
    labelTxt:{
      fontSize:24, 
      lineHeight:35, 
      color:'black'
    },
    InactiveOut:{
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      width:30, 
      height:30, 
      borderRadius:15,
      borderColor:'gray', 
      borderWidth:4, 
      borderStyle:'solid'
    },
    InactiveDot:{
      width:14, 
      height:14, 
      borderRadius:7, 
      backgroundColor:'#fff'
    },
    ActiveCircle:{
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      width:30, 
      height:30, 
      borderRadius:15,
      borderColor:'rgba(70, 164, 147, 1)', 
      borderWidth:4, 
      borderStyle:'solid'
    },
    ActiveDot:{
      width:14, 
      height:14, 
      borderRadius:7, 
      backgroundColor:'rgba(70, 164, 147, 1)'
    }
});


export default modalStyles;