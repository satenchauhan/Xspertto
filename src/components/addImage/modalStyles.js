import React from 'react';
import { StyleSheet } from 'react-native';


const modalStyles = StyleSheet.create({
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 45
        },
        modalView: {
            height:'75%',
            margin: 10,
            backgroundColor: "rgba(255,255,255,0.9)",
            borderRadius: 5,
            paddingTop:'25%',
            padding: 55,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
        },
        button: {
            width:'100%',
            backgroundColor: "#2196F3",
            borderRadius: 5,
            margin: 5,
            padding: 3,
            elevation: 2
        },
        modalButton: {
            backgroundColor: "#2196F3",
            borderRadius: 5,
            margin: 5,
            padding: 3,
            elevation: 2
        },
        buttonOpen: {
            backgroundColor: "#F194FF",
        },
        buttonClose: {
            width:'100%',
            backgroundColor:'red',
            borderRadius: 5,
            margin: 5,
            padding: 3,
            elevation: 2
        },
        textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
        },
        modalText: {
            fontSize: 25,
            textAlign: "center"
        }
});

export default modalStyles;