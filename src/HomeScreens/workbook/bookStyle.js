import {StyleSheet} from 'react-native';
const book = StyleSheet.create({
    outerBox:{
        // flex:1, 
        backgroundColor:"#F5F5F5",  
        padding:1.5
    },
    topTitle:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between', 
        margin:7
    },
    txt:{
        color:'background: rgba(14, 74, 118, 1)',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 23,
        letterSpacing: 0,
        textAlign: 'left',
    },
    section:{
        flex:1,
        // height:245,
        width:'98%',
        marginTop:10, 
        paddingLeft:8
    },
    BtnBox:{
        // flex:1,
        marginTop:15,
        marginBottom:2,
    },
    title:{
        fontSize:16, 
        color:'#454D6A',
        fontWeight:'700'
    },
})


export default booksTYLE;