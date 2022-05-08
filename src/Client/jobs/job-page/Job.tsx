import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet,ScrollView,ViewStyle, Button } from 'react-native';
import { SuperContext } from '../../../context/ContextProvider';
import {FloatButton} from '../../../components/buttons/buttons';
import { BottomSheetContent } from '../../../components/bottom-sheet';
import { NoteScreen } from '../../notes/NoteScreen';
import { StatusBar } from 'expo-status-bar';
import ClientLocationImage from '../../ClientLocationImage';
// import LineItem from './JobLineItem';
import JobTabs from './JobTabs';
import TopSection from './TopSection';
import TotalSection from './TotalSection';
import FloatModal from './FloatModal';
// import Detail from '../job-page/details/index';
import Note from './Note';
import Payment from './Payment';
import Sheetmodal from './sheet-modal';
import Detail from './details/Detail';


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


const Job = () => {


    return (
        <View style={{flex:1}}>
            <StatusBar backgroundColor='#5A155B'  style='light'/>
            <ScrollView style={{flex:1}}  horizontal={false}>
                <ClientLocationImage cliImage={require('../../../assets/images/propImage.png')} />
                <TopSection />
                <View style={QtStyles.outer}>
                    <JobTabs />
                    <View style={QtStyles.headBox}><Text>{' '}</Text></View>
                </View>
                {/* <LineItem /> */}
                <Detail />
                {/* <Note /> */}
                {/* <Payment /> */}
            </ScrollView>
            <BottomSheetContent content={<Sheetmodal />}  />
        </View>
        
    );

}

export default Job;

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