import React,{useState, useEffect, useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity,} from 'react-native';
import FlagBox from '../../components/common/FlagBox';
import QuoteSection from '../../components/common/QuoteSection';
import Items from '../../components/common/SelectItems';
import { SuperContext } from '../../context/ContextProvider';
import quotes_data from './DamiQuotes';
import ClientStyles from '../ClientStyles';

const  SearchQuotes  = () =>{
    const {searchKey,setSearchKey} = useContext(SuperContext);

    const data = quotes_data.filter((item) => {
        if(searchKey==='All'){
            setSearchKey('All');
            return false;
        }else{
            return item.status === searchKey;
        }
    });
    
  
    const uiData = Items.filter((item) => {
        if(data.length>0){
            return item.label === data[0].status;
        }else{
            setSearchKey('All');
            return null;
        }
    });

    
    useEffect(() => {
        // setSearchKey('All');
    }, [])
    const CardData = data.map((item,i) => {
        return(
            <View  key={i} style={[i==0? {marginTop: 10} : {marginTop:25}]}>
                <TouchableOpacity  style={{marginTop:15,marginBottom:2}} onPress={() => console.log('pressed')}>
                    <FlagBox style={[
                            uiData[0].label==item.status  ? {backgroundColor:uiData[0].color, borderColor:uiData[0].color} : 'red',
                        ]}
                    >
                        {item.status}
                    </FlagBox>
                    <QuoteSection>
                        <Text>{item.quote_no}</Text>
                        <Text>{item.client_name}</Text>
                        <Text>{item.address}</Text>
                        <Text>{item.amount}</Text>
                    </QuoteSection>
                </TouchableOpacity>
            </View> 
        )
    })
    
    return (
        <View style={ClientStyles.outerBox}>
            <View style={ClientStyles.section}>
                <Text style={[ClientStyles.title,{textAlign:'center'}]}>Search Result</Text>
                <Text style={[ClientStyles.title,{color:'#808490C9'}]}>Quotes</Text>
                 {CardData}
            </View>
        </View>
    )
}

export default SearchQuotes;



/* 
 <View style={{flex:1,  alignItems:'center', justifyContent:'center', marginTop:100, marginBottom:2}}>
    <Text style={{fontSize:40}}>This is search screen</Text>
</View>


  <View  key={i} style={{marginTop:25}}>
    <TouchableOpacity  style={book.BtnBox} onPress={() => console.log('pressed')}>
        <FlagBox style={[
            uiData[0].label==item.status  ? {backgroundColor:uiData[0].color, borderColor:uiData[0].color} : 'red',
            ]}>{item.status}</FlagBox>
        <QuoteSection>
            <Text>{item.quote_no}</Text>
            <Text>{item.client_name}</Text>
            <Text>{item.address}</Text>
            <Text>{item.amount}</Text>
        </QuoteSection>
    </TouchableOpacity>
</View> 
*/







