import React,{useState,useEffect,useRef, useContext} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SuperContext } from '../../context/ContextProvider';

const QuoteSelect = ({children}) => {
    const {setClientModal} = useContext(SuperContext);

    return (
        <View style={Styles.search}>
            <View style={[Styles.Inpt,{minWidth: 127}]}> 
                <TouchableOpacity style={Styles.select} onPress={() =>setClientModal(true)} >
                    <Text style={Styles.valueTxt}>{children}</Text>
                    <MaterialIcons  name="keyboard-arrow-down" color={'rgba(69, 77, 106, 0.6)'}  size={30} />
                </TouchableOpacity>
            </View> 
        </View>
    )
}


const selectKey = 'selectKey';
export default QuoteSelect;

const Styles = StyleSheet.create({
    search:{
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'flex-end',
        marginTop:20,
        marginLeft:15,
        marginRight:15
    },
    Inpt:{
        height: 35, 
        backgroundColor: '#FFFFFF',
        borderRadius: 0,  
        borderWidth: 1,
        borderColor:'rgba(69, 77, 106, 0.42)',
    },
    select:{
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between'
    },
    valueTxt:{
        fontSize:18, 
        fontWeight:'bold', 
        paddingHorizontal:5, 
        lineHeight:30
    },
})

