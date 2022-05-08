import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Item from './Item';
import TableHead from './table-head';
import TotalSection from './TotalSection';
import { TouchableOpacity } from 'react-native';

const LineItem = () => {
    const navigation = useNavigation();
    const Bedroom = ['Baseboards', 'Ceillings', 'Wainscoting', 'Wallpaper'];
    const Kitchen = ['Wallpaper', 'Door', 'Ceillings', 'Stairs'];
    const Hall = ['Ceillings', 'Windows', 'Stairs', 'Baseboards'];
    const Hall2 = [];
    
    const addLineItem = () => navigation.navigate("LineItem"); 
    return (
      <View>
        <TableHead>
          {'ITEM'}
          {'QTY'}
          {'PRICE'}
          {'TOTAL'}
        </TableHead>
        <View style={{flex: 1.5, paddingHorizontal: 2}}>
          <Item item={Bedroom} room={'Bedroom'} />
          <Item item={Kitchen} room={'Kitchen'} />
          <Item item={Hall} />
          <Item item={Hall2} room={'Hallway'} />
        </View>
        <View style={{marginTop: 20, paddingHorizontal: 5}}>
          <TouchableOpacity style={LineStyle.lineBtn} onPress={addLineItem}>
            <Text style={LineStyle.btnTxt}>ADD LINE ITEM</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20, paddingHorizontal: 5}}>
          <TouchableOpacity
            style={LineStyle.lineBtn}
            onPress={() => console.log('pressed')}>
            <Text style={LineStyle.btnTxt}>ADD OPTIONAL LINE ITEM</Text>
          </TouchableOpacity>
        </View>
        <TotalSection />
      </View>
    );
}

export default LineItem;

const LineStyle = StyleSheet.create({
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
        fontSize:22,
        color:'#3851DD'
    }
})


