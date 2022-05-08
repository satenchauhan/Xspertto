import React from 'react'
import {SafeAreaView, StyleSheet, Text, View, StatusBar, Dimensions, TouchableOpacity,Image,ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from "react-native-vector-icons/MaterialIcons";
import Font from "react-native-vector-icons/FontAwesome";
import Font5 from "react-native-vector-icons/FontAwesome5";
import MyIcon from 'react-native-vector-icons/Fontisto';
import Ant from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const Profile = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#3851DD' barStyle="light-content" />
            <ScrollView style={{flex:1}}>
                <View style={styles.imgBox}>
                    <View style={styles.outerRing}>
                        <TouchableOpacity style={styles.innerRing} onPress={() => console.log('dssdsfsd')}>
                            <Image style={styles.profileImg}  source={require('./../assets/images/user.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{margin:10, alignSelf:'center'}}>
                        <Text style={styles.uname}>Jordan  Lachance</Text>
                        <Text style={[styles.uname,{fontSize:14}]}>Prismcon Pvt Ltd.</Text>
                    </View>
                </View>
                <TouchableOpacity style={{flexDirection:'row', alignItems:'flex-end', justifyContent:'flex-end', marginTop:10, paddingRight:10}}>
                    <Font5 name="edit"  color="#3851DD"  size={25} /> 
                </TouchableOpacity>
                <Animatable.View  style={[styles.footer]} animation="fadeInUpBig">   
                    <View style={{flex:1}}>
                        <View style={styles.outer}>
                            <View style={styles.section}>
                                <MyIcon name="email"  color="rgba(83, 83, 83, 0.8)"  size={33} /> 
                                <Text style={styles.title}> Email </Text>
                            </View>
                            <View style={styles.value}>
                               <Text style={{fontSize:18,}}>jordan@gmail.com</Text>
                            </View>
                        </View>
                        <View style={styles.outer}>
                            <View style={styles.section}>
                                <Icon name="phone"  color="rgba(83, 83, 83, 0.8)"  size={33} style={{lineHeight:40}} /> 
                                <Text style={[styles.title]}> Phone </Text>
                            </View>
                            <View style={styles.value}>
                               <Text style={{fontSize:18,lineHeight:18}}>+11102931821</Text>
                            </View>
                        </View>
                        <View style={styles.outer}>
                            <View style={styles.section}>
                                <Font name="address-card-o"  color="rgba(83, 83, 83, 0.8)"  size={30} style={{lineHeight:40}} /> 
                                <Text style={styles.title}> Address </Text>
                            </View>
                            <View style={styles.value}>
                               <Text style={{fontSize:18,lineHeight:18}}>512 Foxlight Center Ottawa Canada</Text>
                            </View>
                        </View>
                        <View style={styles.outer}>
                            <View style={styles.section}>
                                <Icon name="business"  color="rgba(83, 83, 83, 0.8)"  size={33} style={{lineHeight:41}} /> 
                                <Text style={styles.title}> Business </Text>
                            </View>
                            <View style={styles.value}>
                               <Text style={{fontSize:18,lineHeight:18}}>Prismcon Pvt Ltd.</Text>
                            </View>
                        </View>
                        <View style={styles.outer}>
                            <View style={styles.section}>
                                <Font name="users"  color="rgba(83, 83, 83, 0.8)"  size={26} style={{lineHeight:39}} /> 
                                <Text style={styles.title}> Clients </Text>
                            </View>
                            <View style={styles.value}>
                               <Text style={{fontSize:18,lineHeight:18}}>48 Clients</Text>
                            </View>
                        </View>
                        <View style={styles.outer}>
                            <View style={styles.section}>
                                <Icon name="calculate"  color="rgba(83, 83, 83, 0.8)"  size={30} style={{lineHeight:35}} /> 
                                <Text style={styles.title}> Estimates </Text>
                            </View>
                            <View style={styles.value}>
                               <Text style={{fontSize:18,lineHeight:20}}>48 Estimates</Text>
                            </View>
                        </View>
                        <View style={styles.outer}>
                            <View style={styles.section}>
                                <Icon name="account-balance-wallet"  color="rgba(83, 83, 83, 0.8)"  size={30} style={{lineHeight:33}} /> 
                                <Text style={styles.title}> Account Type </Text>
                            </View>
                            <View style={styles.value}>
                               <Text style={{fontSize:18,lineHeight:20}}>Premium</Text>
                            </View>
                        </View>
                    </View>
                </Animatable.View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile;



const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff'
    },
    imgBox:{
        backgroundColor: '#3851DD',
        paddingTop:30, 
        paddingBottom:15, 
        borderBottomLeftRadius: 25, 
        borderBottomRightRadius: 25,
    },
    profileImg:{
        backgroundColor:'#fff',
        borderRadius:53, 
        width:106, 
        height:106
    },
    uname:{
        fontSize:18, 
        color:'#fff', 
        fontWeight:'bold', 
        textAlign:'center'
    },
    outerRing:{
        flexDirection:'column', 
        alignItems:'center', 
        justifyContent:'center',   
        alignSelf:'center', 
        width:120, 
        height:120, 
        borderRadius:60, 
        borderWidth:2, 
        borderColor:'#fff',
        backgroundColor:'#fff',
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowRadius: 5,
        shadowOpacity: 0.5,
        elevation:5
      },
      innerRing:{
          flexDirection:'column', 
          alignItems:'center', 
          justifyContent:'center',     
          borderRadius:36, 
        //   borderWidth:2, 
        //   borderColor:'#fff', 
          backgroundColor:'#fff',
      },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        // borderTopLeftRadius: 45,
        // borderTopRightRadius: 45,
        marginTop:0,
        margin:20
    },
    outer:{
        borderBottomWidth:2, 
        borderColor:'rgba(83, 83, 83, 0.3)'
    },
    section:{
        flexDirection:'row', 
        alignItems:'flex-start', 
        justifyContent:'flex-start' 
    },
    title:{
        paddingLeft:10, 
        fontSize:20, 
        fontWeight:'bold', 
        color:"rgba(83, 83, 83, 0.8)", 
        lineHeight:33
    },
    value:{
        paddingLeft: 47, 
        paddingRight:30, 
        paddingBottom:20
    }
    
})
