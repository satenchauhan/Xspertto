import {StyleSheet} from 'react-native';

const ClientStyles = StyleSheet.create({
    outerBox:{
        backgroundColor:"#F5F5F5",  
        padding:1.5,
        marginBottom:10,
        borderRadius:5,
    },
    section:{
        flex:1,
        alignSelf:'center',
        width:'98%',
        marginTop:30, 
        paddingLeft:2,
        paddingRight:2,
    },
    CardBox:{
        marginTop:10,
        marginBottom:2
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
    
    BtnBox:{
        // flex:1,
        marginTop:15,
        marginBottom:2,
    },
    
    title:{
        fontSize:20, 
        lineHeight:23.44, 
        fontWeight:'700',
        color:'rgba(69, 77, 106, 1)',
        marginLeft:7
    },
})


export default ClientStyles;