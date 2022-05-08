import React,{useState} from 'react';
import {Text, View, StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Quotes, quotes } from './quotes/QuoteScreen';


const TabScreenBox  = ({children}) =>{
    return (
        <View style={Styles.mainContainer}>
            <View style={Styles.borderBox}>
               {children}
            </View> 
        </View>    
    )
}
export default TabScreenBox;

const Styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#F5F5F5', 
        paddingLeft:2, 
        paddingRight:2,
    },
    borderBox:{
        flex:1, 
        borderWidth:2, 
        borderColor:'#B4B1B1', 
        borderRadius:5
    },
})
