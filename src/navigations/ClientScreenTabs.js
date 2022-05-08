import React from "react";
import {Text, StyleSheet,TouchableOpacity, TouchableHighlight,} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { useNavigation } from '@react-navigation/native';
import ClientScreen from "../HomeScreens/clients/ClientScreen";

const ClientScreenTabs = (props) => {
    const navigation = useNavigation();
    const HeaderTab = createBottomTabNavigator();
    return (
        <HeaderTab.Navigator
            initialRouteName="NewClientScreen"
            screenOptions={{
                // activeTintColor: "#051E75",
                headerShown:false,
            }}
        >
            <HeaderTab.Screen
                name="Home"
                component={ClientScreen}
                options={{
                    // tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <TouchableOpacity activeOpacity={'#F5F5FF'} onPress={() => props.navigation.navigate('OneQuote')}>
                            <MaterialCommunityIcons name="home" color={color} size={25} />
                        </TouchableOpacity>
                    ),
                }}
            />
            <HeaderTab.Screen
                name="AddNewClient"
                component={""}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <TouchableHighlight activeOpacity={0.1} underlayColor="lightgray"
                            style={{ width: 55, height: 55, backgroundColor: "#00cec9", borderRadius: 50, marginTop: 3 }}
                            onPress={() => props.navigation.navigate("NewClient")}
                        >
                            <Text style={{ textAlign: 'center', lineHeight: 55, color: '#fff' }}>
                                <AntDesign name="plus" size={35} />
                            </Text>
                        </TouchableHighlight>
                    ),
                }}
            />
            <HeaderTab.Screen
                name="NewClientScreen"
                component={ClientsHomeScreen}
                options={{
                    tabBarLabel: 'Client',
                    activeTintColor: "#3851DD",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" color={color} size={25} />
                    ),
                }}
            />

        </HeaderTab.Navigator>
    )
}

export default ClientScreenTabs

