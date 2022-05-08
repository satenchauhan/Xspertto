import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Card from '../../../../components/card/Card'
import { MaterialIcons_Icon, SimpleIcon_Icon } from '../../../../components/icons/icons'
import Title from '../../../../components/title/Title'

const Detail = () => {
    return (
        <View style={styles.mainContainer}>
            <Card>
                <View style={styles.TotalBox}>
                    <View>
                        <Text style={styles.LeftLabel}>Quote Number:</Text>
                        <Text style={styles.LeftLabel}>Date:</Text>
                        <Text style={styles.LeftLabel}>PO Number</Text>
                    </View>
                    <View>
                        <Text style={styles.RightValueTxt}>#232213</Text>
                        <Text style={styles.RightValueTxt}>11/27/2120</Text>
                        <Text style={styles.RightValueTxt}>JDH276472828DD</Text>
                    </View>
                </View>
            </Card>
            <Card>
                <View style={styles.client}>
                    <View style={{paddingVertical:10}}>
                        <Title>Client</Title>
                        <Title style={styles.txt1}>Client Name</Title>
                        <Title style={styles.txt2}>Client Name Business Name (if applicable)</Title>
                    </View>
                    <View style={styles.arrowBtn}>
                        <TouchableOpacity onPress={() => console.log('clicked')}>
                            <MaterialIcons_Icon  name="arrow-forward-ios" size={40} color="#3851DD" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Card>
            <Card>
                <View style={[styles.client]}>
                    <View style={{paddingVertical:10}}>
                        <Title>Property</Title>
                        <Title style={styles.txt3}>123 Street Name </Title>
                        <Title style={[styles.txt3,{paddingTop:5}]}>Pakanae, Ontario, K2m 0G6</Title>
                    </View>
                    <View style={styles.arrowBtn}>
                        <TouchableOpacity onPress={() => console.log('clicked')}>
                            <MaterialIcons_Icon  name="arrow-forward-ios" size={40} color="#3851DD" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Card>
            <Card>
                <View style={styles.TotalBox}>
                    <View style={{paddingTop:10}}>
                        <Title>Related</Title>
                        <Title style={[styles.txt3,{marginTop:5}]}>Job #1 - The name of job goes here</Title>
                    </View>
                    <View style={styles.arrowBtn}>
                        <TouchableOpacity onPress={() => console.log('clicked')}>
                            <MaterialIcons_Icon  name="arrow-forward-ios" size={40} color="#3851DD" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Card>
            <Card>
                <View style={styles.TotalBox}>
                    <View style={{paddingTop:10}}>
                        <Title>Client Message</Title>
                        <Title style={[styles.txt3,{marginTop:5}]}>There’s no messages for this quote</Title>
                    </View>
                    <View style={styles.arrowBtn}>
                        <TouchableOpacity onPress={() => console.log('clicked')}>
                            <MaterialIcons_Icon  name="arrow-forward-ios" size={40} color="#3851DD" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    mainContainer:{
        flex:1.5, 
        paddingHorizontal:4, 
        backgroundColor:'#F5F5F5'
    },
    TotalBox:{ 
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-between',
        paddingVertical:4,
        paddingHorizontal:10,
        marginHorizontal:2,   
    },
    client:{       
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-between',
        paddingVertical:4,
        paddingHorizontal:10,
        marginHorizontal:2,   
    },
    LeftLabel:{
        fontFamily:'RobotoCondensed-Regular', 
        fontSize:14, 
        color:'#323338',
        paddingVertical:4
    },
    RightValueTxt:{
        fontFamily:'RobotoCondensed-Bold', 
        fontSize:14, 
        color:'rgba(50, 51, 56, 1)', 
        textAlign:'right',
        paddingVertical:4
    },
    txt1:{
        fontSize:18, 
        color:'#1C202D',
        paddingTop:10,
        paddingVertical:5
    },
    txt2:{
        fontFamily:'Roboto', 
        fontSize:16, 
        color:'rgba(28, 32, 45, 0.8)'
    },
    txt3:{
        fontSize:18, 
        color:'#1C202D',
        paddingTop:10,
    },
    arrowBtn:{
        flex:1, 
        alignItems:'flex-end', 
        justifyContent:'flex-end', 
        paddingVertical:30
    }

    
})
