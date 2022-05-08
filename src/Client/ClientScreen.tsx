import React,{useState,useEffect,useContext} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Info, infoTab } from './info/Info';
import { RequestScreen, requestTab } from './requests/RequestScreen';
import { NoteScreen, noteTab } from './notes/NoteScreen';
import { QuoteScreen, quoteTab } from './quotes/QuoteScreen';
import { JobScreen, jobTab } from './jobs/JobScreen';
import { BillScreen, billingTab } from './bills/BillScreen';
import TabScreenBox from './TabScreenBox';
import ClientLocationImage from './ClientLocationImage';
import ClientDetails from './ClientDetails';
import { SuperContext } from '../context/ContextProvider';



const  ClientScreen = () => {
    const {
        setClientFilterModal,
        setClientTabScreen,
        ClientScreen,
        setClientScreen,
        setTabColor
    } = useContext(SuperContext);

    const showScreen = (text) =>{
        setClientTabScreen(text);
    };
    
    useEffect(() => {
        setClientScreen('INFO');
        setClientFilterModal(false);
        setClientTabScreen('INFO');
        setTabColor('#23BF7E');
    }, []);
    
    return (
        <SafeAreaView style={{flex:1, backgroundColor: '#fff',}}>
            <StatusBar backgroundColor='#23BF7E'  style='light'/>
            <ScrollView horizontal={false} stickyHeaderIndices={[1]}>
                <ClientLocationImage cliImage={require('../assets/images/cli-image.jpg')}/>
                <ClientDetails showScreen={showScreen} />
                <View style={{margin:2}}></View>
                <TabScreenBox>
                    {infoTab===ClientScreen ?
                        <Info showScreen={showScreen} />
                    :null}
                    {requestTab===ClientScreen ?
                        <RequestScreen  showScreen={showScreen} />
                    :null}
                    
                    {quoteTab===ClientScreen ?
                        <QuoteScreen  showScreen={showScreen} />
                    :null}
                   
                    {jobTab===ClientScreen ?
                        <JobScreen  showScreen={showScreen} />
                    :null}
                    
                    {billingTab===ClientScreen ?
                         <BillScreen showScreen={showScreen} />
                    :null}
                    
                    {noteTab===ClientScreen ?
                        <NoteScreen showScreen={showScreen} />
                    :null} 
                </TabScreenBox>
           </ScrollView>
        </SafeAreaView>
    );
}


export default ClientScreen;




/* 
const fetchApi =  () => {
    try {
            axios.get('https://api.getonequote.com/clients')
            .then((res) => {
                console.log(res.data[0].client_name)
            setData({
                client_id: res.data[0].client_id, 
                clientName: res.data[0].client_name, 
                mainEmail: res.data[0].main_email, 
                mainPhone: res.data[0].main_phone,
                businessName: res.data[0].business_name,
                mainAddress: res.data[0].main_address,
                bill_address: res.data[0].billing_address,
                balance: res.data[0].balance,
                accountType: res.data[0].account_type,
                assignedTo: res.data[0].assigned_to,
            });
            }).catch((err) => {
                console.log(err)
            })
        
        } catch (error) {
            console.log(error.message);
        }
};

*/

/* 
const [data, setData] = useState({
        client_id:'', 
        clientName:'', 
        mainEmail:'', 
        mainPhone:'', 
        businessName:'', 
        mainAddress:'', 
        bill_address:'', 
        balance:'', 
        accountType:'',
        assignedTo:'',
    });
*/
