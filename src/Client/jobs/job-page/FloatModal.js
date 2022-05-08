import React, {useContext, useEffect} from 'react';
import {View, Text, Modal,StyleSheet,PermissionsAndroid, Platform} from 'react-native';
import { SuperContext } from '../../context/ContextProvider';
import {ButtonOpacity, FloatButton} from '../../components/buttons/buttons';
import { Font_Icon, Ionicons_Icon } from '../../components/icons/icons';
import ImagePicker from 'react-native-image-crop-picker';

const color = 'rgba(28, 32, 45, 0.8)'

const FloatModal = () => {
  const {floatModal,setFloatModal} = useContext(SuperContext);
  
  const takePhotoFromCamera = async () => {
    if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: 'Permissions for write access',
              message: 'Give permission to your storage to write a file',
              buttonPositive: 'ok',
            },
          );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                ImagePicker.openCamera({
                  width: 300,
                  height: 400,
                  cropping: true,
                }).then(image => {
                  console.log(image);
                });
            } else {
              console.log('permission denied');
              return;
            }
        } catch (err) {
          console.warn(err);
          return;
        }
    }
  }

  const choosePhotoFromGallery =  async () => {
    if (Platform.OS === 'android') {
      try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: 'Permissions for write access',
              message: 'Give permission to your storage to write a file',
              buttonPositive: 'ok',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              await ImagePicker.openPicker({
                width: 300,
                height: 300,
                cropping: true
              }).then(image => {
                console.log(image);
              });
          } else {
            console.log('permission denied');
            return;
          }
        } catch (err) {
          console.warn(err);
          return;
      }
    }  
  }
  return (
      <View style={Styles.centeredView}>
        <Modal
            animationType="slide"
            transparent={true}
            backdropTransitionOutTiming={1}
            visible={floatModal}
            onRequestClose={() => {setFloatModal(!floatModal)}}
        >
          <View style={Styles.centeredView}>
          <FloatButton style={Styles.closeFloatBtn} action={false}>{'close'}</FloatButton>
            <View style={Styles.modalView}>
              <View style={Styles.box}>
                 <View>
                    <Text style={Styles.HEADING}>Basic</Text>
                    <ButtonOpacity style={Styles.BTN} color={color}>
                        <Font_Icon name="th-large" size={22} color={color} />
                        <Text style={Styles.BTNLabel}>Mark Payment</Text>
                    </ButtonOpacity>
                 </View>
                 <View style={{marginVertical:10}}>
                    <Text style={Styles.HEADING}>Related</Text>
                    <ButtonOpacity style={Styles.BTN} color={color}>
                        <Ionicons_Icon name="star-sharp" size={26} color={color}  />
                        <Text style={[Styles.BTNLabel,{lineHeight:28}]}>Create Job</Text>
                    </ButtonOpacity>
                    <ButtonOpacity style={Styles.BTN} color={color}>
                        <Ionicons_Icon name="star-sharp" size={26} color={color}  />
                        <Text style={[Styles.BTNLabel,{lineHeight:28}]}>Approve Quote</Text>
                    </ButtonOpacity>
                 </View>
                 <View style={{marginVertical:10}}>
                    <Text style={Styles.HEADING}>Preview</Text>
                    <ButtonOpacity style={Styles.BTN} color={color}>
                        <Font_Icon name="th-large" size={22} color={color} />
                        <Text style={Styles.BTNLabel}>Preview and Send</Text>
                    </ButtonOpacity>
                 </View>
                 <View>
                    <Text style={Styles.HEADING}>Files</Text>
                    <ButtonOpacity style={Styles.BTN} color={color}
                      action={takePhotoFromCamera}
                    >
                        <Font_Icon name="th-large" size={22} color={color} />
                        <Text style={Styles.BTNLabel}>Take Photo</Text>
                    </ButtonOpacity>
                    <ButtonOpacity style={Styles.BTN} color={color}
                        action={choosePhotoFromGallery}
                    >
                        <Font_Icon name="th-large" size={22} color={color} />
                        <Text style={Styles.BTNLabel}>Photo Library</Text>
                    </ButtonOpacity>
                    <ButtonOpacity style={Styles.BTN} color={color}
                      action={null}
                    >
                        <Font_Icon name="th-large" size={22} color={color} />
                        <Text style={Styles.BTNLabel}>Add Note</Text>
                    </ButtonOpacity>
                 </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
  );
};

export default FloatModal;

const Styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginTop: 56,
      backgroundColor:'rgba(0, 0, 0, 0.5)',
      paddingHorizontal:1
    },
    modalView: {
      flex:0.8,
      width: '100%',
      padding: 15,
      backgroundColor: '#FFFFFF',
    },
    box:{
      flex:1,
      alignItems:'flex-start', 
      justifyContent:'flex-start',
      alignContent:'flex-start',
      marginTop:20,
      // paddingLeft:50
    },
    label:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
    },
    labelTxt:{
      fontFamily:'Roboto-Bold',
      fontWeight:'500',
      fontSize:24,
      color:'rgba(28, 32, 45, 0.8)',
      textAlign:'left',
      textTransform:'capitalize',
      padding:6,
      
    },
    closeFloatBtn:{
        position:'relative',
        bottom:-20,
        zIndex: 5,
    },
    BTN:{
      flexDirection:'row',
      marginLeft:30,
      marginVertical:10
    },
    HEADING:{
      fontFamily:'Roboto-Regular', 
      fontSize:18, 
      color:color
    },
    BTNLabel:{
      fontFamily:'Roboto-Regular',  
      fontSize:22, 
      lineHeight:23, 
      paddingLeft:15,
      color:color
    }
})






