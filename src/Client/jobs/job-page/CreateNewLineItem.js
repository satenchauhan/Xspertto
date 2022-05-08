import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { AddInput } from '../../components/addInput/add-input';
import { Icon } from '../../components/icons/icons';
import { HZline, VCline } from '../../components/line/line';
import { InputBox } from '../../components/addInput/input-box';
import { ButtonOpacity } from '../../components/buttons/buttons';
import { ScrollView } from 'react-native-gesture-handler';


const color = 'rgba(0, 0, 0, 1)';

const CreateNewLineItem = () => {

  return (
    <View style={styles.container}>
      <ScrollView >
        <View style={styles.topContainer}>
            <View style={[styles.card,{marginTop:15,marginBottom:15}]}>
              <Text style={styles.label}>Item Type</Text>
              <View>
                  <TouchableOpacity onPress={() => console.log('clicked')}
                    style={styles.selectBtn}
                  >
                    <Text style={styles.select}>Service/Product</Text>
                    <Icon type='ant'  name="caretdown" size={15} color="#000"  /> 
                  </TouchableOpacity>
                  <HZline style={color} />
              </View>
            </View>
            <View style={styles.card}>
              <Text style={styles.label}>Item Name</Text>
              <View>
                <InputBox  name="Baseboards" side={1} />
              </View>
            </View>
            <View style={styles.card}>
              <Text style={styles.label}>Item Sku#</Text>
              <View>
                <InputBox name="EffZ1201" side={1} />
              </View>
            </View>
            <View style={styles.card}>
              <Text style={styles.label}>Description</Text>
              <View>
                <InputBox name="Description" style={{height:100}} side={1} />
              </View>
            </View>
        </View>
        <View style={[styles.topContainer,{borderRadius:5,marginTop:40}]}>
            <Text style={styles.price}>Price</Text>
            <View style={styles.card}>
              <Text style={styles.label}>Cost</Text>
              <InputBox name="100" side={2} hcost={true} icon={'$'} />
            </View>
            <View style={[styles.card,{marginTop:15}]}>
              <Text style={styles.label}>Markup</Text>
              <InputBox name="20" side={2} icon={'%'} />
            </View>
            <View style={[styles.card,{marginTop:15}]}>
              <Text style={styles.label}>Unit Price</Text>
              <InputBox name="120" side={2} icon={'$'} />
            </View>
            <View style={[styles.card,{marginTop:15}]}>
              <Text style={styles.label}>Unit Price</Text>
              <InputBox name="5" side={1}  />
            </View>
            <View style={[styles.card,{marginTop:15}]}>
               <View style={{flexDirection:'row'}}>
                  <TouchableOpacity onPress={() => console.log('clicked')}>
                      <Icon type="ionicon" name="checkbox-outline" size={30} color="blue" />
                  </TouchableOpacity>
                  <Text style={styles.addTxt}>Add to products and services list</Text>
               </View>
               <View style={{flexDirection:'row', marginVertical:10}}>
                  <TouchableOpacity onPress={() => console.log('clicked')}>
                      <Icon type="ionicon" name="checkbox-outline" size={30} color="blue" />
                  </TouchableOpacity>
                  <Text style={styles.addTxt}>Make exempt From tax</Text>
               </View>
            </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateNewLineItem;

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        // marginTop:60,
    },
    topContainer:{
      shadowColor:'#000000', 
      borderBottomLeftRadius:5, 
      borderBottomRightRadius:5,
      paddingBottom:20,
      backgroundColor:'#fff',
      elevation:5
    },
    label:{
      fontFamily:'Roboto-Bold',
      fontSize:12,
      color:'rgba(134, 134, 134, 0.75)'
    },
    card:{
      marginVertical:5,
      paddingHorizontal:10
    },
    selectBtn:{
      flexDirection:'row', 
      alignItems:'center', 
      justifyContent:'space-between',
      marginVertical:8
    },
    select:{
      fontFamily:'Roboto-Bold',
      fontSize:18, 
      color:'rgba(0, 0, 0, 0.6)'
    },
    price:{
      fontFamily:'Roboto-Bold',
      margin:15,
      fontSize:18, 
      color:'rgba(0, 0, 0, 0.6)'
    },
    addTxt:{
      fontFamily:'Roboto-Bold',
      fontSize:16,
      color:'rgba(0, 0, 0, 0.6)',
      lineHeight:27,
      paddingHorizontal:15
    }
});
