import React,{useState,useEffect,useRef} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QuotesDatas from '../../../components/common/QuotesDatas';
import FlagBox from '../../../components/common/FlagBox';
import QuoteSection from '../../../components/common/QuoteSection';
import TopHeadLine from '../../../components/common/TopHeadLine';
import DateBox from '../../../components/common/DateBox';


const quotes ="quotes";

const AllQuotes = () => {

    const requestData = QuotesDatas.map((data, i) => {
        if(data.status ==='request'){
            return(
            <View key={i} style={[i==0 ? {marginTop: 10} : {marginTop:30}]}>
                <TouchableOpacity activeOpacity={0.8} underlayColor='#fff' onPress={() => console.log("Quote#1")}>
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
                <View key={i} style={{marginTop:30}}>
                    <TouchableOpacity activeOpacity={0.8} underlayColor='#fff' onPress={() => console.log("Quote#1")}>
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
        marginTop:60,  
    },
    title:{
        fontSize:20, 
        lineHeight:23.44, 
        fontWeight:'700',
        marginLeft:7
    },
    
})

/* 
<View style={Styles.section}>
    <Text style={[Styles.title,{color:'#808490C9'}]}>Recent Quotes</Text>
    {quotesDatas.map((data, i) => 
            <View key={i} style={[i==0? {marginTop: 10} : {marginTop:25}]}>
                <TouchableOpacity  style={{marginTop:15,marginBottom:2}} onPress={() => console.log("Quote#1")}>
                    <FlagBox>{data.status}</FlagBox>
                    <QuoteSection>
                        <Text>{data.quote_no}</Text>
                        <Text>{data.client_name}</Text>
                        <Text>{data.address}</Text>
                        <Text>{data.amount}</Text>
                    </QuoteSection>
                </TouchableOpacity>
            </View>
        )} 
</View>
*/
