import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet,ScrollView,ViewStyle, Button } from 'react-native';
import { SuperContext } from '../../context/ContextProvider';
import { StatusBar } from 'expo-status-bar';
import ClientLocationImage from '../ClientLocationImage';
import LineItem from './LineItem';
import QuoteTabs from './QuoteTabs';
import TopSection from './TopSection';
import TotalSection from './TotalSection';
import {FloatButton} from '../../components/buttons/buttons';
import FloatModal from './FloatModal';
import Detail from './Detail';
import { NoteScreen } from '../notes/NoteScreen';
import Note from './Note';
import Payment from './Payment';
import Sheetmodal from './sheet-modal';
import { BottomSheetContent } from '../../components/bottom-sheet';




const outerStyle: ViewStyle ={
    borderWidth:1, 
    borderColor:'rgba(0,0,0,0.5)', 
    borderRadius:10, 
    shadowRadius: 4,
    shadowOffset: {
        width: 0,
        height: -10,
    },
    shadowColor: '#000000',
    elevation: 5,
}


const Quote = () => {


    return (
        <View style={{flex:1}}>
            <StatusBar backgroundColor='#ECB22E'  style='light'/>
            <ScrollView style={{flex:1}}  horizontal={false}>
                <ClientLocationImage cliImage={require('../../assets/images/propImage.png')} />
                <TopSection />
                <View style={QtStyles.outer}>
                    <QuoteTabs />
                    <View style={QtStyles.headBox}><Text>{' '}</Text></View>
                </View>
                <LineItem />
                {/* <Detail /> */}
                {/* <Note /> */}
                {/* <Payment /> */}
            </ScrollView>
            <BottomSheetContent content={<Sheetmodal />}  />
        </View>
        
    );

}

export default Quote;

const QtStyles = StyleSheet.create({
    outer:{
        flex:1,
        paddingHorizontal:0,
        // backgroundColor:'#676D8F',
        borderRadius:8,
    },  
    headBox:{
        backgroundColor:'#676D8F', 
    }
});


/* 
<View style={{position:'absolute', bottom:50}}>
    <FloatModal />
</View>
*/