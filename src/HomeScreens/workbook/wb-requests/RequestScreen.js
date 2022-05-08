import React,{useState,useEffect,useRef, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {AllRequest,requests} from './AllRequest';
import { FilterRequest } from './FilterRequest';
import RequestModal from './RequestModal';
import { SuperContext } from '../../../context/ContextProvider';
import SelectTab from '../SelectTab';


const requestScreen ="REQUESTS";

const RequestScreen  = (props) =>{
    const {setTabScreen, screenName, setScreenName} = useContext(SuperContext);

    useEffect(() => {
        setScreenName('All');
        setTabScreen('requests');
    }, []);

    return (
        <View style={Styles.outerBox}>
            <SelectTab>
               {'All'}
               {'Filter'}
            </SelectTab>
            {screenName==='All' ?
                <AllRequest />
            :null}
            {screenName==='Filter' ?
                <FilterRequest msg={requests} showTab={props.showTab} />
            :null}
           <RequestModal showTab={props.showTab} />
        </View>   
    )
}

export {RequestScreen, requestScreen};

const Styles = StyleSheet.create({
    outerBox:{
        flex:1,
        backgroundColor:"#F5F5F5",  
        // padding:1.5,
        // marginBottom:10,
        // height:450
    },
    
})

