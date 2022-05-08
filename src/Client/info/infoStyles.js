import {StyleSheet} from 'react-native';
const infoStyles = StyleSheet.create({
    topBox:{
        width:'50%',
        height:60, 
        borderWidth:1.7, 
        borderTopWidth:0, 
        borderRightWidth:0
    }, 
    section:{
        flex:1, 
        alignItems:'center', 
        marginTop:5
    },
    topTxt:{
        fontSize:14.06, 
        lineHeight:25
    },
    mainBox:{
        flexDirection:'row', 
        alignItems:'flex-start',
        justifyContent:'space-between',
        // marginRight:10,
        height: 46,
        backgroundColor:'#fff',
        borderWidth: 1,
        borderColor:'rgba(211, 211, 211, 0.25)',
        borderRadius:5,
        padding:10,
        shadowColor:'gray',
        shadowOffset:{
            width:1,
            height: 2,
        },
        elevation: 5,
        // zIndex: -5
    },
    titleBox:{
        height:30, 
        borderWidth:1.7, 
        borderTopWidth:0,  
        backgroundColor:'rgba(229, 229, 229, 1)'
    },
    titleTxt:{
        fontSize:16,
        fontWeight:'500',
        lineHeight:25, 
        marginLeft:10
    },
    billinBox:{
        borderWidth:1.7, 
        borderTopWidth:0, 
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,  
        padding:10
    },
    phoneMsg:{
        flexDirection:'row', 
        alignItems:'flex-start'
    },
    Txt:{
        fontSize:16,
        color:"black",
        lineHeight:26,
        fontWeight:'bold'
    },
    addBtnBox:{
        flex:1,
        alignItems:'center',
        padding:20
    },
    addBtn:{
        backgroundColor:'#fff', 
        width:326, 
        height:35, 
        borderWidth:1, 
        borderRadius:4,
        borderColor:' rgba(222, 222, 222, 0.91)',
        elevation:3
    },
    btnLabel:{
        fontFamily:'Roboto',
        fontSize:18, 
        fontWeight:'bold',
        color:'#3851DD', 
        textAlign:'center', 
        lineHeight:35
    }
    
});

export default infoStyles;