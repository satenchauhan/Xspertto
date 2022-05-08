import React, {useContext, useEffect} from 'react';
import {View, Text, Modal, StyleSheet,TouchableOpacity} from 'react-native';
// import chipStyles from '../../components/common/chipStyles';
import JobChipKeys from '../../../components/common/JobChipKeys';
import { SuperContext } from '../../../context/ContextProvider';


const JobFlagModal = (props) => {
  const {flagModal,setFlagModal,setFlagKey,setFlagColor} = useContext(SuperContext);

  const labels = [];
  for (let i = 0; i < JobChipKeys.length; i++) {
      labels[i]= JobChipKeys[i];
  }

  const SelectFlag = (value, color) => {
        setFlagKey(value);
        setFlagColor(color);
        setFlagModal(false);
  }

  return (
      <View style={chipStyles.centeredView}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={flagModal}
            closeOnTouchOutside={true}
            onRequestClose={() => {setFlagModal(!flagModal)}}
        >
          <View style={chipStyles.centeredView}>
            <View style={chipStyles.modalView}>
            {/* <Text style={chipStyles.type}>Select type </Text> */}
              {/* <View style={chipStyles.topLine}></View> */}
              <View style={chipStyles.box}>
              {labels.map((btnName, i) => (
                <TouchableOpacity key={i} activeOpacity={0.3} underlayColor='gray'
                  onPress={() => SelectFlag(btnName.label,btnName.color)}
                  style={[chipStyles.chipBtn,{backgroundColor: btnName.color},
                  ]}>
                  <Text style={[chipStyles.labelTxt, btnName==='converted' ? {color:'#FFFFFF'} : {}]}>{btnName.label}</Text>
                </TouchableOpacity>
              ))}
              </View>
            </View>
          </View>
        </Modal>
      </View>
  );
};

export default JobFlagModal;

const chipStyles = StyleSheet.create({
    centeredView: {
      flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
      marginTop: 56,
      backgroundColor:'rgba(0, 0, 0, 0.4)',
    },
    modalView: {
      flex:0.2,
      height: 'auto',
      width: '100%',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    type:{
      alignSelf:'flex-start', 
      marginBottom:10,
      paddingTop:20,
      paddingLeft:20, 
      fontSize:20, 
      fontWeight:'bold',
    },
    topLine:{
      borderBottomWidth:2, 
      borderColor:'gray', 
      width:'100%',
      marginBottom:15
    },
    box:{
      flex: 1, 
      flexDirection: 'row', 
      flexWrap: 'wrap', 
      alignItems:'center', 
      backgroundColor: '#fff',
      marginTop:8
    },
    chipBtn:{
      marginTop:10,
      margin:6,
      paddingHorizontal:5,
      height: 45,
      borderRadius:4, 
    },
    labelTxt:{
      fontFamily:'Roboto-Regular',
      fontWeight:'400',
      fontSize:16,
      color:'#3E2C00',
      textTransform:'capitalize',
      lineHeight:45,
      paddingHorizontal:6,
    },

})






