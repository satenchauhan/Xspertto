import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TableHead = ({children, style, fontStyle}) => {

    return (
        <View style={[Styles.thBox,style]}>
            <Text style={[Styles.theading, fontStyle]}>{children[0]}</Text>
            <Text style={[Styles.theading, fontStyle]}>{children[1]}</Text>
            <Text style={[Styles.theading, fontStyle]}>{children[2]}</Text>
            <Text style={[Styles.theading, fontStyle]}>{children[3]}</Text>
        </View>
    )
}

export default TableHead;

const Styles = StyleSheet.create({
    thBox:{
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-between',
        backgroundColor:'#F5F5F5',
        height:57,
        borderRadius:8,
        marginTop:20,
        paddingHorizontal:10,
        shadowColor:'#000000',
        elevation:5
    },
    theading:{
        lineHeight:57, 
        color:'#323338', 
        fontFamily:'RobotoCondensed-Bold', 
        fontSize:12
    },
    
    
})
