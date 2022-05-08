import React,{useState, useEffect, useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity,} from 'react-native';
import FlagBox from '../../components/common/FlagBox';
import QuoteSection from '../../components/common/QuoteSection';
import Items from '../../components/common/SelectItems';
import { SuperContext } from '../../context/ContextProvider';
import quotes_data from '../DamiData';
import ClientStyles from '../ClientStyles';


const  search = "search";

const  SearchScreen  = () =>{
    
    const {searchKey,setSearchKey} = useContext(SuperContext);
    const data = quotes_data.filter((item) => {
        return item.status === searchKey;
    });

    const uiData = Items.filter((item) => {
        return item.label === data[0].status;
    });
     
    const CardData = data.map((item,i) => {
        return(
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
        )
    })
    
    return (
        <View style={ClientStyles.outerBox}>
            <View style={ClientStyles.section}>
                <Text style={[ClientStyles.title]}>Search Result</Text>
                <Text style={[ClientStyles.title,{color:'#808490C9'}]}>Quotes</Text>
                 {CardData}
            </View>
        </View>
    )
}

export {SearchScreen, search};



/* 
 <View style={{flex:1,  alignItems:'center', justifyContent:'center', marginTop:100, marginBottom:2}}>
    <Text style={{fontSize:40}}>This is search screen</Text>
</View>


 {data.map((item, i) =>
<View  key={i} style={{marginTop:25}}>
    <TouchableOpacity  style={book.BtnBox} onPress={() => console.log('pressed')}>
        <FlagBox style={[
            Items[i].label==item.status  ? {backgroundColor: Items[i].color, borderColor: Items[i].color} : 'red',
            ]}>{item.status}</FlagBox>
        <QuoteSection>
            <Text>{item.quote_no}</Text>
            <Text>{item.client_name}</Text>
            <Text>{item.address}</Text>
            <Text>{item.amount}</Text>
            </QuoteSection>
            </TouchableOpacity>
        </View> 
        )}
*/







