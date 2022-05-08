import React,{useState,useEffect,useRef} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import invoices_data from '../../../components/common/InvoicesDatas';
import InvoiceSection from '../../../components/common/InvoiceSection';
import FlagBox from '../../../components/common/FlagBox';
import TopHeadLine from '../../../components/common/TopHeadLine';



const openInvoices ="openInvoices";

const OpenInvoice = () => {
        return(
            <View style={Styles.section}>
                {invoices_data.map((data, i) => 
                    data.status ==='request' || data.status ==='draft' || data.status ==='awaiting payment' || data.status ==='open account' ? 
                    <View key={i} style={[i==0 ? {marginTop:10} : {marginTop:30}]}>
                        <TouchableOpacity activeOpacity={0.8} underlayColor='#fff' onPress={() => console.log("Quote#1")}>
                            <TopHeadLine>{data.status}</TopHeadLine>
                            <FlagBox style={{borderTopRightRadius: 8, borderBottomLeftRadius: 4}}>{data.status}</FlagBox>
                            <InvoiceSection>
                                <Text>
                                    {data.created_on[0].substring(0,3) +",\n"+data.created_on[1].substring(0,3)+","+data.created_on[2]}
                                </Text>
                                <Text>{data.invoice_id} {' : '}{data.title}</Text>
                                <Text>{data.amount}</Text>
                                <Text>{data.address}</Text>
                            </InvoiceSection> 
                        </TouchableOpacity>
                    </View>
                    :null
                )}  
            </View>
        )
}

export {OpenInvoice, openInvoices};

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
    
});

