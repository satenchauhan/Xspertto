import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TabScreenFrame = ({children}) => {
    return (
        <View  style={styles.outerBox}>
            {children}
        </View>
    )
}

export default TabScreenFrame;

const styles = StyleSheet.create({
    outerBox:{
        backgroundColor:"rgba(245, 245, 245, 0.8)",  
        padding:1.5,
        borderWidth:1,
        borderLeftWidth:2,
        borderRightWidth:2,
        borderRadius:4,
        borderColor:'rgba(180, 177, 177, 1)',
    },
})
