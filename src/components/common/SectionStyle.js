import { StyleSheet } from 'react-native';

const SecStyles = StyleSheet.create({
    columnBox:{ 
        backgroundColor:'#FFFFFF',
        paddingLeft:2,
        paddingRight:2,
        borderWidth:1,
        borderRadius:8, 
        borderColor:'rgba(128, 128, 128, 0.2)',
        shadowColor: "rgba(128, 128, 128, 1)",
        shadowOffset: { width: -1, height: 1 },
        shadowOpacity: 0.8,
        elevation:5,  
    },
    infoBox:{
        flex:1,
        flexDirection:'row', 
        alignItems:'flex-start',
        justifyContent:'flex-start',
        height:46
    },
    dateBox:{
        width:44, 
        height:46, 
        backgroundColor:'rgba(28, 28, 28, 1)',
        alignItems:'center', 
        justifyContent:'center',
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8,
        marginLeft:-2
    },
    secBox:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:10
    },
    cltName:{
        fontFamily:'RobotoCondensed-Bold',
        fontSize: 14,  
        marginLeft:5,
        color:'#40444E',
    },
    infoTxt:{
        fontFamily:'RobotoCondensed-Regular',
        fontSize: 14,  
        marginTop:5,
        marginLeft:5,
        color:'rgba(50, 51, 56, 1)',
        // textTransform:'capitalize',
        lineHeight:14
    },
    dateTxt:{
        fontFamily:'RobotoCondensed-Regular',
        color:'#fff', 
        fontSize:12, 
        textAlign:'center'
    },
    change:{
        fontSize:23,
        color:'#686D7B',
        paddingLeft:3, 
        paddingRight:3,
        lineHeight:23
    },
    invoiceTxt:{
        fontFamily:'RobotoCondensed-Regular',
        marginBottom:5, 
        fontWeight:'bold', 
        color:'black'
    },
})


export default SecStyles;