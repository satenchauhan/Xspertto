import React,{useState,useEffect,useContext} from 'react';
import {ScrollView,Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import ClientTabs from './ClientTabRoutes';
import { SuperContext } from '../context/ContextProvider';


const ClientTabsButton = (props) => {
    const [tabName, setTabName] = useState('');
    const [scrollView, setScrollView] = useState('');
    const [viewLayout, setViewLayout] = useState([]);
    const {setClientScreen,setClientTabScreen,setTabColor} = useContext(SuperContext);

    const l = ClientTabs.length;
    const len = l+1;

    const setLayout = (event,num) =>{
        const layout = event.nativeEvent.layout;
        viewLayout[num] = layout.x;
        setViewLayout(viewLayout); 
    }
   

    const showTabScreen = (text,color,tab) =>{
        setTabName(text);
        setClientScreen(tab);
        setTabColor(color);
        props.showScreen(tab);
    }
    useEffect(() => {
        setClientScreen('INFO');
        setClientTabScreen('INFO');
        setTabColor('#23BF7E');
    }, []);

    const Client_Tabs = ClientTabs.map((item, i) => {
        return(
            <TouchableHighlight key={i} activeOpacity={0.2} underlayColor="#fff"
                style={[
                    item.key === tabName  ? styles.customBtn :styles.defaultBtn, 
                    item.key === 'bills' ? styles.billBtn : styles.defaultBtn, 
                ]}
                onPress={() => showTabScreen(item.key,item.color,item.tab)}
                onLayout={(event) => {setLayout(event, len)}}
            >
                <Text style={[
                        styles.btnName,item.key === tabName ? {color:item.color, fontWeight:'bold'} : {color:'black'}
                    ]}
                >
                    {item.tab}
                </Text>
            </TouchableHighlight>
        ) 
    })


    useEffect(() => {
        setTabName('info');
        showTabScreen('info');
        setClientScreen('INFO');
    }, []);

    return (
        <View style={[styles.tabSection]}>
            <ScrollView horizontal={true} ref={(scrollView) => {setScrollView(scrollView)}}>
                <View style={{flex:1, flexDirection:'row'}}>
                    {Client_Tabs}
                </View>
            </ScrollView>
        </View>
    )
}

export default ClientTabsButton;

const styles = StyleSheet.create({
    tabSection:{
        flex:1, 
        backgroundColor:'#fff',
        marginTop:0.5,  
        // paddingBottom:10,
        height:50,
    },
    infoBtn:{
        // marginTop:5, 
        marginLeft:0,
        borderWidth:2,  
        borderRadius:5,
        borderColor:"#B4B1B1",
        borderTopWidth:2,
        borderLeftWidth:2,
        borderRightWidth:0,
    },
    defaultBtn:{
        // marginTop:5, 
        marginLeft:-7,
        borderWidth:2,  
        borderRadius:5,
        borderColor:"#B4B1B1",
        borderTopColor:"#B4B1B1",
        borderTopWidth:2,
        borderLeftWidth:2,
        borderRightWidth:0,
    },
    customBtn:{
        marginTop:0, 
        marginLeft:-6,
        borderWidth:2,  
        borderRadius:5,
        borderBottomLeftRadius:0,
        borderBottomRightRadius:0,
        borderLeftColor:"#B4B1B1",
        borderRightColor:"#B4B1B1",
        borderTopColor:"#B4B1B1",
        borderBottomColor:"#fff",
        borderTopWidth:2,
        borderRightWidth:0,
    },
    infoCustomBtn:{
        borderLeftWidth:2,
        borderTopWidth:2, 
        borderTopLeftRadius:5, 
        borderColor:'#B4B1B1'
    },
    billBtn:{
        borderRightWidth:2,
        borderTopWidth:2, 
        borderTopLeftRadius:5, 
        borderColor:'#B4B1B1'
    },
    btnName:{
        padding:8,
        paddingRight: 13,
        paddingLeft:13,
        textAlign:'center',
        fontSize:16, 
        fontFamily:'RobotoCondensed-Bold',
        lineHeight:30
    },  
});
