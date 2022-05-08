import 'react-native-gesture-handler';
import React, {useState, useEffect, useMemo} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeTabNavigation } from './src/navigations/HomeTabNavigation';
import WelcomeStackScreen from './src/navigations/WelcomeStackScreen';
import MainTabScreen from './src/navigations/MainTabScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SuperProvider, { SuperContext } from './src/context/ContextProvider';


const App =() => {
    const [user, setUser] = useState({isLoggedIn:false, uid:null, name:null, email:null, photoUrl:null, token:null});
    const [hide, setHide] = useState(false);
    const [tabName, setTabName] = useState('');
    const [screenName, setScreenName] = useState('');
    const [tabColor, setTabColor] = useState('');
    const [tabScreen, setTabScreen] = useState('');
    const [wbScreen, setWBScreen] = useState('');
    const [WorkBookModal, setWorkBookModal] = useState(false);
    const [clientFilterModal,setClientFilterModal,] = useState(false);
    const [selectContactKey, setSelectContactKey] = useState();
    const [selectRequestKey,setSelectRequestKey] = useState();
    const [selectQuoteKey, setSelectQuoteKey] = useState();
    const [selectJobKey,setSelectJobKey] = useState();
    const [selectInvoiceKey,setSelectInvoiceKey] = useState();
    const [ClientModal, setClientModal] = useState(false);
    const [tabKey, setTabKey] = useState('All');

    const [clientTabScreen, setClientTabScreen] = useState('');
    const [ClientScreen, setClientScreen] = useState('');
    
    const [convertModal,setConvertModal] = useState(false);
    const [flagModal,setFlagModal] = useState(false);
    const [flagKey, setFlagKey]  = useState('');
    const [flagColor, setFlagColor] = useState('');
    const [linkModal,setLinkModal] = useState(false);
    const [linkKey,setLinkKey] = useState('');

    const [previewModal, setPreviewModal] = useState(false)
    const [floatModal,setFloatModal] = useState(false);
    const [cameraModal, setCamereModal] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [addBtn, setAddBtn] = useState('');
    const [addVal, setAddVal] = useState(null);
    
    const config = {
      screens: { 
          ProfileScreen: 'profile',
      },
    };
    const linking = {
        prefixes: ['onequoteapp://'],
        config,
    } 
    
    return (
        <SuperContext.Provider value={{
              user,setUser, 
              hide, setHide, 
              tabName, setTabName,
              screenName, setScreenName,
              tabScreen, setTabScreen,
              tabColor, setTabColor,
              wbScreen, setWBScreen,
              WorkBookModal, setWorkBookModal, 
              clientFilterModal,setClientFilterModal,
              ClientModal, setClientModal, 
              selectContactKey, setSelectContactKey,
              selectRequestKey,setSelectRequestKey,
              selectQuoteKey, setSelectQuoteKey,
              selectJobKey,setSelectJobKey,
              selectInvoiceKey,setSelectInvoiceKey,
              tabKey, setTabKey,
              clientTabScreen, setClientTabScreen,
              ClientScreen, setClientScreen,
              convertModal,setConvertModal,
              flagModal, setFlagModal,
              flagKey, setFlagKey,
              flagColor, setFlagColor,
              linkModal, setLinkModal,
              linkKey, setLinkKey,
              previewModal, setPreviewModal,
              floatModal,setFloatModal,
              cameraModal, setCamereModal,
              showModal, setShowModal,
              addBtn, setAddBtn,
              addVal, setAddVal 
          }}
        >
            <NavigationContainer >
                <MainTabScreen  /> 
            </NavigationContainer>
        </SuperContext.Provider> 
    );
}

export default App;

/* 
{user.isLoggedIn === false ?
    <WelcomeStackScreen />
:
    <MainTabScreen  /> 
} 
*/