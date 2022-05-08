import React,{useContext} from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { SuperContext } from '../../context/ContextProvider';

const FlagButton = ({style, children}) => {
    const {setFlagModal} = useContext(SuperContext);
    return (
        <TouchableOpacity style={[Style.RecBox, style]}
            onPress={() => setFlagModal(true)}
        >
            <Text style={[Style.msgTxt, style,
                children==='awaiting response' || children=== 'draft' || children=== 'awaiting payment' ? 
                {color:'#000000'} : {},
                ]}>{children}</Text>
        </TouchableOpacity>     
    )
}

export default FlagButton

const Style = StyleSheet.create({
    RecBox: {
        position:'absolute',
        left:30,
        backgroundColor: "#F2BE72",
        height:28,
    },
    msgTxt:{
        fontFamily:'Roboto-Regular',
        fontSize:14,
        color:'#fff',
        textAlign:'center',
        textTransform:'capitalize',
        lineHeight:28,
        paddingHorizontal:12,
    },
    voidStyle:{
        color:'#000000',
        fontWeight:'700',
        borderWidth:1,
        borderColor:'#333333',
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
    }
   
    
});
