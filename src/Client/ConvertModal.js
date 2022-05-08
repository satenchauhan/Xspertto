import React, {useContext, useEffect} from 'react';
import {View, Text, Modal,StyleSheet,TouchableOpacity} from 'react-native';
import { SuperContext } from '../context/ContextProvider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';


const ConvertModal = (props) => {
  const {convertModal,setConvertModal} = useContext(SuperContext);

 
  const SelectButton = (label) =>{
      setConvertModal(false);
  }
  
  
  return (
      <View style={Styles.centeredView}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={convertModal}
            onRequestClose={() => {setConvertModal(!convertModal)}}
        >
          <View style={Styles.centeredView}>
            <View style={Styles.modalView}>
              <View style={Styles.box}>
                <TouchableOpacity  activeOpacity={0.3} underlayColor='gray'
                  onPress={() => SelectButton()}
                  style={[Styles.label,{marginLeft:7}]}>
                    <Icon name='dollar' color='#9DAAE0' size={30} style={{marginRight:6}} />
                    <Text style={[Styles.labelTxt]}>{'Convert to Invoice'}</Text>
                </TouchableOpacity>
                <TouchableOpacity  activeOpacity={0.3} underlayColor='gray'
                  onPress={() => SelectButton()}
                  style={[Styles.label]}>
                    <MaterialIcons name="construction" color='#9DAAE0' size={30} />
                    <Text style={[Styles.labelTxt]}>{'Create a Job'}</Text>
                </TouchableOpacity>
                <TouchableOpacity  activeOpacity={0.3} underlayColor='gray'
                  onPress={() => SelectButton()}
                  style={[Styles.label]}>
                    <Ionicons name='star-outline' color='#9DAAE0' size={30} />
                    <Text style={[Styles.labelTxt]}>{'Approve Quote'}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
  );
};

export default ConvertModal;

const Styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginTop: 56,
      backgroundColor:'rgba(0, 0, 0, 0.4)',
      paddingHorizontal:1
    },
    modalView: {
      flex:0.2,
      width: '100%',
      padding: 15,
      backgroundColor: '#FFFFFF',
    },
    box:{
      flex:1,
      alignItems:'flex-start', 
      justifyContent:'flex-start',
      alignContent:'flex-start',
      marginTop:3,
      paddingLeft:50
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

})






