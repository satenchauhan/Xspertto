import React,{useContext} from 'react'
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
import { SuperContext } from '../../context/ContextProvider';
import Input from '../input/input';


export const InputBox = (props) => {
    const [value, onChangeText] = React.useState(props.name);
    
    const {side} = props.side;

    return (
        <View style={styles.row}>
            {props.side==2 ?
            <TextInput  
                placeholder={props.icon}
                style={styles.disabledInpt}
                editable={false} 
                selectTextOnFocus={false}
                value={props.icon}  
            />
            :null }
            <Input  
                label={props.name}
                style={[styles.input, props.style,{
                    borderTopLeftRadius:  props.side==2 ? 0 : 5 ,
                    borderBottomLeftRadius: props.side==2 ? 0 : 5 , 
                    borderLeftWidth:  props.side==2 ? 0 : 1
                   } 
                ]}
                underlineColorAndroid="transparent"
                autoCorrect={false}
                onChangeText={(text) => onChangeText(text)}
                value={value}
            />
            {props.hcost? 
            <TouchableOpacity
                style={{alignItems:'center',justifyContent:'center'}}
                onPress={() => console.log('clicked')}
            >
                    <Text style={styles.btnLabel}>Hide Costs</Text>
            </TouchableOpacity>
            :null }
        </View>
    )
}



const styles =  StyleSheet.create({
    row:{
        flexDirection:'row', 
        alignItems:'flex-start', 
        justifyContent:'space-between',
        // paddingVertical:8,
        marginTop:5,
        shadowColor:'#000',
        elevation:5 , 
    },
    input:{
        flex:1,
        borderWidth:1,
        borderColor:'rgba(0, 0, 0, 1)',
        borderRadius:5,
        height:42,  
        paddingLeft:10,
        height:'auto',
        fontFamily:'Roboto-Bold',
        fontSize:18,
        color:'rgba(0, 0, 0, 0.6)',
        backgroundColor:'#fff',
    },
    disabledInpt:{
        borderWidth:1,
        borderColor:'rgba(0, 0, 0, 1)',
        borderRightWidth:0,
        borderRadius:5,
        borderTopRightRadius: 0,
        borderBottomRightRadius:0,
        height:42,  
        height:'auto',
        fontFamily:'Roboto-Bold',
        fontSize:20,
        color:'rgba(0, 0, 0, 0.6)',
        paddingHorizontal:15,
        textAlign:'center',
        backgroundColor:'rgba(211, 211, 211, 1)', 
    },
    btnLabel:{
        fontFamily:'Roboto-Bold',
        fontSize:14,
        color:'rgba(56, 81, 221, 1)',
        lineHeight:45,
        paddingHorizontal:12
    }
    
})
