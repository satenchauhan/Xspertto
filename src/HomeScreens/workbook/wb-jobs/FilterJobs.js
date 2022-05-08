import React,{useEffect, useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import jobs_data from '../../../components/common/JobsDatas';
import JobSection from '../../../components/common/JobSection';
import FlagBox from '../../../components/common/FlagBox';
import TopHeadLine from '../../../components/common/TopHeadLine';
import DateBox from '../../../components/common/DateBox';
import { SuperContext } from '../../../context/ContextProvider';
import Notfound from '../../../components/common/NotFound';


const  filterJob = "filter";

const  FilterJobs  = (props) =>{
    const {selectJobKey} = useContext(SuperContext);

    const data = jobs_data.filter((item) => {
        return item.status === selectJobKey;
    });

    const CardData = data.map((item, i) => {
        return(
            <View key={i} style={[i==0 ? {marginTop:10} : {marginTop:30}]}>
                <TouchableOpacity activeOpacity={0.8} underlayColor='#fff' onPress={() => console.log("Quote#1")}>
                <TopHeadLine>{item.status}</TopHeadLine>
                <FlagBox style={{borderTopRightRadius: 8, borderBottomLeftRadius: 4}}>{item.status}</FlagBox>
                <JobSection>
                    <Text>
                        {item.created_on[0].substring(0,3) +",\n"+item.created_on[1].substring(0,3)+","+item.created_on[2]}
                    </Text>
                    <Text>{item.job_id} {' : '}{item.title}</Text>
                    <Text>{item.amount}</Text>
                    <Text>{item.address}</Text>
                </JobSection> 
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
    
});

export {FilterJobs, filterJob};









