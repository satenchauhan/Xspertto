import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Calender = ({children}) => {
    return (
        <View>
            <View style={Styles.TopBox}></View>
            <View style={Styles.BottomBox}>
                <View style={Styles.midLine}></View>
                <Text style={Styles.date}>{children[0]}</Text>
            </View>
            <Text style={Styles.dateTxt}>{children[1]}</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    TopBox:{
        alignSelf:'center',
        width:28,
        height:6,
        borderColor:'#454D6A',
        borderRightWidth:3,
        borderLeftWidth:3
    },
    BottomBox:{
        alignSelf:'center',
        width:36,
        height:36,
        borderRadius: 3,
        borderColor:'#454D6A',
        borderWidth:3
    },
    midLine:{
        width:'100%', 
        borderBottomColor:'#454D6A', 
        borderBottomWidth:3, 
        marginTop:5 
    },
    date:{
        textAlign:'center', 
        color:'#454D6A', 
        fontSize:16,
        lineHeight:19, 
        fontWeight:'bold'
    },
    dateTxt:{
        textAlign:'center', 
        color:'#454D6A', 
        fontSize:10,
        lineHeight:15, 
        fontWeight:'bold'
    }
})


export default Calender;