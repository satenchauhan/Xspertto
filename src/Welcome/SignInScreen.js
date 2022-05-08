import React,{useState,useEffect,useContext} from 'react'
import { View, Text, TouchableOpacity, TextInput, StatusBar, ActivityIndicator, Alert } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { SuperContext } from '../context/ContextProvider';
import config  from '../config/config';
import SignStyle from './SignStyle';
// import { UserGoogleLogin } from '../components/common/socialLogin';
import { LoginButton, AccessToken } from 'react-native-fbsdk-next';
import { LoginManager,Profile } from "react-native-fbsdk-next";



const SignInScreen = () => {
    const [data, setData] = React.useState('');
    const [error, setError] = useState(null); 
    const [userLogin, setUserLogin] = useState();
    const [googleLogin, setGoogleLogin] = useState();
    const [facebookLogin, setFacebookLogin] = useState();
    const [appleLogin, setAppleLogin] = useState();
    
    const navigation = useNavigation();
    const {user, setUser} = useContext(SuperContext);
     
    const handleSubmit = (email) => {
        if(email==null){
            setError("The email address is required ");
            setData(null);  
        }else{
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
            if (reg.test(email) === false) {
                setError("Invalid Email Address")
                setData(null);
                return false;
            }
            else {
                setUserLogin(true);
                setTimeout(()  => {
                    navigation.navigate('MagicBox');
                }, 1000)  
                setUser({...user, isLoggedIn:false, name:null, email: email, photoUrl:null, token:null});
                setError(null);
                setUserLogin(true);
            }
        }
    }
   
    const handleInputValue = (val) => {
        setData(val);
        setError(null);
    }
    // Google Login Method
   /*  const handleGoogleLogin = async () =>{
        try {
            setGoogleLogin(true);
        const data = await UserGoogleLogin();
            console.log(data);
            if(data.user.email){
                setUser({...user,isLoggedIn:true, name:'', email: data.user.email, photoUrl: data.user.photo, token:''});
            }else{
                setGoogleLogin(false);
                setUser({...user, isLoggedIn:false, name:'', email: null, photoUrl: null, token:''});
            } 
        } catch (error) {
            setGoogleLogin(false);
            setUser({...user, isLoggedIn:false, name:'', email: null, photoUrl: null, token:''});
        }
    } 
 */
    //Facebook Login Method
    const handlefacebookLogIn = async () =>{
        setFacebookLogin(true);
        try {
            const result = await LoginManager.logInWithPermissions(
                ['public_profile', 'email'],
            );
            //   console.log(result);
            if (Platform.OS === 'ios') {
                const result = await AuthenticationToken.getAuthenticationTokenIOS();
                console.log(result?.authenticationToken);
            } else {
                const result = await AccessToken.getCurrentAccessToken();
                // console.log(result?.accessToken);
                if(result?.accessToken){
                    const data = Profile.getCurrentProfile().then((data) => {
                        if (data) {
                            // console.log(data.email);
                            setUser({...user, isLoggedIn:true, name:data.name, email: data.name, photoUrl: data.imageURL, token:data.userID});
                        }else{
                            setUser({...user, isLoggedIn:false, name:'', email: null, photoUrl: null, token:''});
                            setFacebookLogin(false);
                        }
                    })
                }else{
                    setFacebookLogin(false);
                    return false;
                } 
            }
        } catch (error) {
            setFacebookLogin(false);
            console.log(error);
        }
    }
    
    //Apple Login Method
    const handleAppleLogIn = () =>{
        setAppleLogin(true);  
    }

    
    useEffect(async () => {
        setGoogleLogin(false);
        setFacebookLogin(false);
        setAppleLogin(false);
        setError(null); 
        setData(null);
        setUserLogin(false);
    }, [])

    return (
        <View style={SignStyle.container}>
            <StatusBar backgroundColor='rgba(83, 83, 83, 0.58)' barStyle="light-content" />
            <View style={SignStyle.header}>
                <Text style={SignStyle.headText}>Welcome back</Text>
                <Text  style={[SignStyle.headText,{color:'#505050', textAlign:'left', left:48, lineHeight:48}]}>to 
                <Text style={{color:'#3851DD', fontWeight:'700'}}> OneQuote</Text></Text>
            </View>
            <View style={[SignStyle.footer]}>
                <Text style={SignStyle.text_title}>Email </Text>
                <View style={SignStyle.action}>
                    <TextInput
                        placeholder="Enter Your Email"
                        placeholderTextColor="rgba(171, 179, 187, 1)"
                        style={[SignStyle.textInput, { lineHeight: 30}]}
                        autoCapitalize="none"
                        onChangeText={(val) => handleInputValue(val)}
                        // onEndEditing={(e) => { }}
                        value={data}
                    />
                </View>
                <Text style={{marginTop:5, marginLeft:10, color:'red'}}>{error}</Text>
                {/* Space for Password Input Field Ui */}
                <View style={[SignStyle.button, { marginTop: 20 }]}>
                {!userLogin && (
                    <TouchableOpacity
                        style={[SignStyle.signIn]}
                        onPress={() => {handleSubmit(data) }}
                    >
                        <LinearGradient
                            style={SignStyle.signIn}
                            colors={['rgba(255, 207, 87, 1)', 'rgba(255, 182, 0, 1)']}
                        >
                              <Text style={[SignStyle.textSign, {fontSize:18, color: 'rgba(84, 72, 12, 1)' }]}>Sign In</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                )}
                {userLogin && (
                    <TouchableOpacity  disabled={true} style={[SignStyle.signWith,{backgroundColor:'rgba(255, 207, 87, 1)'}]} >
                     <View style={SignStyle.IconTitle} disabled={true}>
                         <ActivityIndicator size="large" color="#00ff00" />
                         <Text style={[SignStyle.textSign, { marginLeft: 5, lineHeight: 21, color: 'rgba(84, 72, 12, 1)' }]}>Sign In</Text>
                     </View>
                    </TouchableOpacity>
                     
                )}
                </View>
                <View style={SignStyle.ORFlex}>
                    <View style={SignStyle.ORBorder}></View>
                     <Text style={{ color: 'rgba(171, 179, 187, 1)' }}> OR </Text>
                    <View style={SignStyle.ORBorder}></View>
                </View>
                <View style={[SignStyle.button, { marginTop: 10 }]}>
                    {/* Google login */}
                    {!googleLogin && (
                        <TouchableOpacity 
                        onPress={() => Alert.alert('Under Process will be active in 24 Hours')} 
                        
                        style={[SignStyle.signWith,{backgroundColor:'rgba(241, 67, 54, 1)'}]}>
                            <View style={SignStyle.IconTitle}>
                                <Fontisto name="google" color="#fff" size={21} />
                                <Text google={true} style={[SignStyle.textSign, { marginLeft: 8, lineHeight: 20, color: '#fff' }]}>Continue with Google {''}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    {googleLogin && (
                        <TouchableOpacity google={true} disabled={true} style={[SignStyle.signWith,{backgroundColor:'rgba(241, 67, 54, 1)'}]} >
                            <View style={SignStyle.IconTitle} google={true} disabled={true}>
                                <ActivityIndicator size="large" color="#00ff00" />
                                <Text style={[SignStyle.textSign, { marginLeft: 5, lineHeight: 30, color: '#fff' }]}>Continue with Google {''}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    {/* Facebook */}
                    {!facebookLogin && (
                        <TouchableOpacity onPress={handlefacebookLogIn} style={[SignStyle.signWith,{backgroundColor:'rgba(9, 90, 178, 1)'}]}>
                            <Text>{'    '}</Text>
                            <View style={SignStyle.IconTitle}>
                                <MaterialCommunityIcons name="facebook" color="#fff" size={30} />
                                <Text style={[SignStyle.textSign, { marginLeft: 5, lineHeight: 30, color: '#fff' }]}>Continue with Facebook</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    {facebookLogin && (
                        <TouchableOpacity facebook={true} disabled={true} style={SignStyle.signWith}>
                            <View style={SignStyle.IconTitle} facebook={true} disabled={true}>
                                <ActivityIndicator size="large" color="#00ff00" />
                                <Text style={[SignStyle.textSign, { marginLeft: 5, lineHeight: 30, color: '#fff' }]}>Continue with Facebook</Text>
                            </View>
                        </TouchableOpacity>
                    )}

                    {/* Apple Login */}
                    {!appleLogin && (
                        <TouchableOpacity 
                        onPress={() => Alert.alert('Under progress this features')} 
                        style={[SignStyle.signWith,{backgroundColor:'rgba(0, 0, 0, 1)'}]}>
                            <View style={SignStyle.IconTitle}>
                                <Fontisto name="apple" color="#fff" size={25} />
                                <Text style={[SignStyle.textSign, { marginLeft: 8, lineHeight: 22.5, color: '#fff' }]}>Continue with Apple {'   '}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    {appleLogin && (
                        <TouchableOpacity 
                         onPress={() => Alert.alert('Under progress this features')}
                        apple={true} disabled={true}  style={[SignStyle.signWith,{backgroundColor:'rgba(0, 0, 0, 1)'}]}>
                            <View style={SignStyle.IconTitle} apple={true} disabled={true}>
                                <ActivityIndicator size="large" color="#00ff00" />
                                <Text style={[SignStyle.textSign, { marginLeft: 8, lineHeight: 22.5, color: '#fff' }]}>Continue with Apple {'   '}</Text>
                            </View>
                        </TouchableOpacity>
                    )}

                    {/* No account */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUpScreen')}
                        style={[SignStyle.signUp,{marginTop:40}]}
                    >
                        <Text style={{ fontSize: 14 }}>Have an issue ? </Text>
                        <Text style={[SignStyle.textSign, {
                            color: 'rgba(241, 67, 54, 1)', fontSize: 15
                        }]}>Contact us </Text>
                    </TouchableOpacity>
                   {/*  <TouchableOpacity
                        onPress={() => navigation.navigate('SignUpScreen')}
                        style={[SignStyle.signUp,{marginTop:5}]}
                    >
                        <Text style={{ fontSize: 14 }}> </Text>
                        <Text style={[SignStyle.textSign, {
                            color: 'blue', fontSize: 15
                        }]}>SignUp </Text>
                    </TouchableOpacity> */}
                </View>
            </View>
        </View>
    )
}

export default SignInScreen



/*
<Text style={[SignStyle.text_footer, {color: colors.text,marginTop:15}]}>Password</Text>
<View style={SignStyle.action}>
    <Feather 
        style={{lineHeight:30}}
        name="lock"
        color={colors.text}
        size={20}
    />
    <TextInput 
        name="password"
        placeholder="Your Password"
        placeholderTextColor="#666666"
        secureTextEntry={data.secureTextEntry ? true : false}
        style={[SignStyle.textInput, {color: colors.text}]}
        autoCapitalize="none"
        onChangeText={(val) => {}}
        onEndEditing={(e) => {}}
    />
    <TouchableOpacity >
        {data.secureTextEntry ? 
        <Feather style={{lineHeight:30}}
            name="eye-off"
            color="grey"
            size={20}
        />
        :
        <Feather 
            name="eye"
            color="grey"
            size={20}
        />
        }
    </TouchableOpacity>
</View> 
*/





/* 
// Google Login Method
const handleGoogleLogin = () =>{
    setGoogleLogin(true);
    setTimeout(()  => {
        navigation.navigate('SocialMagicBox');
    }, 1000)  
}  
*/