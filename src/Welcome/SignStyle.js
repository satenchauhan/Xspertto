import {StyleSheet} from 'react-native';

const SignStyle = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
    },
    header:{
        marginTop:25,
    },
    headText:{
        fontFamily:'Roboto',
        textAlign:'center',
        fontSize:47, 
        fontWeight:'normal', 
        color:'#505050',
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 35,
        paddingVertical: 50,
    },
    text_title: {
        color: 'black',
        fontSize: 14,
        paddingHorizontal:5
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderWidth: 1,
        // borderColor: '#f2f2f2',
        borderRadius:8,
        // padding: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 0 : 12,
        paddingLeft: 10,
        color: '#05375a',
        fontSize:14
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 30
    },
    signIn: {
        width: '100%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8, 
    },
    signWith: {
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        width: '100%',
        height: 45,
        borderRadius: 8,  
        // borderColor: '#009387',
        // borderWidth: 1,
        marginTop: 15
    },
    signUp: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width: '100%',
        marginTop: 25
    },
    IconTitle:{
        flex:1,
        flexDirection:'row', 
        alignContent:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    textSign: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    SocialIcon:{
        height: 50,
        width: 40,
        resizeMode: 'center',
        alignItems: 'center',
        justifyContent: 'center',  
        marginRight:10,
    },
    ORFlex:{
        flexDirection:'row', 
        alignItems:'center', 
        marginTop:25, 
        paddingLeft:50, 
        paddingRight:50
    },
    ORBorder:{
        flex:1,
        width:'100%',
        borderWidth:0.5, 
        borderColor:'gray'
    }
})


export default SignStyle;