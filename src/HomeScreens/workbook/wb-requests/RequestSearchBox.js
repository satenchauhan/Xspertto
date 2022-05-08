import React,{useState,useContext,useRef,useEffect} from 'react'
import {View, StyleSheet,TextInput} from 'react-native';
import { SuperContext } from '../../../context/ContextProvider';

const RequestSearchBox = (props) => {
    const [inputVal, setInputVal] = useState("");
    const {setTabScreen,setSelectContactKey} = useContext(SuperContext);

    const ref_inputThird = useRef();

    const filterSearch = (val) =>  {
        setInputVal(val)
    };

    
    const action = () =>{
        props.showTab('search');
        setTabScreen('serach');    
    }
    useEffect(() => {
        setSelectContactKey('All');
    }, [])
    return (
        <View style={Styles.box}>
            <TextInput  
                style={Styles.searchInpt}
                name={"Search"}
                placeholder={"Seacrh Request"}
                placeholderTextColor={'rgba(128, 132, 144, 0.49)'}
                returnKeyType="done"
                // onChangeText={(val)=> filterSearch(val)}
                // onFocus={() => action()}
                underlineColorAndroid={"transparent"}
                // onSubmitEditing={() => ref_inputThird.current.focus()}
                ref={ref_inputThird}
                // value={inputVal}
            />
            <View style={Styles.bottomBorder}></View>
        </View>
    )
}

export default RequestSearchBox;

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
        lineHeight:20,
        fontFamily:'Roboto-Bold',
    },
    bottomBorder:{
        width:'100%',
        borderBottomWidth:3,
        borderColor:'rgba(128, 132, 144, 0.49)', 
    }
})
