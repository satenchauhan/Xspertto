import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export const HZline = ({style}) => {
    return (
      <View style={[styles.hzline, style]}></View>
    );
};


export const VCline = ({style}) => {
    return (
      <View style={[styles.vcline, style]}></View>
    );
};



const styles = StyleSheet.create({
    hzline:{
        borderBottomWidth:1,
        width:'100%', 
    },
    vcline:{ 
      borderBottomWidth:1,
      transform:[{rotate:'90deg'}],
    }
});
