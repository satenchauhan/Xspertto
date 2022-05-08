import React,{useState,useEffect,useRef} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QuotesDatas from '../../components/common/QuotesDatas';
import FlagBox from '../../components/common/FlagBox';
import QuoteSection from '../../components/common/QuoteSection';
import TopHeadLine from '../../components/common/TopHeadLine';



const quotes ="quotes";

const AllQuotes = () => {
    const navigation = useNavigation();
    const quoteScreen = () => navigation.navigate('QuotePage');

    
    const requestData = QuotesDatas.map((data, i) => {
        if(data.status ==='request'){
            return(
            <View key={i} style={[{marginTop:20}]}>
                <TouchableOpacity activeOpacity={0.8} underlayColor='#fff' onPress={quoteScreen}>
                    <FlagBox style={{borderTopRightRadius: 8, borderBottomLeftRadius: 4}}>{data.status}</FlagBox>
                    <QuoteSection>
                        <Text>
                            {data.created_on[0].substring(0,3) +",\n"+data.created_on[1].substring(0,3)+","+data.created_on[2]}
                        </Text>
                        <Text>{data.quote_no.substring(0,1).toUpperCase()+data.quote_no.substring(1)} {' : '}{data.title}</Text>
                        <Text>{data.amount}</Text>
                    </QuoteSection> 
                </TouchableOpacity>
            </View>
            )
            }else{
            return null;
        }
    })
    return (
        <View style={Styles.section}>
            <TopHeadLine>{'request'}</TopHeadLine>
            {requestData}
            {QuotesDatas.map((data, i) => 
                data.status !=='request' ?
                <View key={i} style={[{marginTop:20}]}>
                    <TouchableOpacity activeOpacity={0.8} underlayColor='#fff'  onPress={()=>navigation.navigate('Quote')}>
                        <TopHeadLine>{data.status}</TopHeadLine>
                        <FlagBox style={{borderTopRightRadius: 8, borderBottomLeftRadius: 4}}>{data.status}</FlagBox>
                        <QuoteSection>
                            <Text>
                                {data.created_on[0].substring(0,3) +",\n"+data.created_on[1].substring(0,3)+","+data.created_on[2]}
                            </Text>
                            <Text>{data.quote_no.substring(0,1).toUpperCase()+data.quote_no.substring(1)} {' : '}{data.title}</Text>
                            <Text>{data.amount}</Text>
                        </QuoteSection> 
                    </TouchableOpacity>
                </View>
                :null
            )}  
        </View>
    )
}

export {AllQuotes, quotes};

const Styles = StyleSheet.create({
    section:{
        flex:1,
        alignSelf:'center',
        width:'98%',
        marginTop:50,  
    },
    
});
