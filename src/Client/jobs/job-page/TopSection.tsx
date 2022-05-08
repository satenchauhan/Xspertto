import React,{useContext} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FlagBox from '../../../components/common/FlagBox';
import FlagButton from '../../../components/common/FlagButton';
import { SuperContext } from '../../../context/ContextProvider';
import ConvertModal from '../../ConvertModal';
import PreviewModal from './PreviewModal';
import JobFlagModal from './JobFlagModal';

const TopSection = () => {
    const {convertModal, setConvertModal, setPreviewModal, flagKey, flagColor} = useContext(SuperContext);

    return (
        <View style={topStyles.topBox}>
            <View style={topStyles.topItem}>
                <View style={topStyles.amtBox}>
                    <Text style={topStyles.amtTxt}>$ 1700.00</Text>
                </View>
                <View style={{flex:1,marginRight:10,marginBottom:10}}>
                    <FlagButton style={[topStyles.flag,{backgroundColor: flagColor==="" ? '#F5DC5C' : flagColor }]}>{flagKey==="" ? 'awaiting response' : flagKey}</FlagButton>
                </View>
            </View>
            <View style={[topStyles.topItem,{paddingHorizontal:0, marginTop:20}]}>
                <View style={topStyles.centerItem}>
                    <Text style={topStyles.Txt}>Created</Text>
                    <Text style={topStyles.dtText}>December 23, 2021</Text>
                </View>
                <View style={[topStyles.centerItem,{borderRightWidth:0}]}>
                    <Text style={topStyles.Txt}>Sent</Text>
                    <Text style={topStyles.dtText}>December 23, 2021</Text>
                </View>
            </View>
            <View style={topStyles.buttonBox}>
                <TouchableOpacity style={topStyles.button}
                    onPress={() => setPreviewModal(true)}
                >
                    <Text style={topStyles.buttonLabel}>Complete Job</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[topStyles.button,topStyles.convButton]}
                    onPress={() => setConvertModal(true)}
                >
                    <Text style={[topStyles.buttonLabel,{color:'#3851DD'}]}>More Actions...</Text>
                </TouchableOpacity>
            </View>
            <ConvertModal />
            <JobFlagModal />
            <PreviewModal />
        </View>
    )
}

export default TopSection

const topStyles = StyleSheet.create({
    topBox:{
        // flex:0.5,
        backgroundColor:"#FFFEFB", 
        borderWidth:1, 
        borderColor:'#B4B1B1',
        height:195
    },
    topItem:{
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center', 
    },
    amtBox:{
        flex:1, 
        alignItems:'center', 
        justifyContent:'center'
    },
    amtTxt:{
        fontFamily:'Roboto-Black', 
        fontSize:18, 
        marginTop:20
    },
    flag:{
        borderTopRightRadius: 8, 
        borderBottomLeftRadius: 8,  
    },
    centerItem:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderTopWidth:1,
        borderBottomWidth:1, 
        borderRightWidth:1,
        borderColor:'#B4B1B1', 
    },
    Txt:{
        fontFamily:'Roboto-Bold', 
        fontSize:12, 
        color:'rgba(0, 0, 0, 0.75)', 
        paddingTop:5
    },
    dtText:{
        fontFamily:'Roboto-Black', 
        fontSize:14, 
        color:'rgba(0, 0, 0, 0.75)',
        paddingTop:5, 
        paddingBottom:10
    },
    buttonBox:{
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between',
        paddingHorizontal:20, 
        paddingTop:20,
        // paddingBottom:-20
    },
    button:{
        backgroundColor:'#3851DD',
        width:163, 
        height:33, 
        alignItems:'center', 
        justifyContent:'center', 
        borderRadius:4,
    }, 
    convButton:{
        backgroundColor:'#fff',
        borderWidth:1.5, 
        borderColor:'#3851DD'
    }, 
    buttonLabel:{
        fontFamily:'RobotoCondensed-Black', 
        fontWeight:'700', 
        fontSize:16,
        color:'rgba(255, 255, 255, 1)'
    }
})
