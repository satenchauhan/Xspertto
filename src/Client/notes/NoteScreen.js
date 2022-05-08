import React,{useContext,useEffect} from 'react'
import { StyleSheet, View } from 'react-native'
import { SuperContext } from '../../context/ContextProvider';
import AllNotes from './AllNotes';


const noteTab = 'NOTES';

const NoteScreen = () => {
    const {setClientScreen} = useContext(SuperContext);

    useEffect(() => {
        setClientScreen('NOTES');
    }, []);

    return (
        <View  style={Styles.outerBox}>
            <AllNotes name={"Notes"} />
        </View>
    )
}

export {NoteScreen, noteTab};

const Styles = StyleSheet.create({
    outerBox:{
        flex:1,
        backgroundColor:"#F5F5F5",  
    },
    
})
