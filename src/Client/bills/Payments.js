import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import PaidBox from '../../components/common/PaidBox';
import PaidTopHeadLine from '../../components/common/PaidTopHeadLine';
import PaymentSection from '../../components/common/PaymentSection';


const payments = 'payments';

const Payments = ({style}) => {

    return (
        <View style={[Styles.section,style]}>
            <Text style={[Styles.title]}>Payments</Text>
                <TouchableOpacity  style={[Styles.CardBox]} onPress={() => console.log('pressed')}>
                    <PaidTopHeadLine>paid</PaidTopHeadLine>
                    <PaidBox>paid</PaidBox>
                    <PaymentSection>
                        <Text style={{color:'rgba(69, 77, 106, 1)', fontSize:14}}>{'Payment #1000'}</Text>
                        <Text>{'October, 15, 2021'}</Text>
                        <Text>{'Cash'}</Text>
                        <Text>{'100.00'}</Text>
                        <Text>{'Quote #1'}</Text>
                    </PaymentSection>
                </TouchableOpacity> 
                <TouchableOpacity  style={Styles.CardBox} onPress={() => console.log('pressed')}>
                    <PaidTopHeadLine>paid</PaidTopHeadLine>
                    <PaidBox>paid</PaidBox>
                    <PaymentSection>
                        <Text style={{color:'rgba(69, 77, 106, 1)', fontSize:14}}>{'Payment #1001'}</Text>
                        <Text>{'October, 15, 2021'}</Text>
                        <Text>{'Cash'}</Text>
                        <Text>{'100.00'}</Text>
                        <Text>{'Quote #2'}</Text>
                    </PaymentSection>
                </TouchableOpacity>
                <TouchableOpacity  style={Styles.CardBox} onPress={() => console.log('pressed')}>
                    <PaidTopHeadLine>paid</PaidTopHeadLine>
                    <PaidBox>paid</PaidBox>
                    <PaymentSection>
                        <Text style={{color:'rgba(69, 77, 106, 1)', fontSize:14}}>{'Payment #1002'}</Text>
                        <Text>{'October, 15, 2021'}</Text>
                        <Text>{'Cash'}</Text>
                        <Text>{'100.00'}</Text>
                        <Text>{'Quote #3'}</Text>
                    </PaymentSection>
                </TouchableOpacity> 
        </View>
    )
}

export {Payments, payments};

const Styles = StyleSheet.create({
    outerBox:{
        backgroundColor:"#F5F5F5",  
        padding:1.5,
        marginBottom:10,
        borderRadius:5,
    },
    section:{
        flex:1,
        alignSelf:'center',
        width:'98%',
        marginTop:60, 
    },
    CardBox:{
        marginTop:10,
        marginBottom:2
    },
    txt:{
        color:'background: rgba(14, 74, 118, 1)',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 23,
        letterSpacing: 0,
        textAlign: 'left',
    },
    title:{
        fontSize:20, 
        lineHeight:23.44, 
        fontWeight:'700',
        color:'rgba(69, 77, 106, 1)',
        marginLeft:7,
        marginTop:10,
        position:'absolute',
        top:1
    },
})

