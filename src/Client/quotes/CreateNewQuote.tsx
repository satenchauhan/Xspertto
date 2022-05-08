import React from 'react';
import {
  Text,
  View,
  ViewStyle,
  TextStyle,
  ImageStyle,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import {border, color, size, spacing, typography} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import Test from './test';
import {ScrollView} from 'react-native-gesture-handler';
import Detail from './Detail';
import Card from '../../components/card/Card';
import {InputBox} from '../../components/addInput/input-box';
import SearchBar from '../../components/search/search-bar';
import TableHead from './table-head';
import {Icon} from '../../components/icons/icons';
import {ButtonOpacity} from '../../components/buttons/buttons';
import TotalSection from './TotalSection';
import { VCline } from '../../components/line/line';
import { BottomSheetContent } from './../../components/bottom-sheet/index';
import{ ClientFlatList} from './clientList';
import Title from '../../components/title/Title'

const FULL: ViewStyle = {
  flex: 1,
  paddingHorizontal: 4,
  backgroundColor: '#F5F5F5',
};

const CreateNewQuote = () => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  const signature  = () => navigation.navigate("Signature")
  return (
    <View testID="WelcomeScreen" style={FULL}>
      <StatusBar backgroundColor="#ECB22E" barStyle="light-content" />
      <ScrollView style={{flex: 1}}>
        <Card>
          <View style={styles.TotalBox}>
            <View>
              <Text style={styles.LeftLabel}>Quote Number:</Text>
              <Text style={styles.LeftLabel}>Date:</Text>
              <Text style={styles.LeftLabel}>PO Number</Text>
            </View>
            <View>
              <Text style={styles.RightValueTxt}>#232213</Text>
              <Text style={styles.RightValueTxt}>11/27/2120</Text>
              <Text style={styles.RightValueTxt}>JDH276472828DD</Text>
            </View>
          </View>
        </Card>
        <Card>
          <Text style={styles.Txt}>Client</Text>
          <View style={{marginTop: 10, marginBottom: 30, paddingHorizontal: 5}}>
            <TouchableOpacity
              style={styles.lineBtn}
              // onPress={addLineItem}
            >
              <Text style={styles.btnTxt}>ADD CLIENT</Text>
            </TouchableOpacity>
          </View>
        </Card>
        <Card>
          <View style={styles.client}>
              <View style={{paddingVertical:10}}>
                  <Title style={{}}>Client</Title>
                  <Title style={styles.txt1}>Client Name</Title>
                  <Title style={styles.txt2}>Client Name Business Name (if applicable)</Title>
              </View>
              <View style={styles.arrowBtn}>
                  <TouchableOpacity onPress={() => console.log('clicked')}>  
                    <Icon type="material"  name="arrow-forward-ios" size={30} color="#3851DD" />
                  </TouchableOpacity>
              </View>
          </View>
        </Card>
        <Card>
          <View style={[styles.client]}>
              <View style={{paddingVertical:10}}>
                  <Title style={{}}>Property</Title>
                  <Title style={styles.txt3}>123 Street Name </Title>
                  <Title style={[styles.txt3,{paddingTop:5}]}>Pakanae, Ontario, K2m 0G6</Title>
              </View>
              <View style={styles.arrowBtn}>
                  <TouchableOpacity onPress={() => console.log('clicked')}>
                    <Icon type="material"  name="arrow-forward-ios" size={30} color="#3851DD" />
                  </TouchableOpacity>
              </View>
          </View>
        </Card>
        <Card>
          <Text style={styles.Txt}>Job Title</Text>
          <View style={{marginBottom: 20, paddingHorizontal: 5}}>
            <SearchBar name={'Title'} style={{marginTop: -10}} />
          </View>
        </Card>
        <Card>
          <Text
            style={[
              styles.Txt,
              {color: 'rgba(50, 51, 56, 0.6)', paddingLeft: 5},
            ]}>
            Products/Services
          </Text>
          <TableHead
            style={styles.th}
            fontStyle={{fontSize: 14, color: '#FFFFFF'}}>
            {'Item'}
            {'Quantity'}
            {'Unit Price'}
            {'Total'}
          </TableHead>
          <View style={styles.addItem}>
            <TouchableOpacity
              style={styles.lineBtn}
              // onPress={addLineItem}
            >
            <Text style={styles.btnTxt}>ADD LINE ITEM</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.addItem}>
            <TouchableOpacity
              style={styles.lineBtn}
              // onPress={addLineItem}
            >
              <View style={{flexDirection: 'row'}}>
                <Icon
                  type="material"
                  name="star-outline"
                  size={25}
                  color={color.blue}
                />
                <Text style={[styles.btnTxt, {paddingHorizontal: 40}]}>
                  ADD OPTIONAL LINE ITEM
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.addBtn}>
            <TouchableOpacity>
              <Text style={[styles.btnTxt, {paddingLeft: 40}]}>
                Group Items
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.btnTxt, {paddingRight: 40}]}>Add text</Text>
            </TouchableOpacity>
          </View>
        </Card>
        <TotalSection
          style={{marginTop: 10, marginHorizontal: 0, marginBottom: 15}}
        />
        <TouchableOpacity onPress={signature}>
          <Text
            style={[
              styles.Txt,
              {color: 'rgba(0, 0, 0, 0.6)', paddingLeft: 5, marginBottom: 10},
            ]}>
            Signature
          </Text>
        </TouchableOpacity>
        <View style={styles.signatureBox}>
          <View style={{flex: 1}}>
            <Text style={styles.signOn}>Signed on </Text>
            <Text style={styles.dateTxt}>11/278/2021</Text>
          </View>
          <VCline
            style={{
              width: 50,
              borderColor: 'rgba(141, 141, 141, 1)',
              marginTop: 10,
            }}
          />
          <View style={{flex: 1}}>
            <Text style={styles.signOn}>Signature </Text>
            <Text style={styles.signTxt}>
              .........................................
            </Text>
          </View>
        </View>
      </ScrollView>
      <BottomSheetContent content={<ClientFlatList />} />

    </View>
  );
};

