import React, {useState, useContext, useEffect} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import chipKeys from './chipKeys';
import { SuperContext } from '../../../context/ContextProvider';
import modalStyles from './modalStyles';


const ContactModal = (props) => {
  const [selectBtn, setSelectBtn] = useState('');
  const {WorkBookModal,setWorkBookModal, setSelectContactKey} = useContext(SuperContext);
  const labels = [];
    for (let i = 0; i < chipKeys.length; i++) {
        labels[i]= chipKeys[i] ;
    }
  const SelectButton = (text, screen) =>{
      props.showTab(screen);
      setSelectContactKey(text);
      setSelectBtn(text);
      setWorkBookModal(false);
  }
  
  return (
    <View style={modalStyles.centeredView}>
      <Modal
          animationType="slide"
          transparent={true}
          visible={WorkBookModal}
          onRequestClose={() => {setWorkBookModal(!WorkBookModal)}}
      >
        <View style={modalStyles.centeredView}>
          <View style={modalStyles.modalView}>
            {labels.map((select, i) => (
              <View key={i} style={modalStyles.column}>
                <TouchableOpacity activeOpacity={0.9} underlayColor='rgba(70, 164, 147, 1)'
                  style={modalStyles.row}
                  onPress={() => SelectButton(select.key, select.screen)}
                >
                  <Text style={modalStyles.labelTxt}>{select.label}</Text>
                  <View style={[selectBtn === select.key ? modalStyles.ActiveCircle : modalStyles.InactiveOut]} >
                      <View style={[selectBtn === select.key ? modalStyles.ActiveDot : modalStyles.InactiveDot]}></View>
                  </View> 
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ContactModal;



