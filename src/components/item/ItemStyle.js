import React from 'react';
import { StyleSheet } from 'react-native';


const ItemStyle = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // margin:8,
    },
    modalView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5);',
        // width:'50%'
        // marginTop:'75%',
    },
    itemSection: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: "#fff",
        position: "absolute",
        bottom: 0,
    },
    closeItem: {
        alignSelf: "center",
        backgroundColor: "#2196F3",
        borderRadius: 50,
        position: 'absolute',
        top: -20,
        right: 20
    },
    ItemMenu: {
        flex: 1,
        alignItems: 'flex-end',
        marginTop: 35,
        padding: 10,
    },
    clsTxt: {
        width: 50,
        height: 50,
        textAlign: 'center',
        lineHeight: 50,
        color: "#fff",
    },
    itemBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    itemBtn: {
        width: 100,
        borderRadius: 10,
        backgroundColor: "#fff",
        borderColor: "rgba(128,128,128, 0.3)",
        // borderWidth:1,
        shadowColor: "#2196F3",
        elevation: 3,
        margin: 5,
    },
    itemTxt: {
        textAlign: "center",
        padding: 4,
        lineHeight: 25,
    }
});


export default ItemStyle;