import React, { useState, useEffect, useRef } from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity,TouchableHighlight } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AddImageModal from './AddImageModal';
import secStyles from "./secStyles";

const AddImageSection = (props) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <View style={[secStyles.noteSection,{height:75}]}>
                <View style={{flexDirection:'row',marginTop:5}}>
                    <View style={{marginTop:3}}>
                        <TouchableHighlight activeOpacity={0.1} underlayColor="lightgray" 
                            style={{position:'relative', right:10, width:50, height:50}}
                            onPress={() => {props.setShowFooter(true); props.setShowCamera(false); }}
                        >
                            <MaterialCommunityIcons style={{textAlign:'center',lineHeight:50,color:"gray"}} name="reply" size={32} />
                        </TouchableHighlight>
                    </View>
                    <View style={{marginTop:10, marginLeft:-8}}>
                        <TouchableOpacity style={secStyles.imgPlus}  onPress={() => setShowModal(true)}>
                            <Text style={{fontSize:18}}>Add Photo</Text>
                            <View style={secStyles.imgIcon}><AntDesign  name="plus" size={25}/></View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <ScrollView horizontal={true} style={{flexDirection:'row' ,marginLeft:10, marginTop:5}}>
                            <View style={secStyles.imgDiv}>
                                <Image style={secStyles.img} source={require('../../assets/images/logo.png')} />
                            </View>
                            <View style={secStyles.imgDiv}>
                                <Image style={secStyles.img} source={require('../../assets/images/logo.png')} />
                            </View>
                            <View style={secStyles.imgDiv}>
                                <Image style={secStyles.img} source={require('../../assets/images/logo.png')} />
                            </View>
                            <View style={secStyles.imgDiv}>
                                <Image style={secStyles.img} source={require('../../assets/images/logo.png')} />
                            </View>
                        </ScrollView>
                    </View>
                </View>
                {  showModal ? (
                        <AddImageModal setShowModal={setShowModal} showModal={showModal} />
                ): null } 
        </View>
    )
}

export default AddImageSection;

