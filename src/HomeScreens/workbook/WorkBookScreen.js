import React, {useState, useEffect, useContext} from 'react';
import {SafeAreaView,View,StyleSheet,ScrollView, StatusBar} from 'react-native';
import ButtonSection from './ButtonSection';
import { SuperContext } from '../../context/ContextProvider';

import TabScreenFrame from './TabScreenFrame';
import ContactSearchBox from './wb-contacts/ContactSearchBox';
import { contactScreen, ContactScreen } from './wb-contacts/ContactScreen';
import { requestScreen, RequestScreen } from './wb-requests/RequestScreen';
import RequestSearchBox from './wb-requests/RequestSearchBox';
import { quoteScreen, QuoteScreen } from './wb-quotes/QuoteScreen';
import QuoteSearchBox from './wb-quotes/QuoteSearchBox';
import JobSearchBox from './wb-jobs/JobSearchBox';
import { jobScreen,JobScreen } from './wb-jobs/JobScreen';
import { invoiceScreen, InvoiceScreen } from './wb-invoices/InvoiceScreen';
import InvoiceSearchBox from './wb-invoices/InvoiceSearchBox';


const WorkBookScreen = () => {
    const {setTabColor,setTabName,setWorkBookModal,setTabScreen,wbScreen,setWBScreen} = useContext(SuperContext);

    const showTab = (text) =>{
        setTabScreen(text);  
    }
    
    useEffect(() => {
        setWBScreen('CONTACTS');
        setWorkBookModal(false);
        setTabName('contacts');
        setTabColor('#23BF7E');
    }, []);
    
    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar  backgroundColor='#666666' barStyle="light-content" />  
            <ScrollView stickyHeaderIndices={[0]}>
                <View style={styles.TopSection}>
                    {contactScreen===wbScreen ?
                        <ContactSearchBox />
                    :null}
                    {requestScreen===wbScreen ?
                        <RequestSearchBox  />
                    :null}
                    {quoteScreen===wbScreen ?
                        <QuoteSearchBox  />
                    :null}
                    {jobScreen===wbScreen ?
                        <JobSearchBox  />
                    :null}
                    {invoiceScreen===wbScreen ?
                        <InvoiceSearchBox />
                    :null}

                    <ButtonSection showTab={showTab} />
                </View>
                {/* Tab Screen Frame */}
                <TabScreenFrame>
                    {contactScreen===wbScreen ?
                        <ContactScreen showTab={showTab} />
                    :null}
                    {requestScreen===wbScreen ?
                        <RequestScreen  showTab={showTab} />
                    :null}
                    {quoteScreen===wbScreen ?
                        <QuoteScreen  showTab={showTab} />
                    :null}
                    {jobScreen===wbScreen ?
                        <JobScreen  showTab={showTab} />
                    :null}
                    {invoiceScreen===wbScreen ?
                        <InvoiceScreen showTab={showTab} />
                    :null}
                </TabScreenFrame>   
            </ScrollView> 
        </SafeAreaView>
    )
}


export default  WorkBookScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        // backgroundColor:"#E5E5E5",
        backgroundColor:"#fff",
        // borderWidth:1,
        padding:2
    },
    TopSection:{
        backgroundColor:'#fff', 
    },
      
})


