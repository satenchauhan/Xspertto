import React,{useContext} from 'react'
import { StyleSheet, Text, View, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { SuperContext } from '../context/ContextProvider';


const ThatsIT = ({navigation}) => {
    const {user, setUser} = useContext(SuperContext);
    /* const {user, setUser} = useContext(SuperContext);
    const login = () =>{
      setUser({...user, isLoggedIn:true, uid:20, name:'Guest', email: null, photoUrl:null, token:'1234'});
    }  */
    const createQuote = () =>{
        setUser({...user, isLoggedIn:true, uid:20, name:'Guest', email: null, photoUrl:null, token:'1234'});
        // setUser({...user, isLoggedIn:true, name:'Guest', email: null, photoUrl:null, token:'1234'});
        // navigation.navigate('ONEQUOTE');
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='rgba(83, 83, 83, 0.58)' barStyle="light-content" />
            <View style={styles.header}>
                <Animatable.Image 
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../assets/images/Vector.png')}
                    style={styles.thumb}
                    resizeMode="contain" 
                />
                <Text style={styles.title}>That's It</Text>
                <View style={{width:358, alignSelf:'center'}}>
                    <Text style={[styles.txt,{fontSize:16, top:25}]}>
                        We’re all done ! Enjoy a 14 day trial on us.
                    </Text>
                </View>
                <View style={styles.buttonBox}>
                    <TouchableOpacity style={styles.signIn} onPress={createQuote}>
                        <View style={styles.button}>
                            <Text style={styles.textSign}>CREATE A QUOTE</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ThatsIT;



const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFF'
    },
    header:{
        marginTop:50
    },
    headText:{
        fontFamily:'Roboto',
        fontSize:47, 
        fontWeight:'700', 
        color:'#fff',
        textAlign:'center',
    },
    thumb: {
        alignSelf:'center',
        width: 50,
        height: 50,
        marginTop:0,
    },
    title: {
        fontFamily:'Roboto',
        fontSize:47,
        textAlign:'center', 
        fontWeight:'700', 
        color:'#3851DD', 
        lineHeight:55,
        marginTop: 40
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    txt:{
        fontFamily:'Roboto',
        fontSize:18, 
        textAlign:'center', 
        fontWeight:'normal', 
        color:'#3851DD',
        lineHeight:21
    },
    buttonBox: {
        alignItems: 'center',
        marginTop: 70,
    },
    button: {
        width:270,
        height:72,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor:"#3851DD"
    },
    textSign: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    }
})
