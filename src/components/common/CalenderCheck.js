import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CalenderCheck = ({children}) => {
    return (
        <View>
            <View style={Styles.TopBox}></View>
                <View style={Styles.BottomBox}>
                    <View style={Styles.midLine}></View>
                    <View style={Styles.Line1}></View>
                    <View style={Styles.Line2}></View>
                </View>
                <Text style={Styles.dateTxt}>{children[0]}</Text>
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
        borderWidth:3,  
    },
    midLine:{
        width:'100%', 
        borderBottomColor:'#454D6A', 
        borderBottomWidth:3, 
        marginTop:5 
    },
    Line1:{
        width: 20, 
        borderBottomColor:'#7ACA82', 
        borderBottomWidth:4, 
        position: 'absolute',
        bottom:8,
        right:12,
        transform: [{ rotate: '55deg'}]
    },
    Line2:{
        width: 38, 
        borderBottomColor:'#7ACA82', 
        borderBottomWidth:4, 
        position: 'absolute',
        bottom:13,
        left:7,
        transform: [{ rotate: '-45deg'}]
    },
    dateTxt:{
        textAlign:'center', 
        color:'#454D6A', 
        fontSize:10,
        lineHeight:15, 
        fontWeight:'bold'
    }
})


export default CalenderCheck;