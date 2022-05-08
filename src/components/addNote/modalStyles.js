import React from 'react';
import { StyleSheet } from 'react-native';

const modalStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin:5,
    },
    modalView: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(0,0,0,0.5);',   
    },
    mainNote:{
        width:"100%",
        minHeight:'40%',
        margin: 10,
        backgroundColor: "#fff",
        borderRadius:10,
        borderWidth:1.5,
        borderColor: '#808080',
        paddingTop: 10,
        alignItems: "center",
        position:'absolute',
        // top:30
    },
    NoteButtons:{

        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-between', 
        width:'100%',  
        backgroundColor:'#fff',
        paddingLeft:10,
        paddingRight:10,
        borderBottomWidth:1,
    },

    TextSection:{
        flex:1, 
        flexDirection:'row', 
        alignItems:'flex-end',
        justifyContent:'flex-end',
        position:'relative',
        borderRadius:8
    },
    AreaBox: {
        flex:0,
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        borderColor: '#808080',
        borderWidth: 1,
        borderTopWidth:0,
        borderRadius:8,
        borderTopLeftRadius:0,
        borderTopRightRadius:0,   
        backgroundColor:'#fff',
    },
    textArea: {
        textAlignVertical: 'top',
        paddingTop:5,
        paddingLeft:5,
        paddingRight:5,
       
    },
    
});

export default modalStyles;