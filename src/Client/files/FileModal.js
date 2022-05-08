import React, {useState, useContext, useEffect} from 'react';
import {View, Text, StyleSheet, Alert, Modal, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Items from '../../components/common/SelectItems';
import { SuperContext } from '../../context/ContextProvider';

const QuoteModal = (props) => {
  const [selectBtn, setSelectBtn] = useState('');
  const {ClientModal, setClientModal, setSearchKey} = useContext(SuperContext);
  const labels = [];
  for (let i = 0; i < 8; i++) {
      labels[i]= Items[i] ;
  }

  const SelectButton = (text, label) =>{
      // props.showTab(label);
      setSearchKey(label);
      setSelectBtn(text);
      setClientModal(false);
  }
  useEffect(() => {
    setSearchKey('All');
    setSelectBtn('All');
  }, [])
  return (
    <View style={Styles.centeredView}>
      <Modal
          animationType="slide"
          transparent={true}
          visible={ClientModal}
          onRequestClose={() => {setClientModal(!ClientModal)}}
      >
        <View style={Styles.centeredView}>
          <View style={Styles.modalView}>
             <View style={Styles.column}>
                <TouchableOpacity activeOpacity={0.9} underlayColor='rgba(70, 164, 147, 1)'
                  style={Styles.row}
                  onPress={() => SelectButton(props.tabScreen,props.tabScreen)}
                >
                  <Text style={Styles.labelTxt}>All</Text>
                  <View style={[selectBtn === 'All' ? Styles.ActiveCircle : Styles.InactiveOut]} >
                      <View style={[selectBtn === 'All' ? Styles.ActiveDot : Styles.InactiveDot]}></View>
                  </View> 
                </TouchableOpacity>
              </View>
            {labels.map((select, i) => (
              <View key={i} style={Styles.column}>
                <TouchableOpacity activeOpacity={0.9} underlayColor='rgba(70, 164, 147, 1)'
                  style={Styles.row}
                  onPress={() => SelectButton(select.key, select.label)}
                >
                  <Text style={Styles.labelTxt}>{select.label}</Text>
                  <View style={[selectBtn === select.key ? Styles.ActiveCircle : Styles.InactiveOut]} >
                      <View style={[selectBtn === select.key ? Styles.ActiveDot : Styles.InactiveDot]}></View>
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

export default QuoteModal;

const Styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
      backgroundColor:'rgba(0, 0, 0, 0.8)',
    },
    modalView: {
      // height: 548,
      width: '90%',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth:1,
      borderColor:'gray',
      // borderRadius: 5,
      // marginBottom: 5,
    },
    column:{
      // flex:1,
      height:78,
      width: '100%',
      borderBottomWidth:1.5,
      borderColor:'gray'
    },
    row: {
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      paddingTop:20,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: '#fff',
      
    },
    labelTxt:{
      fontSize:26, 
      lineHeight:26.30, 
      color:'black'
    },
    InactiveOut:{
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      width:36, 
      height:36, 
      borderRadius:18,
      borderColor:'gray', 
      borderWidth:4, 
      borderStyle:'solid'
    },
    InactiveDot:{
      width:18, 
      height:18, 
      borderRadius:9, 
      backgroundColor:'#fff'
    },
    ActiveCircle:{
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      width:36, 
      height:36, 
      borderRadius:18,
      borderColor:'rgba(70, 164, 147, 1)', 
      borderWidth:4, 
      borderStyle:'solid'
    },
    ActiveDot:{
      width:18, 
      height:18, 
      borderRadius:9, 
      backgroundColor:'rgba(70, 164, 147, 1)'
    }
  
});

