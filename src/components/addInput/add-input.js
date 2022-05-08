import React,{useContext} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons_Icon, MaterialIcons_Icon } from '../../components/icons/icons';
import { SuperContext } from '../../context/ContextProvider';
import Input from '../input/input';


export const AddInput = (props) => {
    const { setAddBtn, setAddVal, setShowModal} = useContext(SuperContext);
    const [value, onChangeText] = React.useState('0.00');
    
    const delAddition = () => {
        setAddBtn(''); 
        setAddVal(null);
    }
    
    return (
        <View style={styles.row}>
            <Input  
                label={props.name}
                style={styles.input}
                onChangeText={(text) => onChangeText(text)}
                value={value}
            />
            <View style={styles.select}>
                <Text style={styles.value}>$</Text>
                <TouchableOpacity style={{paddingHorizontal:5}} onPress={() =>setShowModal(true)}>
                    <MaterialIcons_Icon name="keyboard-arrow-down" size={30} color={'gray'} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{paddingHorizontal:15}} onPress={delAddition}>
                <Ionicons_Icon name="trash-outline" size={25} color="red" style={{lineHeight:35}} />
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    row:{
        flexDirection:'row', 
        alignItems:'flex-start', 
        justifyContent:'space-between',
        paddingVertical:8,
    },
    input:{
        flex:1,
        borderWidth:1,
        borderColor:'rgba(128, 128, 128, 0.5)',
        borderRadius:4,
        borderTopRightRadius:0,
        borderBottomRightRadius:0,
        width:150,
        height:40,  
        paddingLeft:10
    },
    select:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderWidth:1,
        borderColor:'rgba(128, 128, 128, 0.5)',
        borderRadius:4,
        borderTopLeftRadius:0,
        borderBottomLeftRadius:0,
        width:70,
        height:40,
        paddingHorizontal:10, 
    },
    value:{
        paddingHorizontal:5,
        fontFamily:'RobotoCondensed-Regular', 
        fontSize:20, 
        color:"gray"
    }
})
