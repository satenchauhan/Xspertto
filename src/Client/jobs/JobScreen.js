import React,{useState,useEffect,useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AllJobs,jobs } from './AllJobs';
import { filterJob, FilterJobs } from './FilterJobs';
import JobModal from './JobModal';
import SelectTab from '../SelectTab';
import { SuperContext } from '../../context/ContextProvider';
import { OpenJob } from './OpenJob';
import { ClosedJob } from './ClosedJob';


const jobTab ="JOBS";

const JobScreen  = (props) =>{
    const {setTabScreen, screenName, setScreenName} = useContext(SuperContext);

    useEffect(() => {
        setScreenName('All');
        setTabScreen('JOBS');
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
                <AllJobs />
            :null}
            {screenName==='Open' ?
                <OpenJob />
            :null}
             {screenName==='Closed' ?
                <ClosedJob />
            :null}
            {screenName==='Filter' ?
                <FilterJobs msg={jobs} showScreen={props.showScreen} />
            :null}
           <JobModal  showScreen={props.showScreen} />
        </View>   
    )
}

export {JobScreen, jobTab};

const Styles = StyleSheet.create({
    outerBox:{
        backgroundColor:"#F5F5F5",  
        padding:1.5,
        marginBottom:10,
    },
    
})

