import React from "react";
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Recent from '../Workbook/all_clients/Recent';
import AllClients from '../Workbook/all_clients/AllClients';
import ByStatus from '../Workbook/all_clients/ByStatus';



// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();
const TopTabNavigator =() => {
    return (
        <Tab.Navigator screenOptions={{activeTintColor: '#fff',backgroundColor:"#3851DD"}}>
            <Tab.Screen name="Recent" component={Recent} />
            <Tab.Screen name="All" component={AllClients} />
            <Tab.Screen name="By Status" component={ByStatus} />
        </Tab.Navigator>
    );
}


export default TopTabNavigator;