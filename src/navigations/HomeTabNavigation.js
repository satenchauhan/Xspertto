import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../HomeScreens/HomeScreen';
import RequestsScreen from "../HomeScreens/requests/RequestsScreen";
import EstimatorScreen from '../HomeScreens/estimator/EstimatorScreen';
import ExpensesScreen from "../HomeScreens/expenses/ExpensesScreen";
import InvoicesScreen from "../HomeScreens/invoices/InvoicesScreen";
import JobsScreen from "../HomeScreens/jobs/JobsScreen";
import NoteScreen from "../HomeScreens/notes/NoteScreen";
import TaskScreen from "../HomeScreens/task/TaskScreen";
import SettingsScreen from "../HomeScreens/settings/SettingsScreen";
import Profile from "../DrawerScreens/Profile";
import ClientScreen from '../Client/ClientScreen';
import Notes from '../Client/notes/Notes';


import { 
    NavHeadStyle,
    BottomTabHeaderStyle,
    HomeTabHeaderStyle,
    HeaderMenubar, 
    StackHeadClientStyle, 
    NoteHeadStyle,
} from './StackStyles';


const ClientHeadStyle = {
    headerStyle: {
      backgroundColor:'#23BF7E',
    },
    headerTintColor: 'white',
    headerBackTitle: 'Back',
  };
  
const ProfileNavigator = ({navigation})=> {
    const ProfileStack = createStackNavigator();
    return (
        <ProfileStack.Navigator screenOptions={NavHeadStyle}>
            <ProfileStack.Screen name="Profile"  component={Profile}  
                options={{headerLeft:()=> (<HeaderMenubar />),HomeTabHeaderStyle}} 
            />
        </ProfileStack.Navigator>
    );
};

const ClientStack = createStackNavigator();
const ClientNavigator = ({navigation})=> {
    return (
        <ClientStack.Navigator screenOptions={ClientHeadStyle}>
            <ClientStack.Screen name="ClientPage" component={ClientScreen}  
                options={StackHeadClientStyle}   
            />
        </ClientStack.Navigator>
    );
}; 

const NoteStack = createStackNavigator();
const NoteNavigator = ({navigation})=> {
    return (
        <NoteStack.Navigator>
            <NoteStack.Screen name="Notes" component={Notes}  
                options={NoteHeadStyle}   
            />
        </NoteStack.Navigator>
    );
}; 



const Stack = createStackNavigator();
const HomeTabNavigation =({navigation})=>{
    return (
        <Stack.Navigator  screenOptions={NavHeadStyle} >
            <Stack.Screen name='ONEQUOTE' component={HomeScreen} options={BottomTabHeaderStyle} />
            <Stack.Screen name="Requests" component={RequestsScreen} options={HomeTabHeaderStyle} />
            <Stack.Screen name="Estimator" component={EstimatorScreen} options={HomeTabHeaderStyle} />
            <Stack.Screen name="Jobs" component={JobsScreen} options={HomeTabHeaderStyle} />
            <Stack.Screen name="Invoices" component={InvoicesScreen} options={HomeTabHeaderStyle} />
            <Stack.Screen name="TaskScreen" component={TaskScreen} options={HomeTabHeaderStyle}/>
            <Stack.Screen name="Expenses" component={ExpensesScreen} options={HomeTabHeaderStyle} />
            <Stack.Screen name="NoteScreen" component={NoteScreen} options={HomeTabHeaderStyle} />
            <Stack.Screen name="Settings" component={SettingsScreen} options={HomeTabHeaderStyle} />
            <Stack.Screen name="ProfileScreen" component={ProfileNavigator} options={{headerShown: false}} />
            <Stack.Screen name="Client" component={ClientNavigator} options={{headerShown: false}}  />
            <Stack.Screen name="NoteSave" component={NoteNavigator} options={{headerShown: false}}  />
        </Stack.Navigator>
    )
}

export {HomeTabNavigation};

