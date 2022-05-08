import React,{useState, useEffect, useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import quotesDatas from '../../components/common/QuotesDatas';
import FlagBox from '../../components/common/FlagBox';
import QuoteSection from '../../components/common/QuoteSection';
import TopHeadLine from '../../components/common/TopHeadLine';
import DateBox from '../../components/common/DateBox';
import { SuperContext } from '../../context/ContextProvider';
import Notfound from '../../components/common/NotFound';


const  search = "search";

const  FilterQuotes  = (props) =>{
    const {selectQuoteKey} = useContext(SuperContext);

    const data = quotesDatas.filter((item) => {
        return item.status === selectQuoteKey;
    });
    
    
    const CardData = data.map((item, i) => {
        return(
            <View key={i} style={[i==0? {marginTop: 10} : {marginTop:25}]}>
                <TouchableOpacity activeOpacity={0.8} underlayColor='#fff' style={{marginTop:15,marginBottom:2}} onPress={() => console.log("Quote#1")}>
                    <TopHeadLine>{item.status}</TopHeadLine>
                    <FlagBox style={{borderTopRightRadius: 8, borderBottomLeftRadius: 4}}>{item.status}</FlagBox>
                    <QuoteSection>
                        <Text>
                            {item.created_on[0].substring(0,3) +",\n"+item.created_on[1].substring(0,3)+","+item.created_on[2]}
                        </Text>
                        <Text>{item.quote_no.substring(0,1).toUpperCase()+item.quote_no.substring(1)} {' : '}{item.title}</Text>
                        <Text>{item.amount}</Text>
                    </QuoteSection> 
                </TouchableOpacity>
            </View>
        )
    })


    return (
        <View style={Styles.section}>
            {CardData.length < 1 ? 
                <Notfound>{props.msg}</Notfound>
            : 
                CardData
            }
        </View>
    )
}

export {FilterQuotes, search};
const Styles = StyleSheet.create({
    section:{
        flex:1,
        alignSelf:'center',
        width:'98%',
        marginTop:60, 
    },
    title:{
        fontSize:20, 
        lineHeight:23.44, 
        fontWeight:'700',
        marginLeft:7
    },

})









