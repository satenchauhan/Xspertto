import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { WelcomeHeaderStyle,SignHeaderStyle, MagicStyle } from './StackStyles';
import Welcome from '../Welcome/Welcome';
import BusinessInfo from '../Welcome/BusinessInfo';
import BusinessLogo from '../Welcome/BusinessLogo';
import ThatsIT from '../Welcome/ThatsIT';
import SignInScreen from '../Welcome/SignInScreen';
import SignUpScreen from '../Welcome/SignUpScreen';
import MagicBox from '../Welcome/MagicBox';
import SocialMagicBox from '../Welcome/SocialMagicBox';

const RootStack = createStackNavigator();
const WelcomeStackScreen = () => {
    return (
    <RootStack.Navigator initialRouteName="WelcomePage">
        <RootStack.Screen name="WelcomePage" component={Welcome} options={{headerShown: false}} />
        <RootStack.Screen name="BusinessInfo" component={BusinessInfo} options={WelcomeHeaderStyle} />
        <RootStack.Screen name="BusinessLogo" component={BusinessLogo} options={WelcomeHeaderStyle} />
        <RootStack.Screen name="ThatsIT" component={ThatsIT} options={WelcomeHeaderStyle} />
        <RootStack.Screen name="SignInScreen" component={SignInScreen} options={SignHeaderStyle} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} options={SignHeaderStyle}  />
        <RootStack.Screen name="MagicBox" component={MagicBox} options={MagicStyle}  />
        {/* <RootStack.Screen name="SocialMagicBox" component={SocialMagicBox} options={MagicStyle}  /> */}
    </RootStack.Navigator>
    ) 
}


export default WelcomeStackScreen;