import React from 'react';
import { StyleSheet } from 'react-native';

const chipStyles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 56,
      backgroundColor:'rgba(0, 0, 0, 0.8)',
    },
    modalView: {
      flex:0.4,
      height: 450,
      width: '98%',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    type:{
      alignSelf:'flex-start', 
      marginBottom:10,
      paddingTop:20,
      paddingLeft:20, 
      fontSize:20, 
      fontWeight:'bold',
    },
    topLine:{
      borderBottomWidth:2, 
      borderColor:'gray', 
      width:'100%',
      marginBottom:15
    },
    box:{
      flex: 1, 
      flexDirection: 'row', 
      flexWrap: 'wrap', 
      // flexGrow: 0, 
      alignItems:'center', 
      backgroundColor: '#fff',
    },
    chipBtn:{
      marginTop:10,
      margin:6,
      paddingHorizontal:10,
      height: 45,
      borderRadius:50, 
    },
    labelTxt:{
      padding:6,
      fontSize:20,
      color:'#fff',
      textTransform:'capitalize'
    },

})


export default chipStyles;