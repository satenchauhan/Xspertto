import { StyleSheet} from 'react-native';

const RoomStyles = StyleSheet.create({
        scrollContainer: {
            flex:1,
            backgroundColor: '#F5F5FF',
            borderRadius:10,
            borderColor:"rgba(128,128,128, 0.3)",
            borderWidth:2,
            position:'relative',
        },
        roomHeader: {
            // flex:1,
            flexDirection:'row',
            alignItems: 'flex-start',
            backgroundColor: '#F5F5FF',
            borderTopLeftRadius:10,
            borderTopRightRadius:10,
            borderColor:'#F5F5FF',
            borderWidth:0,
            position:'relative',
            marginTop:5,
        },
        roomInpt:{
            fontSize:18,
            fontWeight:'bold',
            // color:'rgba(128,128,128, 0.3)',
            borderColor:'black', 
            borderRadius:5,
            width:'auto', 
            padding:5
        },
        editBtn:{
            marginTop:5,
            marginLeft:-5,
            borderColor:'black',
            color:'rgba(128,128,128, 0.5)'
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
       
        bottomArea:{
            width: '100%',
            paddingLeft:5,
            paddingRight:5, 
            marginTop:10,
            marginBottom:20
        },
        bottomSection:{
            backgroundColor: 'white',
            borderRadius:10,
            width: '100%',
            height: 'auto', 
            shadowColor:"#1e272e",
            shadowOffset: {
                width: 2,
                height: 2,
            },
            shadowOpacity: 1,
            shadowRadius:5,
            elevation:5,
            
        },
        
        txt:{
            fontSize:14,
            color:'#000000'
        },
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",  
        },
        button: {
            borderRadius: 20,
            padding: 10,
            elevation: 2
        },
        btnOpen: {
            backgroundColor:"#2196F3",
        },
        btnClose: {
            backgroundColor: "#2196F3",
            shadowColor: "#000",
            shadowOffset: {
                width: 2,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            // elevation: 5
        },
        textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
        },
        modalText: {
            marginBottom: 15,
            textAlign: "center"
        },
        verticleLine: {
            height: 20,
            width: 1,
            backgroundColor: '#909090',
            // padding:0,
        },
        vrLine: {
            height: 15,
            width: 1,
            // paddingLeft:3,
            backgroundColor: 'black',
            // padding:0,
            marginTop:2,
        },
        result:{
            fontSize:14,
            fontWeight:'normal'
        },
        bottomRoomTotal:{
            fontSize:14,
            color:'#000000',
            fontWeight:'bold', 
            textAlign:'center', 
            textDecorationLine:'underline', 
            marginBottom:10
        },
        floatListArea:{
            backgroundColor:'rgba(238, 238, 238, 0.9)', 
            flex:1, 
            alignItems:'flex-end', 
            justifyContent:'flex-end', 
            marginTop:45, 
            marginRight:0
        },
        // Add Image
        imageSection:{
            alignSelf:'center',
            backgroundColor: '#F5F5FF',
            width:'100%', 
            marginLeft:2,
            // marginBottom:15,
            marginTop:10,
            // paddingBottom:15,
            marginBottom:-20
        },
        addImg:{
            flexDirection: 'row',
            alignItems:'center',
            justifyContent:'space-between',
            // marginLeft:5
        },
        CustomPopUp: {
            flex: 1, 
            flexDirection:'row', 
            alignItems:'flex-end',
            justifyContent:'flex-end', 
            zIndex: 10  
        },
        ItemPopUp: {
            flex: 1, 
            flexDirection:'row', 
            alignItems:'flex-end',
            justifyContent:'flex-end', 
            position:'absolute', 
            right:2, 
            top:-5, 
            zIndex: 10  
        },
        footerSection:{
            flexDirection:'row',
            alignItems:'flex-start',
            alignSelf:'flex-start',
            position:'relative',
            top:6,
            // marginTop:5,
            marginLeft:0,  
            marginRight:7,
            height:70, 
        },
        roomContanier:{
            flexDirection:'column',
            position: 'absolute',
        }
      
})

export {RoomStyles};