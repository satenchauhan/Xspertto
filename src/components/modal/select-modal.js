import React, {useState, useContext, useEffect} from 'react';
import {View, Text, StyleSheet, Alert, Modal, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Items from '../../components/common/SelectItems';
import { SuperContext } from '../../context/ContextProvider';
// import { SuperContext } from '../../context/ContextProvider';

export const SelectModal = (props) => {
  const [selectBtn, setSelectBtn] = useState('');
  const {showModal, setShowModal} = useContext(SuperContext);
  
  const selectButton = (value) =>{
    setShowModal(false);
  }
  
  return (
    <View style={Styles.centeredView}>
      <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => {setShowModal(!showModal)}}
      >
        <View style={Styles.centeredView}>
          <View style={Styles.modalView}>
            <View style={Styles.column}>
                <TouchableOpacity activeOpacity={0.9} underlayColor='rgba(70, 164, 147, 1)'
                    style={Styles.row}
                    onPress={() => selectButton(false)}
                >
                    <Text style={Styles.labelTxt}>{'%'}</Text>
                    <View style={[Styles.ActiveCircle]} >
                        <View style={[Styles.ActiveDot]}></View>
                    </View> 
                </TouchableOpacity>
            </View>
            <View  style={Styles.column}>
                <TouchableOpacity activeOpacity={0.9} underlayColor='rgba(70, 164, 147, 1)'
                  style={Styles.row}
                  onPress={() => selectButton(false)}
                >
                  <Text style={Styles.labelTxt}>{'$'}</Text>
                  <View style={[Styles.InactiveOut]} >
                      <View style={[Styles.InactiveDot]}></View>
                  </View> 
                </TouchableOpacity>
              </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};



const Styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
      backgroundColor:'rgba(0, 0, 0, 0.7)',
    },
    modalView: {
      width: '90%',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    column:{
      // flex:1,
      height:68,
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


//Single Circle
//<View style={Styles.singleCircle} ></View>


//Double Circle
/* 
 <View style={Styles.outerCircle} >
    <View style={Styles.innerCircle}></View>
</View>
*/


/* 
<View style={[selectBtn === select.key ? Styles.ActiveCircle : Styles.InactiveOut]} >
                        <View style={[selectBtn === select.key ? Styles.ActiveDot : Styles.InactiveDot]}></View>
                    </View> 
*/