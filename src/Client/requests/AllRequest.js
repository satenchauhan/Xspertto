import React,{useState,useEffect,useRef} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RequestDatas from '../../components/common/RequestDatas';
import FlagBox from '../../components/common/FlagBox';
import RequestSection from '../../components/common/RequestSection';
import TopHeadLine from '../../components/common/TopHeadLine';


const requests ="requests";

const AllRequest = () => {
    return (
        <View style={Styles.section}>
            {RequestDatas.map((data, i) => 
                <View key={i} style={[i==0 ? {marginTop: 10} : {marginTop:30}]}>
                    <TouchableOpacity activeOpacity={0.8} underlayColor='#fff' onPress={() => console.log("Quote#1")}>
                        <TopHeadLine>{data.status}</TopHeadLine>
                        <FlagBox style={{borderTopRightRadius: 4, borderBottomLeftRadius: 4}}>{data.status}</FlagBox>
                        <RequestSection>
                            <Text>
                                {data.created_on[0].substring(0,3) +",\n"+data.created_on[1].substring(0,3)+","+data.created_on[2]}
                            </Text>
                            <Text>{data.client_name}</Text>
                        </RequestSection> 
                    </TouchableOpacity>
                </View>
            )}  
        </View>
    )
}

export {AllRequest, requests};

const Styles = StyleSheet.create({
    section:{
        flex:1,
        alignSelf:'center',
        width:'98%',
        marginTop:50,  
    },
    title:{
        fontSize:20, 
        lineHeight:23.44, 
        fontWeight:'700',
        marginLeft:7
    },   
})




