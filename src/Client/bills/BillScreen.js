import React,{useEffect, useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import { AllBills, bills } from './AllBills';
import { search, FilterBill } from './FilterBill';
import BillModal from './BillModal';
import SelectTab from '../SelectTab';
import { SuperContext } from '../../context/ContextProvider';
import { Payments } from './Payments';

const billingTab ="BILLING";

const BillScreen  = (props) =>{
    const {setTabScreen, screenName, setScreenName} = useContext(SuperContext);

    useEffect(() => {
        setScreenName('Invoices');
        setTabScreen('INVOICES');
    }, []);
    
    return (
        <View  style={Styles.outerBox}>
           <SelectTab>
               {'Invoices'}
               {'Payments'}
               {'Filter'}
            </SelectTab>
            {screenName==='Invoices' ?
                <AllBills />
            :null}
            {screenName==='Payments' ?
                <Payments />
            :null}
            {screenName==='Filter' ?
                <FilterBill msg={bills} showScreen={props.showScreen} />
            :null}
           <BillModal showScreen={props.showScreen} />
        </View>   
    )
}

export {BillScreen, billingTab};

const Styles = StyleSheet.create({
    outerBox:{
        backgroundColor:"#F5F5F5",  
        padding:1.5,
        marginBottom:10,
    },
    
})

