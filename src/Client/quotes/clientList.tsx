import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { clients } from './../../components/fake/clients';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FlagLeft from '../../components/common/FlagLeft';
import { color } from './../../theme/color';
import colors from '../../components/common/colors';


interface Props {};

export const ClientFlatList = (props: Props) => {
    const [dataClients,  setDataClients] = React.useState(clients);

    const onClientChange = (item) => {
            console.log(item)
    }
  return (
    <View style={{flex: 1, margin:2,}}>
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1}}>
          <FlatList
            style={{flex: 1}}
            data={dataClients}
            extraData={dataClients}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableOpacity activeOpacity={0.8} underlayColor='#fff'  
                style={{margin:5}}
               onPress={() => onClientChange(item)}>
                <View style={styles.cardBox}>
                  <View style={{flexDirection: 'column', marginTop: 5}}>
                    <View
                      style={[styles.infoBox,
                          item.business === 'individual'
                          ? {marginTop: 12}
                          : {marginTop: 0},
                      ]}>
                      <Icon name="user" style={{marginRight: 10, color: colors.Dark}}size={18} />
                      <Text style={styles.infoText2}>{item.name}</Text>
                    </View>
                    <View style={styles.infoBox}>
                      {item.business !== 'individual' ? (
                        <Icon name="building" style={{marginRight: 10, color: colors.Dark}}size={18} />
                      ) : null}
                      <Text style={styles.infoText2}>
                        {item.business === 'individual' ? ' ' : item.business}
                      </Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'column'}}>
                    <View style={[styles.infoBox, {marginTop: 18}]}></View>
                    <FlagLeft>{item.type}</FlagLeft>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

// export default ClientFlatList;

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    clinetRows:{
        flex:1,
        borderColor: 'black',
        borderTopWidth:1,
        padding: 12,
        flexDirection:'row',
        alignContent: 'center',
        justifyContent: 'space-between',
    },
    cardBox:{
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-between',
        height:67, 
        backgroundColor:'#FFFFFF',
        borderRadius:5, 
        paddingLeft:5,
        paddingRight:5,
        borderColor:'rgba(128, 128, 128, 0.8)', 
        borderWidth:1,
        shadowColor: "black",
        shadowOpacity: 0.5,
        elevation:5
    },
    infoBox:{
        flexDirection:'row', 
        alignItems:'flex-start',
        justifyContent:'flex-start',
        padding:5,
    },
    infoTxt:{
        fontFamily:'Roboto-Bold',
        fontSize:13, 
        color:'#454D6A', 
        lineHeight:16.41
    },
    infoText2:{
        fontFamily:'Roboto-Bold', 
        fontSize:16, 
        color:'#1C202D', 
        textTransform:'capitalize'
    },
});
