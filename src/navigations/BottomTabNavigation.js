import React,{useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Text,View, TouchableHighlight, StyleSheet} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import WorkBookScreen from '../HomeScreens/workbook/WorkBookScreen';
import ScheduleScreen from '../HomeScreens/schedule/ScheduleScreen';
import TimesheetScreen from '../HomeScreens/timesheet/TimesheetScreen';
import { BottomTabHeaderStyle,WbTabHeaderStyle, NavHeadStyle} from './StackStyles';
import { HomeTabNavigation } from './HomeTabNavigation';
import colors from '../components/common/colors';


const WbHeadStyle = {
    headerStyle: {
      backgroundColor:'#666666',
    },
    headerTintColor: 'white',
    headerBackTitle: 'Back',
};


const EstimateStack  = createStackNavigator();
const WorkBookStack = createStackNavigator()
const ScheduleStack  = createStackNavigator();
const TimesheetStack = createStackNavigator();
const SearchStack    = createStackNavigator();


const WorkBookStackScreen = ({navigation}) => {
    return (
        <WorkBookStack.Navigator screenOptions={WbHeadStyle}>
            <WorkBookStack.Screen name="WORKBOOK" component={WorkBookScreen} options={WbTabHeaderStyle} />
        </WorkBookStack.Navigator>
    );
};


const ScheduleStackScreen = ({navigation}) => {
    return (
        <ScheduleStack.Navigator screenOptions={NavHeadStyle}>
            <ScheduleStack.Screen name="SCHEDULE" component={ScheduleScreen} options={BottomTabHeaderStyle} />
        </ScheduleStack.Navigator>
    );
};

const TimesheetStackScreen = ({navigation}) => {
    return (
        <TimesheetStack.Navigator screenOptions={NavHeadStyle}>
            <TimesheetStack.Screen name="TIMESHEET" component={TimesheetScreen} options={BottomTabHeaderStyle} />
        </TimesheetStack.Navigator>
    );
};

const Tab = createBottomTabNavigator();
const BottomTabNavigation = ({navigation}) => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarPosition='bottom'
            swipeEnabled={false}
            animationEnabled={false}
            screenOptions={{
                headerShown:false, 
                tabBarHideOnKeyboard:{
                    keyboardHidesTabBar: true,  
                },  
            }} 
        >
            <Tab.Screen
                name="Home"
                component={HomeTabNavigation}
                options={{
                    tabBarLabel: 'Home',
                    tabBarActiveTintColor: colors.HeadColor,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={27}/>
                    ),
                }} 
                
            />
            <Tab.Screen
                name="Workbook"
                component={WorkBookStackScreen}
                options={{
                    tabBarLabel: 'Workbook',
                    tabBarActiveTintColor: colors.HeadColor,
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="appstore-o" color={color} size={22} />
                    ),
                }}
            />
            <Tab.Screen
                name={" "}
                component={" "}
                options={{
                    activeTintColor: colors.HeadColor,
                    tabBarIcon: () => (
                        <TouchableHighlight  underlayColor="lightgray" 
                            style={styles.midButton}
                            onPress={() => {console.log('Float Button')}}
                            underlayColor={colors.Stcolor}
                        >
                            <Text style={styles.midBtnIcon}>
                                <AntDesign name="plus" size={32}/>
                            </Text>
                        </TouchableHighlight>
                    ), 
                }}
            />
            <Tab.Screen
                name="ScheduleScreen"
                component={ScheduleStackScreen}
                options={{
                    tabBarLabel: 'Schedule',
                    tabBarActiveTintColor: colors.HeadColor,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="calendar" color={color} size={27} />
                    ),
                }}
            />
            <Tab.Screen
                name="TimesheetScreen"
                component={TimesheetStackScreen}
                options={{
                    tabBarLabel: 'Timesheet',
                    tabBarActiveTintColor: colors.HeadColor,
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="alarm" color={color} size={30} />
                    ),
                }}
            />
            
        </Tab.Navigator>
    );
}

export {BottomTabNavigation};

const styles = StyleSheet.create({
    midButton:{
        width:50, 
        height:50, 
        backgroundColor: '#00E3BA', 
        borderRadius:25, 
        // marginTop:3
        alignItems:'center'
    },
    midBtnIcon:{
        textAlign:'center',
        lineHeight:50, 
        color:'#fff'
    }
})
