import React from 'react';
import { StyleSheet, Text, View,ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native"
import SearchBar from '../../components/search/search-bar.js';
import items from '../../components/fake/fake-data.js';


const AddLineItem = () => {
  // const [data, setData] = React.useState([]);
  const navigation = useNavigation()
  const NewLineItemScreen = () => navigation.navigate("NewLineItem")
  const data =items.sort((a, b) => a.title.localeCompare(b.title))
    .reduce((r, e) => {
      const key = e.title[0];
      if(!r[key]) r[key] = []
      r[key].push(e);
      return r;
    }, {});

  // console.log(data)
  return (
    <View style={{flex:1}}>
        <ScrollView >
          <View style={styles.searchContainer}>
            <SearchBar  name={'Search Line Items'} />
          </View>
          <View style={{marginTop:20, paddingHorizontal:5}}>
            <TouchableOpacity style={styles.lineBtn}
                onPress={NewLineItemScreen}
            >
                <Text style={styles.btnTxt}>CREATE NEW LINE ITEM</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex:1,paddingHorizontal:5}}>
            <Text style={styles.recent}>RECENT LINE ITEMS</Text>
            {Object.entries(data)
              .map(([name, value], i) => 
                <View key={i}>
                  <Text style={styles.groupName}>{name}</Text>
                  {value.map((item, j) =>
                    <View key={j} style={[styles.card,name === item.title[0] ? {marginBottom:30}: {}]}>
                      <View style={styles.innerCard}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.price}>${item.price}</Text>
                      </View>
                      <Text style={styles.desc}>{item.desc}</Text>
                    </View>
                  )}
                </View>
              )}
          </View>
        </ScrollView>
    </View>
  );
};



export default AddLineItem;

const styles = StyleSheet.create({
    searchContainer:{
      backgroundColor:'#FFFFFF',
      marginBottom:5, 
      shadowColor:'#000000', 
      elevation:5
    },
    lineBtn:{
      flex:1,
      height:40,
      backgroundColor:'#FFFFFF',
      alignItems:'center',
      justifyContent:'center',
      borderWidth:1,
      borderRadius:4,
      borderColor:'#3851DD',
      borderStyle:'dashed'
    },
    btnTxt:{
        fontFamily:'RobotoCondensed-Bold',
        fontSize:18,
        color:'#3851DD'
    },
    recent:{
        fontFamily:'Roboto-Bold',
        fontSize:20,
        color:'rgba(128, 132, 144, 0.79)',
        marginVertical:20
    },
    groupName:{
      fontFamily:'Roboto-Bold',
      fontSize:20,
      color:'rgba(128, 132, 144, 0.79)',
      marginTop:20,
      marginBottom:10
    },
    card:{
      flex:1,
      backgroundColor:'#FFFFFF',
      marginBottom:5, 
      // marginVertical:20,
      borderRadius:4,
      shadowColor:'#000000', 
      elevation:5
    },
    innerCard:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      paddingHorizontal:10
    },
    title:{
      fontFamily:'Roboto-Bold',
      fontSize:16,
      color:'rgba(28, 32, 45, 1)',
      marginVertical:5
    },
    price:{
      fontFamily:'Roboto',
      fontWeight:'400',
      fontSize:14,
      color:'rgba(28, 32, 45, 1)',
      marginVertical:5
    },
    desc:{
      fontFamily:'Roboto',
      fontWeight:'400',
      fontSize:14,
      color:'rgba(28, 32, 45, 1)',
      marginVertical:5,
      paddingHorizontal:10
    }
    
});



/* 
  items.sort(function(a, b) {
      if(a.title[0] !== 'a'){
        if(a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        if(a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        return 0;
      }
  }) 
*/