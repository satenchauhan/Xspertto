import React,{useState, useEffect,useContext} from 'react';
import {TouchableOpacity, View, Image, StyleSheet, Linking} from 'react-native';
import {Avatar, Title, Drawer, Text} from 'react-native-paper';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MyIcon from 'react-native-vector-icons/SimpleLineIcons';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ant from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import { SuperContext } from '../context/ContextProvider';
import DStyles from './drawerStyles';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import { LoginManager } from "react-native-fbsdk-next";
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


const DrawerMenuScreen = (props) => {
    const [isImageLoading, setImageLoadStatus] = useState(false);
    const {user, setUser} = useContext(SuperContext);
    const [uid, setUID] = useState(null)
    const iconColor = 'rgba(50, 50, 50, 1)';
    const navigation = useNavigation();
    const handleLogOut =  async () =>{
      try {
        // await GoogleSignin.signOut();
        setUser({...user, isLoggedIn: false, name: null, email: null, token: null, photoUrl: null});
      } catch (error) {
        console.error(error);
      }
    }
    // console.log("myuid "+ uid)
   /*  const getCurrentUser = async () => {
        const currentUser = await GoogleSignin.getCurrentUser();
        if(currentUser !== null){
          setUser({...user, isLoggedIn:true, name: currentUser.user.name, email: currentUser.user.email, photoUrl: currentUser.user.photo, token:''});
        }else{
          // setUser({...user, isLoggedIn:false, name:null, email: null, photoUrl: null, token:''});
          console.log('User did not signedup with google')
        } 
    };  */


  useEffect(async() => {
      // getCurrentUser();
       
      // GoogleSignin.configure({});
  }, [])

    
    return(
            <View style={{flex:1}}>
              <Drawer.Section style={DStyles.headBox}>
                  <View style={DStyles.userInfoPanel}>
                      <View style={DStyles.topBox} >
                        {user.photoUrl !== null ?
                          <View style={DStyles.outerRing}>
                             <TouchableOpacity onPress={() => console.log('dssdsfsd')}>
                            <View style={DStyles.innerRing}>
                                <Avatar.Image  backgroundColor="#3851DD" source={{uri:user.photoUrl}} size={50} />
                                <MaterialIcons name="edit"  color="black"  size={20}/> 
                            </View>
                            </TouchableOpacity>
                          </View>
                        :   
                          <View style={DStyles.outerRing}>
                            <TouchableOpacity onPress={() => console.log('dssdsfsd')}>
                            <View style={DStyles.innerRing}></View>
                            </TouchableOpacity>
                          </View>
                        }
                        <View style={{flexDirection:'column'}}>
                            <Title style={DStyles.title}>{user.email === null ? 'Guest' : user.email}</Title>
                        </View>
                      </View>
                  </View>
              </Drawer.Section>
               <DrawerContentScrollView {...props}>
                 <View style={DStyles.drawerContent}>
                    <View style={DStyles.HQSection}>
                      <TouchableOpacity onPress={() => {props.navigation.navigate('HomePage')}}style={DStyles.hq} >
                          <Image source={require('./../assets/images/home.png')} style={{backgroundColor:'#fff',width:26,height:25}} />
                          <Text style={{fontFamily:'Roboto',fontSize:12, color:'rgba(34, 34, 34, 1)', marginTop:8}}>Business HQ</Text>
                      </TouchableOpacity>
                    </View>
                    <Drawer.Section style={[DStyles.bottomSection]}>
                      <View>
                        <TouchableOpacity style={DStyles.menuBtn} >
                            <MaterialIcons name="people-alt"  color={iconColor}  size={20}/>
                            <Text style={DStyles.label}>Customers</Text>
                        </TouchableOpacity>
                      </View>
                      <View>
                        <Collapse>
                            <CollapseHeader style={DStyles.menuBtn} >
                                  <MaterialIcons name="event-note" size={20} color={iconColor} />
                                  <Text style={DStyles.label} >Schedule</Text>
                                  <MaterialIcons name="keyboard-arrow-down" style={{paddingRight:20,}} size={22} color={iconColor}/>
                            </CollapseHeader>
                            <CollapseBody>
                              <View style={DStyles.subMenuBox}>
                                <TouchableOpacity onPress={() => console.log('Press')}>
                                    <Text style={DStyles.btnText}>Calendar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={DStyles.button} onPress={() => console.log('Press')}>
                                    <Text style={DStyles.btnText}>Jobs</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[DStyles.button,{marginBottom:9}]} onPress={() => console.log('Press')}>
                                    <Text style={DStyles.btnText}>Tasks</Text>
                                </TouchableOpacity>
                              </View>
                            </CollapseBody>
                        </Collapse>
                      </View>
                      <View>
                        <Collapse>
                            <CollapseHeader style={DStyles.menuBtn} >
                              <MaterialIcons name="attach-money" size={25} color={iconColor} />
                              <Text style={DStyles.label}>Sales</Text>
                              <MaterialIcons name="keyboard-arrow-down" style={{paddingRight:20}} size={22} color={iconColor} />
                            </CollapseHeader>
                            <CollapseBody>
                                <View style={DStyles.subMenuBox}>
                                  <TouchableOpacity onPress={() => console.log('Press')}>
                                      <Text style={DStyles.btnText}>Estimates</Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity style={DStyles.button} onPress={() => console.log('Press')}>
                                      <Text style={DStyles.btnText}>Invoices</Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity style={[DStyles.button,{marginBottom:9}]} onPress={() => console.log('Press')}>
                                      <Text style={DStyles.btnText}>Payments</Text>
                                  </TouchableOpacity>
                                </View>
                            </CollapseBody>
                        </Collapse>
                      </View>
                      <View>
                        <Collapse>
                            <CollapseHeader style={DStyles.menuBtn} >
                                <MaterialIcons name="domain" size={22} color={iconColor} />
                                <Text style={DStyles.label}>Management</Text>
                                <MaterialIcons name="keyboard-arrow-down" style={{paddingRight:20}} size={22} color={iconColor} />
                            </CollapseHeader>
                            <CollapseBody>
                              <View style={DStyles.subMenuBox}>
                                <TouchableOpacity onPress={() => console.log('Press')}>
                                    <Text style={DStyles.btnText}>Team Members</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={DStyles.button} onPress={() => console.log('Press')}>
                                    <Text style={DStyles.btnText}>Internal Tracker</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[DStyles.button,{marginBottom:9}]} onPress={() => console.log('Press')}>
                                    <Text style={DStyles.btnText}>Timesheets</Text>
                                </TouchableOpacity>
                              </View>
                            </CollapseBody>
                        </Collapse>
                      </View>
                      <View>
                        <TouchableOpacity style={DStyles.menuBtn}
                            onPress={() => navigation.navigate('ProfileScreen',{name:"saten"})}
                            // onPress={GotoProfile}
                        >
                              <Ant name="profile"  color={iconColor}  size={20}/>
                              <Text style={DStyles.label}>Profile</Text>
                        </TouchableOpacity>
                      </View>
                      <View>
                        <TouchableOpacity
                          style={[DStyles.menuBtn,{marginBottom:10}]}
                        >
                              <MyIcon name="settings"  color={iconColor}  size={20}/>
                              <Text style={DStyles.label}>Settings</Text>
                        </TouchableOpacity>
                      </View>
                    </Drawer.Section>
                    <Drawer.Section style={[DStyles.bottomSection,{marginTop:-15,borderBottomWidth:2,borderColor:'rgba(221, 221, 221, 1)'}]}>
                      <View>
                        <TouchableOpacity style={DStyles.menuBtn} >
                            <MaterialIcons name="content-paste"  color={iconColor}  size={20}/>
                            <Text style={DStyles.label}>Production Journal</Text>
                        </TouchableOpacity>
                      </View>
                      <View>
                        <TouchableOpacity style={DStyles.menuBtn} >
                            <Icon name="file-outline"  color={iconColor}  size={22}/>
                            <Text style={DStyles.label}>Notes</Text>
                        </TouchableOpacity>
                      </View>
                      <View>
                        <TouchableOpacity style={DStyles.menuBtn} >
                            <Icon name="tag-outline"  color={iconColor}  size={22}/>
                            <Text style={DStyles.label}>Items</Text>
                        </TouchableOpacity>
                      </View>
                      <View>
                        <TouchableOpacity style={DStyles.menuBtn} >
                            <MaterialIcons name="insert-chart-outlined"  color={iconColor}  size={20}/>
                            <Text style={DStyles.label}>Rates</Text>
                        </TouchableOpacity>
                      </View>
                      <View>
                        <TouchableOpacity style={DStyles.menuBtn} >
                            <MaterialIcons name="format-list-numbered-rtl"  color={iconColor}  size={20}/>
                            <Text style={DStyles.label}>Tasks</Text>
                        </TouchableOpacity>
                      </View>
                      <View>
                        <TouchableOpacity style={DStyles.menuBtn} >
                            <MaterialIcons name="help"  color={iconColor}  size={20} />
                            <Text style={DStyles.label}>Help</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{paddingBottom:20}}>
                        <TouchableOpacity style={DStyles.menuBtn} onPress={handleLogOut} >
                            <MaterialIcons name="arrow-right-alt"  color={iconColor} size={20} />
                            <Text style={DStyles.label}>Log Out</Text>
                        </TouchableOpacity>
                      </View>
                    </Drawer.Section>
                 </View>
               </DrawerContentScrollView>
                <View style={{flexDirection:'row', alignItems:'flex-start', justifyContent:'center',height:55}}>
                    <Image style={{backgroundColor:'#fff',}}  source={require('./../assets/images/sidebarpic.png')} resizeMode="contain" style={{width:26,height:42}} />
                    <Text style={{fontFamily:'Roboto',fontSize:26, fontWeight:'bold', color:'#3851DD',lineHeight:42, paddingLeft:10}}>OneQuote</Text>
                </View>
            </View>
    );
};


export {DrawerMenuScreen};


//<Avatar.Image  style={{backgroundColor:'#3851DD'}} source={require('./../assets/images/nlogo.png')} size={50} size={50} />

/*  const getCurrentUser = async () => {
        const currentUser = await GoogleSignin.getCurrentUser();
        if(currentUser !== null){
          setUser({...user, isLoggedIn:true, name: currentUser.user.name, email: currentUser.user.email, photoUrl: currentUser.user.photo, token:''});
        }else{
          setUser({...user, isLoggedIn:false, name:null, email: null, photoUrl: null, token:''});
        } 
    }; 
*/

/* 
useEffect(async() => {
    // getCurrentUser();
    try {
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }  
    GoogleSignin.configure({});
}, [])
*/

/* 
const fetchUsers =  () => {
      try {
           axios.get(`http://10.0.2.2:3000/users/ ${user.uid}`)
           .then((res) => {
              //  console.log(res.data.data.uid)
               setUID(res.data.data.uid)
             }).catch((err) => {
                 console.log(err)
             })
          
       } catch (error) {
           console.log(error.message);
       }
    };
    const GotoProfile = async () =>{
      //Link with another app
      await Linking.openURL('onequoteapp://profile'); 
    }
*/