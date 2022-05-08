import React from 'react';
// import {GoogleSignin,statusCodes} from '@react-native-google-signin/google-signin';
import { AccessToken } from 'react-native-fbsdk-next';
import config from '../../config/config';


// Google Login Method
/* const UserGoogleLogin = async () =>{
    GoogleSignin.configure({ 
        scopes:['https://www.googleapis.com/auth/drive.readonly'],
        webClientId: '751802828776-pjnliipq4fpf373oakj6fk8nursr1c0d.apps.googleusercontent.com',
        // webClientId: config.DEV_ENV.WEB_CLIENT_ID,
        // androidClientId: config.DEV_ENV.ANDROID_CLIENT_ID, 
        offlineAccess: true, 
    });
    try {
        await GoogleSignin.hasPlayServices();
        const data = await GoogleSignin.signIn();
        // console.log(data);
        return data;
    } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // console.log('user cancelled the login')
            return false;
        } else if (error.code === statusCodes.IN_PROGRESS) {
            // console.log('operation is in progress already');
            return false;
        }  else {
            console.log(error);
            return error;
        }
    }
} */ 


//Facebook Login Method
const UserfacebookLogIn = async () =>{
    try {
        AccessToken.getCurrentAccessToken().then(
            (data) => {
              console.log(data.accessToken.toString())
            }
        )    
    } catch (error) {
        console.log("login has error: " + error);
    } 
}


//Apple Login Method
const UserAppleLogIn = () =>{
    setAppleLogin(true);  
}

// export { UserGoogleLogin };


/* const config = {
        iosClientId:'482485796949-lm54vvcv1kl3tvbie2el7l80s1a1vldk.apps.googleusercontent.com',
        androidClientId: '482485796949-bqv6lrjppqbfa3oea6l82rdf9o9gnbpb.apps.googleusercontent.com',
        scopes: ['profile','email']
    };
    await Google.logInAsync(config)
        .then((result) =>{
            const {type, user} = result;
            if(type === 'success'){
                const {email, name, photoUrl} = user;
                setUserData(user);
                handleMessage('Google signin successfull','success');
            }else{
                handleMessage('Google signin was cancelled');
            }
            setGoogleLogin(false);
        })
    .catch(error => {
        console.log(error);
        handleMessage('An error occured, check your network and try again ');
        setGoogleLogin(false);
    }) 
*/


