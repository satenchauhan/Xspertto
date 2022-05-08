import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Title = ({children, style}) => {
    return ( 
        <Text style={[styles.title, style]}>{children}</Text> 
    )
}

export default Title; 

const styles = StyleSheet.create({
      title:{
          fontFamily:'Roboto-Bold',
          fontSize:22,
          color:'rgba(56, 81, 221, 1)',
          
      }
})
