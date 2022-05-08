import React,{useState, useContext} from 'react';
import {Text, View, StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FlagBox from '../../components/common/FlagBox';
import QuoteSection from '../../components/common/QuoteSection';
import ClientStyles from '../ClientStyles';
import quotes_data from './DamiQuotes';
import Items from '../../components/common/SelectItems';
import { SuperContext } from '../../context/ContextProvider';


const AllFiles  = () =>{
    const [showModal, setShowModal] = useState(false);
    const {searchKey,setSearchKey} = useContext(SuperContext);

    return (
        <View style={ClientStyles.section}>
            <Text style={[ClientStyles.title]}>Recent Quotes</Text>
            {quotes_data.map((data, i) => 
                <View key={i} style={{marginTop:25}}>
                    <TouchableOpacity  style={ClientStyles.BtnBox} onPress={() => console.log("Quotes")}>
                        <FlagBox style={[
                                Items[i].label==data.status ? {backgroundColor: Items[i].color, borderColor: Items[i].color} : 'red',
                            ]}
                        >
                                {data.status}
                        </FlagBox>
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
    )
}

export default AllQuotes;


