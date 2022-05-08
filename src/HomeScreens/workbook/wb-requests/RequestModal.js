import React, {useState, useContext, useEffect} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import chipStyles from '../../../components/common/chipStyles';
import RequestChipKeys from '../../../components/common/RequestChipKeys';
import { SuperContext } from '../../../context/ContextProvider';


const RequestModal = (props) => {
  const {WorkBookModal,setWorkBookModal,setSelectRequestKey} = useContext(SuperContext);

  const labels = [];
  
  for (let i = 0; i < RequestChipKeys.length; i++) {
      labels[i]= RequestChipKeys[i] ;
  }

  const SelectButton = (text,label,screen) =>{
      props.showTab(screen);
      setSelectRequestKey(label);
      setWorkBookModal(false);
  }

  useEffect(() => {
    setSelectRequestKey('All');
  }, []);

  return (
    <View style={chipStyles.centeredView}>
      <Modal
          animationType="slide"
          transparent={true}
          visible={WorkBookModal}
          onRequestClose={() => {setWorkBookModal(!WorkBookModal)}}
      >
        <View style={chipStyles.centeredView}>
          <View style={chipStyles.modalView}>
          <Text style={chipStyles.type}>Select type </Text>
            <View style={chipStyles.topLine}></View>
            <View style={chipStyles.box}>
            {labels.map((btnName, i) => (
              <TouchableOpacity key={i} activeOpacity={0.3} underlayColor='gray'
                onPress={() => SelectButton(btnName.key,btnName.label,btnName.screen)}
                style={[chipStyles.chipBtn,{backgroundColor: btnName.color}]}>
                <Text style={[chipStyles.labelTxt]}>{btnName.label}</Text>
              </TouchableOpacity>
             ))}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default RequestModal;
