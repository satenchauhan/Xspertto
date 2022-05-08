import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
const popAction = StackActions.pop(1);
import { SuperContext } from '../context/ContextProvider';
import colors from '../components/common/colors';

const NavHeadStyle = {
  headerStyle: {
    backgroundColor:colors.Secondary,
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const welcomeHeader = routeName => {
  return (
    routeName === 'BusinessInfo' || routeName === 'BusinessLogo'
      ? '#fff'
      : colors.WelColor,
    routeName === 'BusinessInfo' || routeName === 'BusinessLogo'
      ? '#fff'
      : colors.WelColor
  );
};

/* const RouteOneStyle= (routeName) =>{
     if(routeName === "BusinessInfo"){
         return(
            <View style={{width: 15, backgroundColor:"#fff"}}></View>
         )
     }else{
        return(
            <View style={{width: 12, backgroundColor: welcomeHeader(routeName)}}></View>
         )
     }    
}
const RouteTwoStyle = (routeName) =>{
    if(routeName === 'BusinessLogo'){
        return(
            <View style={{width: 15, backgroundColor: welcomeHeader(routeName)}}></View>
         )
     }else{
        return(
            <View style={{width: 12, backgroundColor: welcomeHeader(routeName)}}></View>
         )
     } 
}
const RouteThreeStyle = (routeName) =>{
    if(routeName === 'ThatsIT'){
        return(
            <View style={{width: 15, backgroundColor: welcomeHeader(routeName)}}></View>
         )
     }else{
        return(
            <View style={{width: 12, backgroundColor: welcomeHeader(routeName)}}></View>
         )
     } 
}
*/
const goBackButton = navigation => {
  return (
    <TouchableOpacity activeOpacity={0.2}>
      <Icon.Button
        name="arrow-back"
        size={25}
        color="#fff"
        underlayColor={'#23BF7E'}
        backgroundColor={'#23BF7E'}
        onPress={() => navigation.navigate('WORKBOOK')}></Icon.Button>
    </TouchableOpacity>
  );
};

// backgroundColor: "#F5F5FF"

const AddRoomHeaderStyle = () => {
  const navigation = useNavigation();
  return {
    title: 'Estimator',
    headerStyle: {
      backgroundColor: '#fff',
      borderColor: 'white',
      elevation: 0,
    },
    headerTintColor: 'black',
    headerBackTitle: 'Back',
    headerLeft: () => (
      <TouchableOpacity activeOpacity={0.2}>
        <Icon.Button
          name="arrow-back"
          size={25}
          color="black"
          underlayColor="#fff"
          backgroundColor="#fff"
          onPress={() => navigation.goBack(null)}></Icon.Button>
      </TouchableOpacity>
    ),
    headerRight: () => (
      <View style={Stackstyles.common}>
        <TouchableOpacity
          style={Stackstyles.createBtn}
          onPress={() => console.log('Pressed')}>
          <Text style={Stackstyles.Btn}>Create</Text>
        </TouchableOpacity>
      </View>
    ),
  };
};


const StackHeadClientStyle = () => {
  const navigation = useNavigation();
  return {
    title: 'Client',
    headerLeft: () => goBackButton(navigation),
    headerRight: () => (
      <View style={Stackstyles.common}>
        <TouchableOpacity
          style={Stackstyles.createBtn}
          onPress={() => console.log('Pressed')}>
          <Text style={{ color: '#fff', fontSize: 18, marginRight: 20 }}>Edit</Text>
          {/* <MaterialIcons  name="edit" size={25}  style={{ color: '#fff', marginRight: 20 }} /> */}
        </TouchableOpacity>
      </View>
    ),
  };
};
const StackHeadNewClient = () => {
  const navigation = useNavigation();
  return {
    title: 'New Client',
    headerLeft: () => (
      <TouchableOpacity activeOpacity={0.2}>
        <Icon.Button
          name="arrow-back"
          size={25}
          color="#fff"
          underlayColor={colors.Secondary}
          backgroundColor={colors.Secondary}
          onPress={() => navigation.navigate('WORKBOOK')}></Icon.Button>
      </TouchableOpacity>
    ),
    headerRight: () => (
      <View style={Stackstyles.common}>
        <TouchableOpacity
          style={Stackstyles.createBtn}
          onPress={() => console.log('Pressed')}>
          <Text style={Stackstyles.saveBtn}>Save</Text>
        </TouchableOpacity>
      </View>
    ),
  };
};
const HeaderMenubar = () => {
  const navigation = useNavigation();
  return (
      <Icon.Button
        name="menu"
        size={30}
        color="white"
        underlayColor={colors.Secondary}
        backgroundColor={colors.Secondary}
        onPress={() => navigation.openDrawer()}></Icon.Button>
  );
};
const HeaderTitle = (props) => {
  const navigation = useNavigation();
  return (
      <View style={{flexDirection: 'row',marginLeft:'30%'}}>
        <Text style={{fontSize:24, color:"#fff", textAlign:'center'}}>{props.headerName}</Text>
      </View>
  );
};
const HeaderLeftButton = () => {
  const navigation = useNavigation();
  return (
      <Icon.Button
        name="arrow-back"
        size={25}
        color="white"
        underlayColor={colors.Secondary}
        backgroundColor={colors.Secondary}
        onPress={() => navigation.goBack(null)}></Icon.Button>
    );
};

const HeaderRightButton = () => {
  const navigation = useNavigation();
  return (
      <TouchableOpacity onPress={() => navigation.navigate('NewClient')}
          style={{flexDirection:'row'}}
      >
           <MaterialIcons  name="edit" size={25}  style={{ color: '#fff', marginRight: 20 }} />
           <Entypo  name="dots-three-vertical" size={25}  style={{ color: '#fff', marginRight: 10 }} />
      </TouchableOpacity>
    );
};

const BottomTabHeaderStyle = ({route}) => {
  const {hide, setHide} = useContext(SuperContext);
  const routeName = route.name;
  return {
        headerLeft: () => ( <HeaderMenubar  />  ),
        headerTitle: () => ( <HeaderTitle headerName={routeName} />),
        headerRight: () => ( routeName==="WORKBOOK" ?  <HeaderRightButton />  : null   ),
  };
};

const WbTabHeaderStyle = ({route,navigation}) => {
  const {hide, setHide} = useContext(SuperContext);
  const routeName = route.name;
  return {
        headerLeft: () => (  <Icon.Button
          name="arrow-back"
          size={25}
          color="white"
          underlayColor={'#666666'}
          backgroundColor={'#666666'}
          onPress={() => navigation.goBack(null)}></Icon.Button>
        ),
        headerTitle: () => ( <HeaderTitle headerName={routeName} />),
        // headerRight: () => ( routeName==="WORKBOOK" ?  <HeaderRightButton />  : null   ),
  };
};

const HomeTabHeaderStyle = ({route}) => {
  const {hide, setHide} = useContext(SuperContext);
  const routeName = route.name;
  return {
        headerLeft: () => ( <HeaderLeftButton  />  ),
        headerTitle: () => ( <HeaderTitle headerName={routeName} />),
        headerRight: () => ( routeName==="WORKBOOK" ?  <HeaderRightButton />  : null   ),
  };
};

// const navigation = useNavigation();
const WelcomeHeaderStyle = ({ navigation, route }) => {
  const routeName = route.name;
  return {
    title: '',
    headerStyle: {
      backgroundColor:
        routeName === 'BusinessInfo' || routeName === 'BusinessLogo'
          ? colors.WelColor
          : '#fff',
      elevation: 0,
    },
    headerLeft: () => (
      <TouchableOpacity activeOpacity={0.2}>
        <Icon.Button
          name="arrow-back"
          size={25}
          underlayColor=""
          color={
            routeName === 'BusinessInfo' || routeName === 'BusinessLogo'
              ? '#fff'
              : colors.WelColor
          }
          backgroundColor={
            routeName === 'BusinessInfo' || routeName === 'BusinessLogo'
              ? colors.WelColor
              : '#fff'
          }
          onPress={() => navigation.goBack(null)}></Icon.Button>
      </TouchableOpacity>
    ),
    headerTitle: () => (
      <View style={{ flexDirection: 'row', marginLeft: '50%' }}>
        <View
          style={[
            Stackstyles.dots,
            {
              width: routeName === 'BusinessInfo' ? 15 : 12,
              height: routeName === 'BusinessInfo' ? 15 : 12,
              backgroundColor: routeName === 'BusinessInfo' ? '#fff' : 'gray',
              marginTop: routeName === 'BusinessInfo' ? -2 : 0,
            },
          ]}></View>
        <View
          style={[
            Stackstyles.dots,
            {
              width: routeName === 'BusinessLogo' ? 15 : 12,
              height: routeName === 'BusinessLogo' ? 15 : 12,
              backgroundColor: routeName === 'BusinessLogo' ? '#fff' : 'gray',
              marginTop: routeName === 'BusinessLogo' ? -2 : 0,
            },
          ]}></View>
        <View
          style={[
            Stackstyles.dots,
            {
              width: routeName === 'ThatsIT' ? 15 : 12,
              height: routeName === 'ThatsIT' ? 15 : 12,
              backgroundColor: routeName === 'ThatsIT' ? colors.WelColor : 'gray',
              marginTop: routeName === 'ThatsIT' ? -2 : 0,
            },
          ]}></View>
      </View>
    ),
    headerRight: () => (
      
      <View style={Stackstyles.common}>
        <TouchableOpacity
         
          style={Stackstyles.createBtn}
          activeOpacity={routeName === 'ThatsIT' ? 1 : 0.1}
          underlayColor={ routeName === 'ThatsIT' ? '#fff' : '' }
          onPress={() => {
            routeName === 'BusinessInfo'
              ? navigation.navigate('BusinessLogo')
              : navigation.navigate('ThatsIT');
          }}>
          <Text
            style={{
              fontSize: 20,
              marginRight: 20,
              color: welcomeHeader(routeName),
            }}>
            {routeName === 'BusinessInfo' || routeName === 'BusinessLogo'
              ? 'Next'
              : 'Finsh'}
          </Text>
        </TouchableOpacity>
      </View>
    ),
  };
};

const NoteHeadStyle = () => {
  const navigation = useNavigation();
  return {
    headerStyle: {
      backgroundColor: '#23BF7E',
      borderColor: 'white',
    },
    headerLeft: () => goBackButton(navigation),
    headerTitle: () => (
        <View style={{flexDirection: 'row',marginLeft:'50%'}}>
          <Text style={{fontSize:22, color:"#FFFFFF", fontFamily:'Roboto-Black', textAlign:'center'}}>{'NOTE'}</Text>
        </View>
    ),
    headerRight: () => (
      <View style={Stackstyles.common}>
        <TouchableOpacity
          style={Stackstyles.createBtn}
          onPress={() => console.log('Pressed')}>
          <Text style={Stackstyles.NoteTxt}>Save</Text>
        </TouchableOpacity>
      </View>
    ),
  };
};
const JobHeadStyle = ({ navigation, route }) => {
  const routeName = route.name;
  return {
    headerStyle: {
      backgroundColor: '#5A155B',
      borderColor: 'white',
    },
    headerLeft: () => (
      <Icon.Button
        name="arrow-back"
        size={25}
        color="white"
        underlayColor={'#5A155B'}
        backgroundColor={'#5A155B'}
        onPress={() => navigation.goBack(null)}>
      </Icon.Button>
    ),
    headerTitle: () => (
        <View style={{alignSelf: 'center',marginLeft:'40%'}}>
          <Text style={[Stackstyles.headerTitle,{alignSelf:'center'}]}>{routeName} #1</Text>
        </View>
    ),
    headerRight: () => (
      // <View style={Stackstyles.common}>
        <TouchableOpacity
          style={Stackstyles.createBtn}
          onPress={() => console.log('Pressed')}>
          <Text style={[Stackstyles.NoteTxt,{fontSize:16}]}>Save</Text>
        </TouchableOpacity>
      // </View>
    ),
  };
};
const QuoteHeadStyle = ({ navigation, route }) => {
  const routeName = route.name;
  return {
    headerStyle: {
      backgroundColor: '#ECB22E',
      borderColor: 'white',
    },
    headerLeft: () => (
      <Icon.Button
        name="arrow-back"
        size={25}
        color="white"
        underlayColor={'#ECB22E'}
        backgroundColor={'#ECB22E'}
        onPress={() => navigation.goBack(null)}>
      </Icon.Button>
    ),
    headerTitle: () => (
        <View style={{flexDirection: 'row'}}>
          <Text style={Stackstyles.headerTitle}>{routeName}</Text>
        </View>
    ),
    headerRight: () => (
      // <View style={Stackstyles.common}>
        <TouchableOpacity
          style={Stackstyles.createBtn}
          onPress={() => console.log('Pressed')}>
          <Text style={[Stackstyles.NoteTxt,{fontSize:16}]}>Save</Text>
        </TouchableOpacity>
      // </View>
    ),
  };
};
const SignHeaderStyle = () => {
  return {
    title: '',
    headerStyle: {
      backgroundColor: '#fff',
      borderColor: 'white',
      elevation: 0,
    },
    headerTintColor: colors.WelColor,
  };
};

const MagicStyle = () => {
  return {
    title: 'OneQuote Authentication',
    headerStyle: {
      backgroundColor: colors.WelColor,
      borderColor: 'white',
      elevation: 0,
    },
    headerTintColor: '#fff',
  };
};

export {
  NavHeadStyle,
  AddRoomHeaderStyle,
  StackHeadClientStyle,
  StackHeadNewClient,
  HeaderLeftButton,
  HeaderRightButton,
  HeaderMenubar,
  HeaderTitle,
  BottomTabHeaderStyle,
  WbTabHeaderStyle,
  HomeTabHeaderStyle,
  WelcomeHeaderStyle,
  NoteHeadStyle,
  QuoteHeadStyle,
  JobHeadStyle,
  SignHeaderStyle,
  MagicStyle,
};

const Stackstyles = StyleSheet.create({
  common: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  saveBtn: {
    backgroundColor: 'rgba(256,256,256,0.5)',
    color: '#fff',
    fontSize: 18,
    marginRight: 20,
    lineHeight: 21,
    padding: 2.5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  dots: {
    borderRadius: 20,
    margin: 3,
  },
  createBtn: {
    /*  shadowColor: "gray",
            shadowOffset: {
            width: -1,
            height: 2,
            },
            shadowOpacity: 1,
            shadowRadius: 5,
            elevation: 5,   */
  },
  Btn: {
    backgroundColor: '#2196F3',
    color: '#fff',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    padding: 8,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    borderRadius: 8,
    shadowColor: 'gray',
    shadowOffset: {
      width: -1,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },
  headerTitle:{
    fontSize:30, 
    color:"#FFFFFF", 
    fontFamily:'Roboto-Black', 
    textAlign:'center'
  },
  NoteTxt:{ 
      fontFamily:'Roboto-Black',
      fontSize:22,
      color: '#FFFFFF', 
      marginRight: 20
  }
});
