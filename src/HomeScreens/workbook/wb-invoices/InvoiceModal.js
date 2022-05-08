import React, {useContext, useEffect} from 'react';
import {View, Text, Modal,TouchableOpacity} from 'react-native';
import chipStyles from '../../../components/common/chipStyles';
import InvoiceChipKeys from '../../../components/common/InvoiceChipKeys';
import { SuperContext } from '../../../context/ContextProvider';



const InvoiceModal = (props) => {
  const {WorkBookModal,setWorkBookModal,setSelectInvoiceKey} = useContext(SuperContext);

  const labels = [];

  for (let i = 0; i < InvoiceChipKeys.length; i++) {
      labels[i]= InvoiceChipKeys[i];
  }

  const SelectButton = (label) =>{
      setSelectInvoiceKey(label);
      setWorkBookModal(false);
  }

  useEffect(() => {
      props.showTab('invoices');
      setSelectInvoiceKey('All');
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
              <View style={[chipStyles.modalView]}>
              <Text style={chipStyles.type}>Select type </Text>
                <View style={chipStyles.topLine}></View>
                <View style={[chipStyles.box]}>
                {labels.map((btnName, i) => (
                  <TouchableOpacity key={i} activeOpacity={0.3} underlayColor='gray'
                    onPress={() => SelectButton(btnName.label)}
                    style={[chipStyles.chipBtn,{backgroundColor: btnName.color},
                      btnName.id===7 ? {borderWidth:1,borderColor:'#333333'} : {},
                    ]}>
                    <Text style={[chipStyles.labelTxt,{fontSize:18.5},
                       btnName.id===7 ? {color:'#000'} : {},
                    ]}>{btnName.label}</Text>
                  </TouchableOpacity>
                ))}
                </View>
              </View>
            </View>
          </Modal>
        </View>
    );
};



export default InvoiceModal;




