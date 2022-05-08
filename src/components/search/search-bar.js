import React,{useState,useContext,useRef,useEffect} from 'react'
import {View, StyleSheet,TextInput} from 'react-native';
import { SuperContext } from '../../../context/ContextProvider';

const SearchBar = ({name, style}) => {
    const [inputVal, setInputVal] = useState("");
    // const {setTabScreen,setSelectContactKey} = useContext(SuperContext);

    const ref_inputThird = useRef();

    const filterSearch = (val) =>  {
        setInputVal(val);
    };

    return (
        <View style={[Styles.box,style]}>
            <TextInput  
                style={Styles.searchInpt}
                name={"Search"}
                placeholder={name}
                placeholderTextColor={'rgba(128, 132, 144, 0.49)'}
                returnKeyType="done"
                onChangeText={(val)=> filterSearch(val)}
                underlineColorAndroid={"transparent"}
                onSubmitEditing={() => ref_inputThird.current.focus()}
                ref={ref_inputThird}
                value={inputVal}
            />
            <View style={Styles.bottomBorder}></View>
        </View>
    )
}

export default SearchBar;

const Styles = StyleSheet.create({
    box:{
        flex:1, 
        alignItems:'flex-end', 
        justifyContent:'flex-end',
        marginTop:15, 
        padding:10
    },
    searchInpt:{
        flex:1,
        width:'100%',
        fontSize:20,
        lineHeight:30,
        fontFamily:'Roboto-Bold',
    },
    bottomBorder:{
        width:'100%',
        borderBottomWidth:2,
        borderColor:'rgba(128, 132, 144, 0.49)', 
    }
})
