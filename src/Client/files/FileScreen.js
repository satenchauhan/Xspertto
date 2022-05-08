import React,{useState, useContext} from 'react';
import {Text, View, StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import ClientStyles from '../ClientStyles';
import QuoteSelect from './QuoteSelect';
import { SuperContext } from '../../context/ContextProvider';
import AllQuotes from './AllQuotes';
import SearchQuotes from './SearchQuotes';
import QuoteModal from './QuoteModal';

const quotes="quotes";

const QuoteScreen  = () =>{
    const [tabScreen, setTabScreen] = useState('');
    const {searchKey,setSearchKey} = useContext(SuperContext);

    const showTab = (text) =>{
        setTabScreen(text);
    }
    
    return (
        <View style={ClientStyles.outerBox}>
            <QuoteSelect>{searchKey}</QuoteSelect>
            {searchKey == 'All' ?
                 <AllQuotes />
            :
                <SearchQuotes />
            } 

            <QuoteModal  />
        </View>
    )
}

export {QuoteScreen, quotes};


