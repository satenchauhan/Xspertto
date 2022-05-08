import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import { dBlue, bColor, dGreen } from '../../components/common/colors';
import infoStyles from './infoStyles';


const infoTab ="INFO";

const Info = () =>{
    
    return (
            <View style={{flex:1, backgroundColor:'#F5F5F5',}}> 
                <View style={{flexDirection:'row'}}> 
                    <View style={[infoStyles.topBox, {borderColor:bColor}]}>
                        <View style={infoStyles.section}>
                            <Text style={infoStyles.topTxt}>Account Type</Text>
                            <Text style={infoStyles.Txt}>Individual</Text>
                        </View>
                    </View>
                    <View style={[infoStyles.topBox, {borderColor:bColor}]}>
                        <View style={infoStyles.section}>
                            <Text style={infoStyles.topTxt}>Assigned To</Text>
                            <Text style={infoStyles.Txt}>Tom Stephen</Text>
                        </View>
                    </View>
                </View>
                <View style={[infoStyles.titleBox,{borderColor:bColor,}]}>
                    <Text style={[infoStyles.titleTxt,{color:dBlue}]}>Contact Information</Text>
                </View>
                <View style={{borderWidth:1.7, borderTopWidth:0,  borderColor:bColor, padding:10}}>
                    <Text style={{fontSize:11, color:'#000000', fontWeight:'400'}}>Main</Text>
                    <View style={infoStyles.mainBox}>
                        <Text style={[infoStyles.Txt]}>Daniel Graystone</Text>
                        <View style={infoStyles.phoneMsg}>
                            <TouchableOpacity style={{marginRight:10}}>
                                <AntDesign name="phone" size={25} color={'#23BF7E'}  />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <MaterialCommunityIcons name="message-processing-outline" size={25} color={'#23BF7E'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginTop:5}}>
                    <Text style={{fontSize:11, color:'#000000', fontWeight:'400'}}>Alt</Text>
                           <View style={[infoStyles.mainBox]}>
                            <Text style={[infoStyles.Txt]}>Abagail Bently</Text>
                            <View style={infoStyles.phoneMsg}>
                                <TouchableOpacity style={{marginRight:10}}>
                                    <MaterialCommunityIcons name="email-outline"  size={25} color="#23BF7E"  />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <MaterialCommunityIcons name="message-processing-outline" size={25} color={'#23BF7E'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    {/* Add more contact button */}
                        <View style={infoStyles.addBtnBox}>
                            <TouchableOpacity  style={infoStyles.addBtn}
                                onPress={() => console.log('add prop')} >
                                <Text style={infoStyles.btnLabel}>
                                    Add another contact 
                                    {/* <AntDesign  name="plus" size={20}/> */}
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                <View style={[infoStyles.titleBox,{borderColor:bColor}]}>
                    <Text style={[infoStyles.titleTxt,{color:dBlue}]}>Properties</Text>
                </View>
                <View style={{borderWidth:1.7, borderTopWidth:0,  borderColor:bColor, padding:10}}>
                    <View style={[infoStyles.mainBox,{height:80}]}>
                        <View>
                            <Text style={{fontSize:12}}>Main</Text>
                            <Text style={infoStyles.Txt}>521 Foxlight Circle</Text>
                            <Text style={[infoStyles.Txt,{lineHeight:18}]}>Nepean, Ontarioa, km031</Text>
                        </View>
                        <TouchableOpacity  style={{marginTop:18}}>
                            <SimpleIcon name="arrow-right"  size={22} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:5}}>
                        <View style={[infoStyles.mainBox,{marginTop:10,height:80}]}>
                            <View>
                                <Text style={{fontSize:12}}>Alt</Text>
                                <Text style={infoStyles.Txt}>521 Foxlight Circle</Text>
                                <Text style={[infoStyles.Txt,{lineHeight:18}]}>Nepean, Ontarioa, km031</Text>
                            </View>
                            <TouchableOpacity  style={{marginTop:18}}>
                                <SimpleIcon name="arrow-right"  size={22} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={infoStyles.addBtnBox}>
                        <TouchableOpacity  
                            onPress={() => console.log('add prop')}
                            style={infoStyles.addBtn}>
                            <Text style={infoStyles.btnLabel}>
                                Add another property 
                                {/* <AntDesign  name="plus" size={20}/> */}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[infoStyles.titleBox,{borderColor:bColor,}]}>
                    <Text style={[infoStyles.titleTxt,{color:dBlue}]}>Billing Address</Text>
                </View>
                <View style={[infoStyles.billinBox,{borderColor:bColor}]}>
                    <View style={{marginTop:5}}>
                        <View style={[infoStyles.mainBox,{height:70}]}>
                            <View>
                                <Text style={infoStyles.Txt}>521 Foxlight Circle</Text>
                                <Text style={[infoStyles.Txt,{lineHeight:19}]}>Nepean, Ontarioa, km031</Text>
                            </View>
                            <TouchableOpacity  style={{marginTop:13}}>
                                <SimpleIcon name="arrow-right"  size={22} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
    )
}

export {Info, infoTab};




