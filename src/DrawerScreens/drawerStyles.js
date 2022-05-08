import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DStyles = StyleSheet.create({
    headBox:{
      backgroundColor:'#fff',
      shadowColor: 'rgba(51, 51, 51, 1)',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.5,
      elevation:10
    },
    topBox:{
      flexDirection:'column', 
      alignItems:'center', 
      justifyContent:'center', 
      marginTop:5, 
      marginBottom:5
    },
    userInfoPanel: {
      backgroundColor:'#fff',
    },
    outerRing:{
      flexDirection:'column', 
      alignItems:'center', 
      justifyContent:'center',    
      width:60, 
      height:60, 
      borderRadius:30, 
      borderWidth:2, 
      borderColor:'rgba(34, 34, 34, 0.15)',
      backgroundColor:'rgba(170, 170, 170, 0)',
      shadowColor: 'rgba(0, 0, 0, 0.5)',
      shadowOffset: {
        width: -1,
        height: 2
      },
      shadowRadius: 5,
      shadowOpacity: 0.5,
      elevation:10
    },
    innerRing:{
        flexDirection:'column', 
        alignItems:'center', 
        justifyContent:'center',     
        width:51.5, 
        height:51.5, 
        borderRadius:26, 
        // borderWidth:1, 
        // borderColor:'#3851DD',
        backgroundColor:'#3851DD',
    },
    drawerContent: {
      flex: 1,
    },
    title: {
      fontSize: 16,
      marginTop: 5,
      fontWeight: 'bold',
      color:'rgba(34, 34, 34, 1)',
      textAlign:'center',
    },
    HQSection: {
      marginBottom: 15,
      backgroundColor:'rgba(51, 51, 51, 0.002)',
      marginTop:20
    },
    bottomSection: {
      marginBottom: 15,
      backgroundColor:'rgba(51, 51, 51, 0.002)',
      borderBottomWidth:2,
      borderColor:'rgba(221, 221, 221, 1)'
    },
    hq: {
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      alignSelf:'center',
      width:107,
      height:64,
      borderWidth:1,
      borderColor:'#3851DD',
      borderTopRightRadius:15,
      borderTopLeftRadius:15,
      borderBottomLeftRadius:15,
      borderBottomRightRadius:15
    },
    menuBtn:{
      flexDirection:'row',
      alignItems:'flex-start', 
      justifyContent:'space-between',
      marginTop:12, 
      marginLeft:20
    },
    label:{
      fontFamily:'Roboto',
      fontSize:13, 
      color:'rgba(34, 34, 34, 1)', 
      position:'absolute', 
      left:35
    },
    logo: {
      alignSelf:'center',
      width: 100,
      height: 100,
      marginTop:15,
      // transform: [{ rotate: '90deg'}]
    },
    subMenuBox:{
        position:'relative',
        top:8, 
        left:70
    },
    btnText:{
      fontSize:12, 
      color:'#888888'
    },
    button:{
      marginTop:13,
    }
    
});


export default DStyles;