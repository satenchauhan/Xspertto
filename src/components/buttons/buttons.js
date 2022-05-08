import React,{useContext} from 'react'
import { StyleSheet, Text, View,TouchableOpacity, TouchableHighlight } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SuperContext } from '../../context/ContextProvider';
import { AntDesign_Icon } from '../icons/icons';

export const FloatButton = ({label, style, onPress}) => {

  return (
    <TouchableHighlight
      underlayColor="rgba(16, 176, 176, 0.3)"
      style={[styles.floatButton, style]}
      onPress={onPress}>
      <AntDesign_Icon name={label} size={40} style={styles.floatIcon} />
    </TouchableHighlight>
  );
};

/* export const FloatButton = props => {
  const {floatModal, setFloatModal} = useContext(SuperContext);
  const showFloatModal = value => {
    setFloatModal(value);
  };
  return (
    <TouchableHighlight
      underlayColor="rgba(16, 176, 176, 0.3)"
      style={[styles.floatButton, props.style]}
      onPress={() => showFloatModal(props.action)}>
      <AntDesign_Icon
        name={props.label}
        size={40}
        style={styles.floatIcon}
      />
    </TouchableHighlight>
  );
}; */

export const ButtonOpacity = ({style, color, onpress, children}) => {
  // console.log(props.action)
  return (
    <TouchableOpacity
      underlayColor={color}
      style={[style]}
      onPress={onpress !== null ? onpress : null}>
      {children[0]}
      {children[1]}
    </TouchableOpacity>
  );
};

export const ButtonWidthIcon = ({children}) => {
  return <TouchableOpacity>{children}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  floatButton: {
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 60,
    height: 60,
    backgroundColor: '#10B0B0',
    borderRadius: 30,
  },
  floatIcon: {
    textAlign: 'center',
    color: '#fff',
  },
});
