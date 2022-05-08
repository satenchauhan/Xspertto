import React, {useContext, useEffect} from 'react';
import {View, Text,StyleSheet, Modal,TouchableOpacity} from 'react-native';
import { SuperContext } from '../../context/ContextProvider';


const PreviewModal = () => {
  const {setPreviewModal, previewModal} = useContext(SuperContext);

  
  useEffect(() => {
      
  }, []);
  
  return (
      <View style={Styles.centeredView}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={previewModal}
            onRequestClose={() => {setPreviewModal(!previewModal)}}
        >
          <View style={Styles.centeredView}>
            <View style={Styles.modalView}>
               <View style={{flexDirection:'row', alignItems:'flex-start',justifyContent:'space-between', paddingHorizontal:10}}>
                    <Text style={Styles.type}>Preview & Send </Text>
                    <TouchableOpacity activeOpacity={0.3} underlayColor='gray'
                        onPress={() => setPreviewModal(false)}
                        style={[Styles.chipBtn,{backgroundColor: 'gray'}]}>
                        <Text style={[Styles.labelTxt]}>{'X'}</Text>
                    </TouchableOpacity>
               </View>
              <View style={Styles.topLine}></View>
              <View style={Styles.box}>
                
              </View>
            </View>
          </View>
        </Modal>
      </View>
  );
};

export default PreviewModal;


const Styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 56,
      backgroundColor:'rgba(0, 0, 0, 0.8)',
    },
    modalView: {
      flex:1,
      width: '100%',
      backgroundColor: '#fff',
    },
    type:{
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
      // flexGrow: 0, 
      alignItems:'center', 
      backgroundColor: '#fff',
    },
    chipBtn:{
      alignItems:'center',
      justifyContent:'center',
      height: 20,
      width: 20,
      borderRadius:10, 
      marginTop:3
    },
    labelTxt:{
      fontSize:10,
      color:'#fff',
      textTransform:'capitalize'
    },

})







