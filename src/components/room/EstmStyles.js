import { StyleSheet} from 'react-native';

const EstmStyles = StyleSheet.create({
        estimatecard:{
            flex:1,
            alignItems: 'center',
            justifyContent:'center',
            alignItems:'center',
            padding:5,
            position: 'relative',
            bottom:10
        },
        defaultField:{
            flex:1,
            flexDirection:'row', 
            alignItems:'flex-start', 
            justifyContent:'space-between', 
            alignSelf:'center',
            marginBottom:3,
            marginLeft:20,
            zIndex: 1,
            elevation:-1
        },
        eyeBtn:{
            flex:1,
            flexDirection:'row', 
            alignItems:'flex-start', 
            justifyContent:'flex-start', 
            
        },
        eyeTxt:{
            fontSize:12,
            color:"#2196F3", 
            fontWeight:'bold',
            lineHeight:23,
        },
        inputSection:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            backgroundColor: '#fff',
            borderRadius:10,
            width: '90%',
            height: 'auto',
            padding: 5,
            paddingTop:10,
            paddingBottom:-2,
            paddingLeft: 15,
            shadowColor: "#1e272e",
            shadowOffset: {
            width: 2,
            height: 2,
            },
            shadowOpacity: 1,
            shadowRadius: 5,
            elevation:5, 
            // position:'relative',
            marginBottom:35,
        },
        plusIcon:{
            backgroundColor:'#2196F3', 
            height: 20 ,
            width: 20,
            borderRadius:100, 
            paddingLeft:2, 
            marginLeft:3, 
            color:'white'
        },
        inputs:{
            alignItems:'center',
            justifyContent:'space-between',
            width:60, 
            height: 35, 
            paddingTop:20,
            paddingBottom:-15,
            borderColor: '#000000',
            borderBottomWidth:2, 
            fontSize:14,    
        },
        inptTxt:{
            fontSize:14, 
            fontWeight:'bold',
        },
        clickBox:{
            flexDirection: 'row', 
            alignItems: 'baseline', 
            justifyContent: 'center',
            borderStyle:'dashed', 
            borderWidth:1.5, 
            borderRadius:10, 
            padding:13, 
            backgroundColor:'#fff'
        },
        IconTxt:{ 
            flexDirection: 'row', 
            alignItems: 'baseline', 
            justifyContent: 'center' 
        },
        txt:{
            fontSize:14,
            color:'#000000'
        },
        
})

export {EstmStyles};