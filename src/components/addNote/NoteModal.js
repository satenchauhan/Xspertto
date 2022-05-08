import React, { useState, useEffect, useRef } from 'react'
import { Text, View, Modal, TextInput, TouchableOpacity,Animated,Dimensions } from 'react-native';
import {Button, Card } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import modalStyles from "./modalStyles";

export default function NoteModal(props) {
    return (
        <View style={modalStyles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.showModal}
                onRequestClose={() => {
                  setShowModal(!props.showModal);
                }}
            >
                <View style={modalStyles.modalView}>
                    <View style={modalStyles.mainNote}>
                        <View style={modalStyles.NoteButtons}>
                            <TouchableOpacity style={{paddingBottom:5}} onPress={() => 
                                    props.setShowModal(!props.showModal)}
                                > 
                                <Text>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingBottom:5}} onPress={() => {console.log('pressed')}}>
                                <Text>Add Note </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingBottom:5}} onPress={() => {console.log('pressed')}}>
                                <Text>Save</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{width:'100%'}}> 
                            <TextInput
                                style={{padding:10, textAlignVertical:'top'}}
                                underlineColorAndroid="transparent"
                                placeholder="Please write your note here"
                                placeholderTextColor="grey"
                                numberOfLines={10}
                                multiline={true}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}



