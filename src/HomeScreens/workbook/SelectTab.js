import React,{useContext} from 'react'
import {View,Text, StyleSheet,TouchableOpacity, Dimensions} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../components/common/colors';
import { SuperContext } from '../../context/ContextProvider';

const SelectTab = ({children}) => {
    const {screenName,setScreenName,tabColor,setWorkBookModal,setSelectContactKey}= useContext(SuperContext);

    const showTabScreen = (text) => {
       if(text==='Filter'){
            setWorkBookModal(true);
            setSelectContactKey(text);
            setScreenName(text);
       }else{
            setScreenName(text); 
       }
    }

    return (
        <View style={Styles.selectBox}>
            {children.map((item, x) =>
                <TouchableOpacity key={x} 
                    onPress={() => showTabScreen(item)}
                    style={[
                        item==='Filter' ? Styles.filterTab : Styles.allTab,
                        children.length==4 ? {width:'25%'} : {width:'50%'},
                        item===screenName ? {backgroundColor:'#F5F5F5',borderTopWidth:4, borderBottomWidth:0, borderTopColor:tabColor} : {}
                    ]}
                >
                    <Text style={[Styles.tabLabel,
                        item===screenName ? {color:tabColor} : {color:'gray'} ,
                        item==='Filter' ? {paddingLeft:10} : null,
                       ]}
                    >{item} </Text>
                    {item==='Filter' ? 
                        <MaterialIcons  name="keyboard-arrow-down" color={item===screenName ? tabColor : colors.drop}  size={30}/>
                    :null} 
                </TouchableOpacity>
            )}
        </View>
    )
}

export default SelectTab;

const Styles = StyleSheet.create({
    selectBox:{
        flex: 1, 
        flexWrap:'wrap',
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center',
        width:Dimensions.get('screen').width-9, 
        position:'absolute',
        top:-2.6,
        
    },
    allTab:{
        flex:1,
        alignItems:'center',
        justifyContent:'center', 
        height:40, 
        width:'100%',
        backgroundColor:'#fff',
        borderTopWidth:1,
        borderRightWidth:1,
        borderBottomWidth:1,
        borderColor:'rgba(180, 177, 177, 1)',  
    },
    tabLabel:{
        fontFamily:'Roboto-Bold',
        color:'#808490', 
        fontSize:18,
        fontWeight:'bold',
    },
    filterTab:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height:40, 
        width:'100%',
        backgroundColor:'#fff',
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'rgba(180, 177, 177, 1)',
    }
})
