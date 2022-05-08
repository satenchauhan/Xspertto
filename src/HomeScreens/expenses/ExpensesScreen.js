import React from 'react';
import { SafeAreaView,Text, View, StyleSheet, StatusBar } from 'react-native';
import { Button, Card } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import ExpStyles from './styles';

function ExpensesScreen() {
    return (
        <SafeAreaView  style={ExpStyles.container}>
            <StatusBar backgroundColor='rgba(83, 83, 83, 0.58)' barStyle="light-content" />
            <View>
                <Text>This is Expenses page</Text>  
            </View>
        </SafeAreaView>
    );
};

export default ExpensesScreen;

