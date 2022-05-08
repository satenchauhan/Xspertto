import React, {useContext, useEffect} from 'react';
import {View, Text, Modal,TouchableOpacity} from 'react-native';
import chipStyles from '../../../components/common/chipStyles';
import QuoteChipKeys from '../../../components/common/QuoteChipKeys';
import { SuperContext } from '../../../context/ContextProvider';


const QuoteModal = (props) => {
  const {WorkBookModal,setWorkBookModal,setSelectQuoteKey} = useContext(SuperContext);
  const labels = [];
  for (let i = 0; i < QuoteChipKeys.length; i++) {
      labels[i]= QuoteChipKeys[i];
  }

  const SelectButton = (label) =>{
      setSelectQuoteKey(label);
      setWorkBookModal(false);
  }
  useEffect(() => {
      props.showTab('quotes');
      setWorkBookModal(false);
      setSelectQuoteKey('All');
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

export default QuoteModal;






