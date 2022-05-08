import React from 'react'
import { StyleSheet, View } from 'react-native'
import AllNotes from '../../notes/AllNotes'

const Visits = () => {
    return (
        <View style={styles.mainContainer}>
            <AllNotes name={null} />
        </View>
    )
}

export default Note

const styles = StyleSheet.create({
    mainContainer:{
        flex:1.5, 
        backgroundColor:'#F5F5F5',
        paddingHorizontal:2
    },
})
