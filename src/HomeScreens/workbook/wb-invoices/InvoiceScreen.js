import React,{useEffect, useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import { AllInvoices, invoices } from './AllInvoices';
import { search, FilterInvoices } from './FilterInvoices';
import InvoiceModal from './InvoiceModal';
import SelectTab from '../SelectTab';
import { OpenInvoice } from './OpenInvoice';
import { closedInvoice,ClosedInvoice } from './ClosedInvoice';
import { SuperContext } from '../../../context/ContextProvider';

const invoiceScreen ="INVOICES";

const InvoiceScreen  = (props) =>{
    const {setTabScreen, screenName, setScreenName,} = useContext(SuperContext);

    useEffect(() => {
        setScreenName('All');
        setTabScreen('invoices');
    }, [])
    return (
        <View  style={Styles.outerBox}>
           <SelectTab>
               {'All'}
               {'Open'}
               {'Closed'}
               {'Filter'}
            </SelectTab>
            {screenName==='All' ?
                <AllInvoices />
            :null}
            {screenName==='Open' ?
                <OpenInvoice />
            :null}
             {screenName==='Closed' ?
                <ClosedInvoice />
            :null}
            {screenName==='Filter' ?
                <FilterInvoices msg={invoices} showTab={props.showTab} />
            :null}
           <InvoiceModal  showTab={props.showTab} />
        </View>   
    )
}

export {InvoiceScreen, invoiceScreen};

const Styles = StyleSheet.create({
    outerBox:{
        backgroundColor:"#F5F5F5",  
        padding:1.5,
        marginBottom:10,
    },
    
})

