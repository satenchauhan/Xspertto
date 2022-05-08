import React from 'react';
import { StyleSheet } from 'react-native';

const CStyles = StyleSheet.create({
    lwhSection: { 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 5,
        paddingRight: 5,
        marginTop: 5
    },
    L_W_H_Input:{  
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
    inptFlex:{ 
        flexDirection:'column', 
        alignItems:'center', 
        justifyContent:'space-between',
        marginTop:4,  
    },


});


export default CStyles;