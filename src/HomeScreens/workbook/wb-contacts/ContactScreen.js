import React,{useState,useEffect,useContext} from 'react';
import {View,Text, StyleSheet, Dimensions} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../../components/common/colors';
import {AllContacts,contacts} from './AllContacts';
import { search, FilterContact } from './FilterContact';
import ContactModal from './ContactModal';
import { SuperContext } from '../../../context/ContextProvider';
import SelectTab from '../SelectTab';


const contactScreen ='CONTACTS';

const ContactScreen  = (props) =>{
    const {setTabScreen,screenName, setScreenName} = useContext(SuperContext);
    
    
    useEffect(() => {
        setTabScreen('contacts');
        setScreenName('All')
    }, []);

    return (
        <View  style={Styles.outerBox}>
            <SelectTab  msg={contacts}>
               {'All'}
               {'Filter'}
            </SelectTab>
            {screenName==='All' ?
                <AllContacts />
            :null}
            {screenName==='Filter' ?
                <FilterContact msg={contacts} />
            :null}
            <ContactModal  showTab={props.showTab} />
        </View>   
    )
}

export {ContactScreen, contactScreen};

const Styles = StyleSheet.create({
    outerBox:{
        flex:1,
        backgroundColor:"#F5F5F5",  
        // padding:1.5,
    },
    
    
})

