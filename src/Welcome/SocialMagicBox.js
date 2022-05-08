import React,{useEffect} from 'react';
import { View, Text} from 'react-native';
import { Magic } from '@magic-sdk/react-native';
// import { magic } from '../components/common/magic';
/* import { OAuthExtension }  from '@magic-ext/react-native-oauth';

const magic = new Magic('pk_live_90FEDFE5B0B9321D', {
    extensions: [new OAuthExtension()]
}); 
 */
const SocialMagicBox = () => {
    
    const result = async () => {
        try {
            
            const res = await magic.oauth.loginWithPopup({
                provider: 'google',
                redirectURI: 'testapp://demo/your/oauth/callback',
                scope: ['user:email'], /* optional */
            });
            console.log('response', res[0]);
        } catch (error) {
            console.log(error);
        }
    } 
    result();
    
    useEffect(async ()  => {
    }, [])
    return <> 
            <magic.Relayer /> 
        </>
};


export default SocialMagicBox;


 /*  
 const token = await magic.auth.loginWithMagicLink({ email: user});   
    const isLoggedIn = await magic.user.isLoggedIn();
    console.log("Token " + token)
    console.log("status : " + isLoggedIn)
    if(isLoggedIn===true){
        setTimeout(() => {
            props.navigation.navigate('Home');
        }, 1000)  
    } 
    {
         "email": "livonsaten4u@yahoo.com", 
         "issuer": "did:ethr:0xcfF7dc5667F95bdEce5bF9a6C0749806E9f6bFD7", 
         "publicAddress": "0xcfF7dc5667F95bdEce5bF9a6C0749806E9f6bFD7"
    }

 */
