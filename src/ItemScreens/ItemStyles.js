import { StyleSheet} from 'react-native';

const ItemStyles = StyleSheet.create({
    flex:{ 
        // flex:1,
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between',
    },
    inputLabel:{ 
        marginLeft:10,
        marginRight:10,
        flexDirection:'row', 
        alignItems:'flex-start', 
        justifyContent:'space-between'
    },
    txtBold:{ 
        fontWeight:'bold',
        color:'black'
    },
    priceInpt:{ 
        width:90, 
        fontWeight:'bold',
        padding:3,
        paddingLeft:5,
        borderWidth:1, 
        backgroundColor:'white',
        borderColor:'gray', 
        borderRadius:5,
        paddingRight:38, 
        shadowColor: "#1e272e",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,   
    },
    QtytOrCoatsInpt:{ 
        width:35,
        fontWeight:'bold',
        padding:3,
        textAlign:'center',
        borderWidth:1, 
        borderColor:'gray', 
        borderRadius:5,
        backgroundColor:'white',
        shadowColor: "#1e272e",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,        
    },
    totalInpt:{ 
        color:'black',
        fontWeight:'bold',
        width:70,
        padding:3,
        textAlign:'center',
        borderWidth:1, 
        borderColor:'gray', 
        borderRadius:5,
        backgroundColor:'white',
        shadowColor: "#1e272e",
         shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,    
    },
    lastTotalInpt:{ 
        width:100, 
        fontWeight:'bold',
        padding:3,
        paddingLeft:5,
        borderWidth:1, 
        borderColor:'gray', 
        borderRadius:5,  
        backgroundColor:'white',
        shadowColor: "#1e272e",
         shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,    
    },
    setPadding:{  
        paddingLeft:5, 
        paddingRight:5, 
        marginTop:-5
    },
    optionTitle:{ 
        color:'black',
        marginLeft:10,
        fontWeight:'bold'
    },
    title:{   
        marginLeft:5, 
        fontSize:14, 
        color:'black',
        fontWeight:'bold',
    },
    label:{
        fontWeight:'bold',
        textAlign:'center'
    },
    labelColor:{ 
        color:'black'
    },
    midLabelColor:{ 
        color:'black',
        marginLeft:25
    },
    line:{
        borderBottomWidth:1,
        color:'#b2bec3',
        width:'100%',
        marginBottom:10, 
        opacity:0.1 
    },
    OnlyInpt:{
        width:90, 
        fontWeight:'bold',
        padding:3,
        paddingLeft:5,
        borderWidth:1, 
        backgroundColor:'white',
        borderColor:'gray', 
        borderRadius:5, 
        shadowColor: "#1e272e",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,  
    },
    Inpute:{
        width:90, 
        fontWeight:'bold',
        padding:3,
        paddingLeft:5,
        borderWidth:1, 
        backgroundColor:'white',
        borderColor:'gray', 
        borderRadius:5,
        // paddingRight:38, 
        shadowColor: "#1e272e",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,   
    },
    minAddBtn:{  
        color:'white',
        backgroundColor:'#2196F3', 
        borderRadius:5,
        
    },
    rectangleBox:{ 
        backgroundColor:'#FAFAFF',
        height:37, 
        borderWidth:1, 
        borderRadius:5, 
        borderColor:'#FAFAFF', 
        paddingRight:"2%"
    },
    includeCost:{   
        flexDirection:'column', 
        alignItems:'center', 
        justifyContent:'space-between',
        paddingLeft:10, 
        paddingRight:10
    },
    selectBox:{  
        flexDirection:'row',
        alignItems:'center', 
        justifyContent:'flex-end', 
        marginBottom:20, 
        backgroundColor:'#dcdde1', 
        width:'100%', 
        padding:10, 
        borderRadius:5,
    },
   
    selectList:{
        marginTop:-20, 
        marginBottom:20, 
        backgroundColor:'#f1f2f6', 
        width:'100%', 
        borderRadius:5,
    },
    selectCost:{
        paddingLeft:'25%', 
        padding:5,
        color:'#000000'
    },
    bottomTotal:{ 
        flexDirection:'row', 
        alignItems:'flex-end', 
        justifyContent:'flex-end', 
        paddingRight:5
    },
    plus:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white', 
        borderRadius:8, 
        shadowColor: "#1e272e",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowOpacity: 0.5,
        elevation:5, 
        padding:10,
    },
    bottomLastSec:{
        flexDirection:'row', 
        alignItems:'flex-end', 
        justifyContent:'space-between', 
        paddingRight:5,
        marginBottom:20,
    },
    upload:{
        width:100,
        flexDirection:'column', 
        alignItems:'flex-end',
    },
    imgInpt:{
        color:'gray',
        fontSize:12, 
        paddingTop:5,
        position:'absolute',
        top:40,
        left:25
    },   
    hrLine:{
        marginTop:15,
        borderBottomWidth:1, 
        color:'#b2bec3',
        opacity:0.4
    },
    // Different Styles
    lastSpace:{
        color:'#fff',
        width:40, 
        height:35, 
        padding: 5
    },
    priceTxt:{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,

        color:"#000000",
        fontWeight: 'bold', 
        lineHeight: 34 
    },
    lwhSection:{  
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between',
        paddingLeft:5, 
        paddingRight:5, 
        marginTop:5
    },
    L_W_H_Input:{  
        width:85, 
        fontWeight:'bold',
        backgroundColor:'white',
        padding:3,
        paddingLeft:5,
        borderWidth:1, 
        borderColor:'gray', 
        borderRadius:5, 
        paddingRight:28, 
        shadowColor: "#1e272e",
         shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,      
    },
    l_w_h_container:{
        flexDirection:'row', 
        alignItems:'flex-end', 
        justifyContent:'flex-end',  
        paddingRight:5
    },
    l_w_h_box:{
        flexDirection:'column', 
        alignItems:'center', 
        justifyContent:'space-between'
    },
    bottomFlex:{
        flexDirection:'row', 
        alignItems:'flex-end', 
        justifyContent:'flex-end',
        
    },
    txtBold:{ 
        fontWeight:'bold',
        color:'black'
    },
    inptFlex:{ 
        flexDirection:'column', 
        alignItems:'center', 
        justifyContent:'space-between',
        marginTop:4,  
    },
    selectCutom:{
        backgroundColor:'white',
        paddingTop:5, 
        paddingBottom:5, 
        borderWidth:1,
        borderColor:'gray',
        borderRadius:5,
        shadowColor: "#1e272e",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
    },
    // Stairs
    topLabel:{
        flex:2, 
        flexDirection:'row', 
        justifyContent:'space-between'
    },
    collapstitle:{
        marginLeft:5, 
        fontSize:16, 
        color:'black',
        fontWeight:'bold'
    },

});


export default ItemStyles;