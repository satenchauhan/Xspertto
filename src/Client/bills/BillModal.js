import React, {useContext, useEffect} from 'react';
import {View, Text, Modal,TouchableOpacity} from 'react-native';
import chipStyles from '../../components/common/chipStyles';
import InvoiceChipKeys from '../../components/common/InvoiceChipKeys';
import { SuperContext } from '../../context/ContextProvider';



const BillModal = (props) => {
  const {clientFilterModal,setClientFilterModal,setSelectInvoiceKey} = useContext(SuperContext);

  const labels = [];

  for (let i = 0; i < InvoiceChipKeys.length; i++) {
      labels[i]= InvoiceChipKeys[i];
  }

  const SelectButton = (label, screen) =>{
      props.showScreen(screen);
      setSelectInvoiceKey(label);
      setClientFilterModal(false);
  }

  useEffect(() => {
      setSelectInvoiceKey('Invoices');
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
              <View style={[chipStyles.modalView]}>
              <Text style={chipStyles.type}>Select type </Text>
                <View style={chipStyles.topLine}></View>
                <View style={[chipStyles.box]}>
                {labels.map((btnName, i) => (
                  <TouchableOpacity key={i} activeOpacity={0.3} underlayColor='gray'
                    onPress={() => SelectButton(btnName.label,btnName.screen)}
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



export default BillModal;




