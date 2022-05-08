import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Payments } from '../../bills/Payments'
import AllNotes from '../../notes/AllNotes'

const Payment = () => {
    return (
        <View style={styles.mainContainer}>
            <Payments  style={{marginTop:10}} />
        </View>
    )
}

export default Payment;

const styles = StyleSheet.create({
    mainContainer:{
        flex:1.5, 
        backgroundColor:'#F5F5F5',
        paddingHorizontal:2
    },
})
