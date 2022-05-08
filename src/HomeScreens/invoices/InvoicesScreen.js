import React from 'react';
import { SafeAreaView,Text, View, StyleSheet, StatusBar } from 'react-native';
import { Button, Card } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import InvoStyles from './styles';

function InvoicesScreen() {
    return (
        <SafeAreaView  style={InvoStyles.container}>
            <StatusBar backgroundColor='rgba(83, 83, 83, 0.58)' barStyle="light-content" />
            <View>
                <Text>This is Invoices page</Text>  
            </View>
        </SafeAreaView>
    );
};

export default InvoicesScreen;

