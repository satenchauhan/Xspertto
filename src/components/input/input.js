import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Input = ({onChangeText, label, style, value}) => {
    // console.log(label)
    return (
        <TextInput 
            name={label}
            style={style}
            placeholder={label}
            placeholderTextColor={'#fff'}
            onChangeText={onChangeText}
            value={value}
        />
    )
}

export default Input

const styles = StyleSheet.create({
    
})
