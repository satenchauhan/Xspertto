import React, {useState, useContext, useEffect} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import chipStyles from '../../../components/common/chipStyles';
import JobChipKeys from '../../../components/common/JobChipKeys';
import { SuperContext } from '../../../context/ContextProvider';


const JobModal = (props) => {
  const {WorkBookModal,setWorkBookModal,setSelectJobKey} = useContext(SuperContext);

  const labels = [];
  for (let i = 0; i < JobChipKeys.length; i++) {
      labels[i] = JobChipKeys[i];
  }

  const SelectButton = (label) =>{
      setSelectJobKey(label);
      setWorkBookModal(false);
  }

  useEffect(() => {
    props.showTab('jobs');
    setSelectJobKey('All');
    setWorkBookModal(false);
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
                      onPress={() => SelectButton(btnName.label)}
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