export default CreateNewQuote;

const styles = StyleSheet.create({
  TotalBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingVertical: spacing[1],
    paddingHorizontal: 10,
    marginHorizontal: 2,
  },
  LeftLabel: {
    fontFamily: typography.RCR,
    fontSize: size[2],
    color: color.dark,
    paddingVertical: spacing[1],
  },
  Txt: {
    fontFamily: typography.RCB,
    fontSize: size[4],
    color: color.dark,
    paddingVertical: spacing[1],
    paddingLeft: 10,
  },
  RightValueTxt: {
    fontFamily: typography.RCB,
    fontSize: size[2],
    color: color.blue,
    textAlign: 'right',
    paddingVertical: spacing[1],
  },
  lineBtn: {
    flex: 1,
    height: 40,
    backgroundColor: color.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: border.bsm,
    borderColor: color.blue,
    borderStyle: 'dashed',
  },
  btnTxt: {
    fontFamily: typography.RCB,
    fontSize: 18,
    color: color.blue,
  },
  th: {
    backgroundColor: 'rgba(103, 109, 143, 1)',
    borderRadius: 0,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    marginTop: 5,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  addBtn:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  signatureBox:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:50,
    paddingHorizontal: 10,
    paddingTop:6,
    borderRadius:border.bsm,
    height:85,
    backgroundColor: "#FFFFFF",
  },
  signOn:{
	  fontFamily:typography.RCB, 
	  fontSize: size[2], 
	  color:"rgba(179, 179, 179, 1)"
  },
  dateTxt:{
    fontFamily:typography.RCB, 
    fontSize: size[1], 
    color:color.blue,
    textAlign:'center',
    marginTop:10,
  },
  signTxt:{
    fontFamily:typography.RCB, 
    fontSize: size[1], 
    color:color.blue,
    textAlign:'center',
    marginTop:20,
  },
  addItem:{
    marginTop: 10, 
    marginBottom: 30, 
    paddingHorizontal: 5
  },
  client:{       
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'space-between',
    paddingVertical:4,
    paddingHorizontal:10,
    marginHorizontal:2,   
  },
  txt1:{
    fontSize:18, 
    color:'#1C202D',
    paddingTop:10,
    paddingVertical:5
  },
  txt2:{
    fontFamily:'Roboto', 
    fontSize:16, 
    color:'rgba(28, 32, 45, 0.8)'
  },
  txt3:{
    fontSize:18, 
    color:'#1C202D',
    paddingTop:10,
  },
  arrowBtn:{
    flex:1, 
    alignItems:'flex-end', 
    justifyContent:'flex-end', 
    paddingVertical:30
  }
});
