import React from 'react'
import { StyleSheet, Text, View, StatusBar, Dimensions, TouchableOpacity,} from 'react-native';
import * as Animatable from 'react-native-animatable';


const BusinessLogo = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='rgba(83, 83, 83, 0.58)' barStyle="light-content" />
            <View style={styles.header}>
                <Animatable.Image 
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../assets/images/nlogo.png')}
                    style={styles.logo}
                    resizeMode="contain" 
                />
                <Text style={styles.headText}>OneQuote</Text>
            </View>
            <Animatable.View 
                style={[styles.footer]}
                animation="fadeInUpBig"
            >   
                <Animatable.Image 
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../assets/images/Vector.png')}
                    style={styles.thumb}
                    resizeMode="contain" 
                />
                <Text style={styles.title}>Business Logo</Text>
                <View style={{width:358, alignSelf:'center'}}>
                    <Text style={[styles.txt,{fontSize:16, top:25}]}>
                    This will appear on all documents and strategic locations to give your business more exposure.
                    </Text>
                </View>
                <View style={styles.buttonBox}>
                    <TouchableOpacity style={styles.signIn} onPress={()=> console.log('Image')}>
                        <View style={styles.button}>
                            <Text style={styles.textSign}>Choose Image</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
            </Animatable.View>
        </View>
    )
}

export default BusinessLogo;



const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#3851DD'
    },
    header: {},
    headText:{
        fontFamily:'Roboto',
        fontSize:47, 
        fontWeight:'700', 
        color:'#fff',
        textAlign:'center',
        lineHeight:55
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        marginTop:50
    },
    logo: {
        alignSelf:'center',
        width: 100,
        height: 100,
        marginTop:15,
    },
    thumb: {
        alignSelf:'center',
        width: 50,
        height: 50,
        marginTop:30,
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
