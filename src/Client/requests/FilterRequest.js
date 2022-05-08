import React,{useState, useEffect, useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RequestDatas from '../../components/common/RequestDatas';
import FlagBox from '../../components/common/FlagBox';
import RequestSection from '../../components/common/RequestSection';
import TopHeadLine from '../../components/common/TopHeadLine';
import { SuperContext } from '../../context/ContextProvider';
import Notfound from '../../components/common/NotFound';


const  search = "search";

const  FilterRequest  = (props) =>{
    const {selectRequestKey} = useContext(SuperContext);

    const data = RequestDatas.filter((item) => {
        return item.status === selectRequestKey;
    });
    
     
    const CardData = data.map((data, i) => {
        return(
            <View key={i} style={[i==0 ? {marginTop: 10} : {marginTop:25}]}>
                <TouchableOpacity activeOpacity={0.8} underlayColor='#fff' style={{marginTop:15,marginBottom:2}} onPress={() => console.log("Quote#1")}>
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

export {FilterRequest, search};

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









