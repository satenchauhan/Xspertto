import React, {useContext, useEffect} from 'react';
import {View, Text, Modal,StyleSheet,TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CheckBox from 'react-native-vector-icons/Ionicons';
import { SuperContext } from '../../context/ContextProvider';


const LinkNoteModal = (props) => {
  const {linkModal,setLinkModal, setLinkKey} = useContext(SuperContext);

 
  const SelectLinkValue = (value) =>{
      setLinkKey(value)
      setLinkModal(false);
  }
  
  useEffect(() => {

  }, []);
  
  return (
      <View style={Styles.centeredView}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={linkModal}
            onRequestClose={() => {setLinkModal(!linkModal)}}
        >
          <View style={Styles.centeredView}>
            <View style={Styles.modalView}>
              <View style={Styles.box}>
                <TouchableOpacity  activeOpacity={0.3} underlayColor='gray'
                  onPress={() => SelectLinkValue('Quotes')}
                  style={[Styles.label]}>
                  <CheckBox name="md-checkbox" color="#6D78FF" size={38} />
                    <Text style={[Styles.labelTxt]}>{'Quotes'}</Text>
                  {/* </CheckBox> */}
                </TouchableOpacity>
                <TouchableOpacity  activeOpacity={0.3} underlayColor='gray'
                  onPress={() => SelectLinkValue('Job')}
                  style={[Styles.label]}>
                  <CheckBox name="md-square-outline" color="#6D78FF" size={38} />
                      <Text style={[Styles.labelTxt]}>{'Job'}</Text>
                  {/* </CheckBox> */}
                </TouchableOpacity>
                <TouchableOpacity  activeOpacity={0.3} underlayColor='gray'
                  onPress={() => SelectLinkValue('Invoice')}
                  style={[Styles.label]}>
                      <CheckBox name="md-square-outline" color="#6D78FF" size={38} />
                        <Text style={[Styles.labelTxt]}>{'Invoice'}</Text>
                      {/* </CheckBox> */}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
  );
};

 {/* <CheckBox name="md-checkbox" color="#6D78FF" size={30} />
            <CheckBox name="md-square-outline" color="#6D78FF" size={30} /> */}
export default LinkNoteModal;

const Styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginTop: 56,
      backgroundColor:'rgba(0, 0, 0, 0.4)',
      paddingHorizontal:1
    },
    modalView: {
      flex:0.2,
      width: '100%',
      paddingVertical: 15,
      backgroundColor: '#FFFFFF',
    },
    box:{
      flex:1,
      alignItems:'flex-start', 
      justifyContent:'flex-start',
      alignContent:'flex-start',
      marginTop:3,
      paddingLeft:10
    },
    label:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
    },
    labelTxt:{
      fontFamily:'Roboto-Bold',
      fontWeight:'500',
      fontSize:20,
      color:'rgba(28, 32, 45, 0.8)',
      textAlign:'left',
      textTransform:'capitalize',
      justifyContent:'center',
      padding:6,
      
    },

})






