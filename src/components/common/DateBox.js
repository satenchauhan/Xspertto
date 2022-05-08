import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DateBox = ({children}) => {
    return (
        <View style={Styles.box}>
            <Text style={Styles.dtText}>{children}</Text>
        </View>
    )
}

export default DateBox;

const Styles = StyleSheet.create({
    box:{
        width:'45%',
        backgroundColor:'#FFFFFF',
        paddingVertical:1,
        borderWidth:1,
        borderColor:'rgba(128, 128, 128, 0.2)', 
        borderBottomWidth:1,
        borderBottomColor:'#FFFFFF',
        borderTopLeftRadius:5, 
        borderTopRightRadius:5, 
        position:'relative',
        top:3,
        elevation:5,
        zIndex: 5,  
    },
    dtText:{
        paddingLeft:10, 
        fontSize:18, 
        fontWeight:'bold',
        fontFamily:'RobotoCondensed-Bold', 
        color:'#2D2D2D'
    }
})
