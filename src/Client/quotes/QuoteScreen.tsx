import React,{useState,useEffect,useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {AllQuotes,quotes} from './AllQuotes';
import { search, FilterQuotes } from './FilterQuotes';
import QuoteModal from './QuoteModal';
import { SuperContext } from '../../context/ContextProvider';
import SelectTab from '../SelectTab';


const quoteTab ="QUOTES";

const QuoteScreen  = (props) =>{
    const {setTabScreen, screenName, setScreenName} = useContext(SuperContext);

    useEffect(() => {
        setScreenName('All');
        setTabScreen('QUOTES');
    }, []);

    return (
        <View  style={Styles.outerBox}>
            <SelectTab>
               {'All'}
               {'Filter'}
            </SelectTab>
            {screenName==='All' ?
                <AllQuotes />
            :null}
            {screenName==='Filter' ?
                <FilterQuotes msg={quotes} showScreen={props.showScreen} />
            :null}
            <QuoteModal showScreen={props.showScreen} />
        </View>   
    )
}

export {QuoteScreen, quoteTab};

const Styles = StyleSheet.create({
    outerBox:{
        backgroundColor:"#F5F5F5",  
        padding:1.5,
        marginBottom:10,
    },
    
})

