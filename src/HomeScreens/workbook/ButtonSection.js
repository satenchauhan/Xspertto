import React,{useState,useEffect,useRef, useContext} from 'react';
import {ScrollView,Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import TabRoutes from './TabRoutes';
import { SuperContext } from '../../context/ContextProvider';


const ButtonSection = (props) => {
    const [scrollView, setScrollView] = useState('');
    const [viewLayout, setViewLayout] = useState([]);
    const {tabName, 
        setTabName,
        setTabColor, 
        setWBScreen,
        setSelectContactKey,
        setSelectRequestKey,
        setSelectJobKey,
        setSelectQuoteKey
    
    } = useContext(SuperContext);
   
    const l = TabRoutes.length;
    const len = l+1;
    const index =0;
    
    
    const setLayout = (event,num) =>{
        const layout = event.nativeEvent.layout;
        viewLayout[num] = layout.x;
        setViewLayout(viewLayout); 
    }
    const getTab = (text,color,title) =>{
        props.showTab(text);
        setTabName(text);
        setTabColor(color);
        // setSearchKey('All');
        setWBScreen(title);
        if(text=='jobs' && viewLayout.length > len){
            scrollView.scrollTo({
                x: viewLayout[len],
                y: 0,
                animated: true,
            })
            setSelectJobKey('All');
        }else if(text==='contacts' && viewLayout.length > len){
            scrollView.scrollTo({
                x: viewLayout[len-2],
                y: 0,
                animated: true,
            })
            setSelectContactKey('All');
        }else if(text==='requests' && viewLayout.length > len){
            scrollView.scrollTo({
                x: viewLayout[len-2],
                y: 0,
                animated: true,
            });
            setSelectRequestKey('All');
        }  
    }
    const TabData = [];
    for (let i = 0; i < 5; i++) {
        TabData[i]= TabRoutes[i] ;
    }

    useEffect(() => {
       setTabName('contacts');
    }, []);
    return (
        <View style={{marginTop:10, marginBottom:10}}>
            <View style={[styles.mainSection]}>
                <ScrollView horizontal={true} ref={(scrollView) => {setScrollView(scrollView) }}>
                    <View style={styles.btnBox}>
                        {TabData.map((tab, i) =>
                            <TouchableHighlight key={i}
                                activeOpacity={1} underlayColor={tab.color}
                                style={[styles.defaultButton, 
                                    tabName === tab.key ? {backgroundColor:tab.color,  borderColor:tab.color, height: 34}
                                    : 
                                    {backgroundColor:'#fff', height: 33} 
                                ]}
                                onPress={() => getTab(tab.key, tab.color, tab.title)}
                                onLayout={(event) => {setLayout(event, len)}}
                            >
                                <Text style={[ styles.btnName,
                                    tabName === tab.key ? 
                                     {color:'rgba(255, 255, 255, 1)'}
                                    :
                                     {color:tab.color}
                                    ]}
                                >{tab.title}</Text>
                            </TouchableHighlight>
                        )}
                        <Text>{''}</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default ButtonSection;

const styles = StyleSheet.create({
    mainSection:{},
    btnBox:{
        flex:1, 
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
        paddingLeft:3
    },
    clientBtn:{
        borderLeftWidth: 1.5,
        borderRadius:4,
    },
    defaultButton:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(255, 255, 255, 1)',
        borderWidth:.5,
        borderColor:'#F6F6F6',
        borderRadius:4,
        paddingHorizontal:7,
        margin:5,
        height: 33,
        shadowColor:'#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  1,
        shadowRadius: 3,
        elevation:10, 
 
    },
    btnName:{
       fontFamily:'Roboto-Bold',
       fontSize:16,
       textAlign:'center',
       letterSpacing: 1,
       lineHeight:20,
    },
    expandBtn:{
        marginLeft:-3,
        overflow:'visible', 
        marginTop:-1.6,
        paddingLeft:8,
        paddingRight:8, 
        height:47, 
        backgroundColor:'#3851DD', 
        borderColor:'#3851DD', 
        borderWidth:1.5,
        borderRadius:4,
        marginRight:10
    },
    expandBtnName:{
        fontSize:18,
        fontWeight: '700',
        color:'#fff',
        lineHeight:47,
        textAlign:'center'
    }
    
});
