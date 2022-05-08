import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = ({children}) => {
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    card:{
        marginVertical:10,
        width:'100%',
        backgroundColor:'rgba(255, 255, 255, 1)',
        borderWidth:1,
        borderRadius:4,
        borderColor:'rgba(211, 211, 211, 0.25)',
        shadowColor:'#000000',
        elevation:3
    }
})
