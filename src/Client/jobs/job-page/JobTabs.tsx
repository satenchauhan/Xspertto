import React,{useState} from 'react'
import { StyleSheet, Text, View,TouchableHighlight } from 'react-native';
import JobRoutes from './JobTabRoutes';



const JobTabs = () => {
    const [quoteTabName, setQuoteTabName] = useState('');

    const showTabScreen =(value) => {
        setQuoteTabName(value);
    }
    
    return (
        <View style={tabStyles.tabBox}>
            <View style={tabStyles.BtnBox}>
                { JobRoutes.map((item, i) => 
                <TouchableHighlight key={i} activeOpacity={0.2} underlayColor="#fff"
                    onPress={() => showTabScreen(item.key)}
                    style={[item.key=== quoteTabName ? tabStyles.activeBtn : tabStyles.defaultTabs,
                        item.key==='paytm' ? {borderRightWidth:1, borderBottomLeftRadius:0} : {},
                    ]} 
                >
                    <Text 
                        style={[tabStyles.btnName,item.key=== quoteTabName ? {color:'#FFFFFF'} : {color:'#050505'}]}
                    >
                        {item.tab}
                    </Text>
                </TouchableHighlight>
                )}
            </View>
        </View>
    )
}

export default JobTabs

const tabStyles = StyleSheet.create({
    tabBox:{
        flex:1,
        backgroundColor:"#FFFEFB", 
        // backgroundColor:'#676D8F'
    },
    BtnBox:{
        // flex:1,
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent: 'center',
        height:42, 
        marginLeft:6.9
    },
    defaultTabs:{
        flex:1,
        marginLeft:-7,
        borderWidth:1,  
        borderRadius:4,
        borderColor:"#B4B1B1",
        borderRightWidth:0,
    },
    activeBtn:{
        flex:1,
        marginLeft:-7,
        backgroundColor:'#676D8F',
        borderWidth:1,  
        borderRadius:4,
        borderColor:"#676D8F",
        borderBottomLeftRadius:0,
        borderBottomRightRadius:0,
        zIndex:3
    },
    fileBorder:{
        borderRightWidth:1,
        borderBottomRightRadius:0
    },
    btnName:{
        fontFamily:'Roboto-Bold',
        fontSize:16,
        textAlign:'center',
        height:42,
        lineHeight:42
    },  
})
