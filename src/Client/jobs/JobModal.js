import React, {useState, useContext, useEffect} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import chipStyles from '../../components/common/chipStyles';
import JobChipKeys from '../../components/common/JobChipKeys';
import { SuperContext } from '../../context/ContextProvider';


const JobModal = (props) => {
  const {clientFilterModal,setClientFilterModal,setSelectJobKey} = useContext(SuperContext);

  const labels = [];
  for (let i = 0; i < JobChipKeys.length; i++) {
      labels[i] = JobChipKeys[i];
  }

  const SelectButton = (label, screen) =>{
      props.showScreen(screen);
      setSelectJobKey(label);
      setClientFilterModal(false);
  }
  useEffect(() => {
    setSelectJobKey('All');
  }, []);

    return (
          <View style={chipStyles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={clientFilterModal}
                onRequestClose={() => {setClientFilterModal(!clientFilterModal)}}
            >
              <View style={chipStyles.centeredView}>
                <View style={chipStyles.modalView}>
                <Text style={chipStyles.type}>Select type </Text>
                  <View style={chipStyles.topLine}></View>
                  <View style={chipStyles.box}>
                  {labels.map((btnName, i) => (
                    <TouchableOpacity key={i} activeOpacity={0.3} underlayColor='gray'
                      onPress={() => SelectButton(btnName.label,btnName.screen)}
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

export default JobModal;




