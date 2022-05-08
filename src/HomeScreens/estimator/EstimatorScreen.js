import React from 'react';
import { Text, View, Image, SafeAreaView, ScrollView, Button} from 'react-native';
import { Card, Title } from 'react-native-paper';
import TopStatusBar from '../../components/common/TopStatusBar';
import {EstimatorFloatButtons} from './EstimatorFloatButtons';
import EstStyles from './styles';

function EstimatorScreen() {
    return (
        <SafeAreaView style={EstStyles.safeViewArea}>
            <TopStatusBar  />
               <ScrollView>
                    <Card style={EstStyles.container}>
                        <Title style={{textAlign:'center', marginTop:20}}>Estimator</Title>
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:20, fontWeight:'bold', fontStyle:'italic',  margin:10}}>Instructions:</Text>
                            <Text style={EstStyles.estText}>1. Add an area to get started.</Text>
                            <Text style={EstStyles.estText}>2. Keep adding more areas until finished.</Text>
                            <Text style={EstStyles.estText}>3. When finished click "Create" button.</Text>
                            <Text style={EstStyles.estText}>4. Add a client and send an Estimates.</Text>
                            <Text style={EstStyles.estText}>5. Estimator create to estimates which will show up in your ilst. </Text>
                        </View>
                        <View style={{paddingBottom:0}}>
                            <Text style={{fontSize:15,fontWeight:'bold', marginLeft:8, marginTop:20}}>Need Help ? Watch our user guide videos [here]</Text>
                            <View style={EstStyles.bottomSec}>
                                <Text style={EstStyles.clk}>Click here to get started</Text>
                                <Image style={EstStyles.arrow} source={require('../../assets/images/arrow2.png')} />
                            </View>
                        </View>
                        
                    </Card>
                </ScrollView>
                <EstimatorFloatButtons />
        </SafeAreaView>
    );
};

export default EstimatorScreen;

