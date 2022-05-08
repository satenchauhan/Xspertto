import React, { useState, useEffect, useContext } from "react";
import { Alert, Modal, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SuperContext } from "../../context/ContextProvider";
import { MaterialCom_Icon, MaterialIcons_Icon } from "../icons/icons";
import ImagePicker from 'react-native-image-crop-picker';


/* 
   const { width, height } = Image.resolveAssetSource(image);
   const ratio = height / width;
   const SCREEN_WIDTH = Dimensions.get('window').width;
   
 */
export const ImageModal = () => {
    const {cameraModal, setCamereModal} = useContext(SuperContext)
    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
           width: 300,
           height: 300,
           cropping: true,
         }).then(image => {
           console.log(image);
         });
     }
   
    const choosePhotoFromGallery = () => {
        ImagePicker.openPicker({
           width: 300,
           height: 300,
           cropping: true
         }).then(image => {
           console.log(image);
         });
     }

  return (
    <View style={imgStyles.centeredView}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={cameraModal}
            onRequestClose={() => {
            setCamereModal(!cameraModal);
            }}
        >
            <View style={imgStyles.centeredView}>
            <View style={imgStyles.modalView}>
                <Text style={imgStyles.modalText}>Upload Files/Images</Text>
                <Text style={{ marginBottom: 15 }}>Choose Your Files/Images</Text>
                <TouchableOpacity style={imgStyles.button} 
                    onPress={takePhotoFromCamera}
                >
                    <MaterialIcons_Icon name="camera-alt" size={20} color="#fff" />
                    <Text style={imgStyles.label}>Choose from Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity style={imgStyles.button} 
                    onPress={choosePhotoFromGallery}
                >
                    <MaterialIcons_Icon name="photo-library" size={20} color="#fff" />
                    <Text style={imgStyles.label}>Choose From Library</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[imgStyles.button,{backgroundColor:'red'}]}
                    onPress={() => setCamereModal(!cameraModal)}
                >
                    <MaterialIcons_Icon name="close" size={20} color="#fff" />
                    <Text style={imgStyles.label}>Cancel</Text>
                </TouchableOpacity>
            </View>
            </View>
        </Modal>
    </View>
  );
};



const imgStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 45,
        marginHorizontal:20,
    },
    modalView: {
        width:'100%',
        backgroundColor: "rgba(255,255,255,0.9)",
        borderRadius: 8,
        padding: 50,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
        backgroundColor: "#2196F3",
        borderRadius: 4,
        padding: 8,
        margin:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        elevation: 5
    },
    label:{ 
        fontFamily:'RobotoCondensed-bold',
        fontSize:15,
        color: "#fff", 
        paddingHorizontal:10
    },
    modalText: {
        fontSize: 25,
        textAlign: "center"
    },

})