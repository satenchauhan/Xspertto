import React from 'react';
import { SafeAreaView,Text, View, StyleSheet, StatusBar } from 'react-native';
import { Button, Card } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import ReqStyles from './styles';

const RequestsScreen = () => {
    return (
        <SafeAreaView  style={ReqStyles.container}>
            <StatusBar backgroundColor='rgba(83, 83, 83, 0.58)' barStyle="light-content" />
            <View>
                <Text>This is Request page</Text>  
            </View>
        </SafeAreaView>
    );
};

export default RequestsScreen;

