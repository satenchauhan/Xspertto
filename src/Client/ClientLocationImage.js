import React from 'react'
import {Text,View, StyleSheet, TouchableOpacity, ImageBackground, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ClientLocationImage = (props) => {
    return (
        <ImageBackground style={ ImgStyle.cliImage}  source={props.cliImage}>
            <TouchableOpacity style={{flex:1, alignItems:'flex-end', justifyContent:'flex-end', paddingBottom:2}}>
                <MaterialIcons  name="location-on"  size={30} color='#fff' style={{lineHeight:28}} />
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default ClientLocationImage

const ImgStyle = StyleSheet.create({
        cliImage: {
            position:'relative',
            width: '100%', 
            height: 78,
            resizeMode:'cover',
        },
        txt:{
            fontSize:22, 
            color:'#fff', 
            lineHeight:25
        }
})
