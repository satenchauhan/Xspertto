import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Fontisto';
import notes_data from './FakeData';

const AllNotes = (props) => {
    const navigation = useNavigation();
    return (
        <View style={nStyles.section}>
            {props.name !== null ? <Text style={nStyles.tabTitle}>{props.name}</Text>:null}
            {notes_data.map((item,i) => 
            <TouchableOpacity key={i} style={nStyles.noteCard}
               onPress={()=>navigation.navigate('NoteSave')}
            >
                <View style={nStyles.headerBox}>
                    <View style={nStyles.headerLeftBox}>
                        <View style={{width:55}}>
                            <View style={nStyles.outerRing}>
                                <Avatar.Image source={require('../../assets/images/client.png')} size={50} /> 
                            </View>
                        </View>
                        <View style={{width:'100%',backgroundColor:'#fff'}}>
                            <Text style={nStyles.userText}>{item.client_name}</Text>
                            <Text style={nStyles.dateTxt}>
                                {/* 5:30AM, October 06, 2021 */}
                                {item.created_on[4].substring(0,7)+" "+item.created_on[1]+" "+item.created_on[2]+", "+item.created_on[3]}
                            </Text>
                        </View>
                    </View>
                    <View style={nStyles.headerRightBox}>
                        <Text style={nStyles.rightTxt}>{item.note}</Text>
                    </View>
                </View>
                <View style={nStyles.CommentBox}>
                    <Text style={nStyles.commentTxt}>
                        {item.comment}
                    </Text>
                </View>
                <View style={nStyles.fileBox}>
                    {item.file.map((imgItem,x) => 
                        imgItem !=='' ?
                        <View key={x} style={nStyles.file}>
                            <Image source={imgItem} size={50} />
                        </View>
                        :null
                    )}
                </View>
                <View style={nStyles.linkedBox}>
                    <Icon name="link" color="rgba(50, 51, 56, 0.7)" size={18} />
                    <Text style={nStyles.linked}>Linked to: Quotes, Job, Invoices</Text>
                </View>
            </TouchableOpacity>
            )}
        </View>
    )
}

export default AllNotes;

const nStyles = StyleSheet.create({
    section:{
        flex:1,
        alignSelf:'center',
        width:'98%',
        marginTop:10,  
        // paddingHorizontal:3
    },
    tabTitle:{
        fontFamily:'Roboto-Bold',
        fontSize:22,
        color:'rgba(50, 51, 56, 1)',
        paddingLeft:3,
        paddingBottom:15
    },
    noteCard:{
        flex:1,
        backgroundColor:'#FFFFFF', 
        borderWidth:1,
        borderColor:'rgba(211, 211, 211, 1)',
        borderRadius:5, 
        marginBottom:20
    },
    headerBox:{
        flexDirection:'row', 
        alignItems:'flex-start', 
        justifyContent:'flex-start',
        borderBottomWidth:2, 
        borderColor:'rgba(222, 222, 222, 1)', 
        height:70,
        marginHorizontal:5,
        // paddingHorizontal:2
    },
    headerLeftBox:{
        flex:1,
        flexDirection:'row', 
        alignItems:'flex-start', 
        backgroundColor:'#FFFFFF',
        paddingLeft: 7,
        paddingTop:15
    },
    headerRightBox:{
        flex:1,
        borderTopRightRadius:5, 
        paddingLeft: 7,
        paddingTop:15
    },
    outerRing:{
        flexDirection:'column', 
        alignItems:'center', 
        justifyContent:'center',    
        width:35, 
        height:35, 
        borderRadius:17, 
        // borderWidth:2, 
    },
    rightTxt:{
        fontFamily:'Roboto-Bold',
        fontSize:14, 
        color:'rgba(35, 191, 126, 1)',  
        textTransform:'capitalize',
        alignSelf:'flex-end', 
        marginTop:20
    },
    userText:{
        fontFamily:'RobotoCondensed-Bold',
        fontSize:13, 
        color:'rgba(50, 51, 56, 1)', 
        fontWeight:'700',
        // textAlign:'left'
    },
    dateTxt:{
        fontFamily:'RobotoCondensed-Regular',
        fontSize:12, 
        color:'rgba(50, 51, 56, 1)', 
        fontWeight:'400',   
    },
    CommentBox:{
        flex:1, 
        paddingHorizontal:10, 
        paddingTop:15, 
        paddingBottom:20
    },
    commentTxt:{
        fontFamily:'RobotoCondensed-Regular',
        fontSize:16, 
        color:'black', 
        textAlign:'justify'
    },
    fileBox:{
        flex:1, 
        flexDirection:'row', 
        alignItems:'flex-start',
        marginLeft:10, 
        marginRight:10,
        paddingBottom:20
    },
    file:{
        flex:1,
        height:60
    },
    linkedBox:{
        flex:1,
        flexDirection:'row', 
        alignItems:'flex-start',
        paddingHorizontal:10,
        paddingBottom:20
    },
    linked:{
        fontSize:12, 
        fontFamily:'RobotoCondensed-Regular',
        color:'rgba(50, 51, 56, 1)', 
        fontWeight:'700', 
        paddingLeft:10
    }  
});



/* 
// <Image style={{backgroundColor:'#fff',}}  source={require('./../assets/images/sidebarpic.png')} resizeMode="contain" style={{width:26,height:42}} />
*/