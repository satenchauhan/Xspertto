import React, {useState} from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Dimensions} from 'react-native';
import {border, color, size, typography} from '../../theme';
import { VCline } from '../../components/line/line';
import SignatureScreen from 'react-native-signature-canvas';


const SignScreen = () => {
    const [signature, setSignature] = useState(null);
   /**
    * Returns true if the screen is in portrait mode
    */

    const isPortrait = () => {
      const dim = Dimensions.get('screen');
      return dim.height >= dim.width;
    };

    const [orientation, setOrientation] = useState(()=>(isPortrait() ? 'portrait' : 'landscape'))

    // Event Listener for orientation changes
    Dimensions.addEventListener('change', () => {
      setOrientation(
        isPortrait() ? 'portrait' : 'landscape'
       );
    }); 
  
    const handleClear = () => {
      console.log("clear");
      // ref.current.clearSignature();
    };
  
    const handleConfirm = () => {
      console.log("end");
      // ref.current.readSignature();
    };
  
  if(orientation==='portrait'){
    return (
      <View style={styles.container}>
        <View style={styles.signBox}
        >
          <View style={{position: 'absolute', right:90}}>
            <VCline style={styles.border}/>
            <Text style={styles.signText}>Write Signature Here</Text>
          </View>
        </View>
        <View style={styles.buttonBox}>
          <TouchableOpacity style={styles.button}
            onPress={handleConfirm}
          >
            <Text style={[styles.buttonLabel]}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button,styles.convButton]}
              onPress={handleClear}
            >
              <Text style={[styles.buttonLabel,{color:'#3851DD'}]}>Skip</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.ReadTxt}>Note: A PDF copy of the signed quote can be found in clients Files. </Text>
      </View>
    );
  }else{
    return(
      <View style={styles.lanContainer}>
        <View style={styles.lanSignBox}
        >
          <View style={{position: 'absolute', right:90}}>
            <VCline style={styles.lanBorder}/>
            <Text style={styles.lanSignText}>Write Signature Here</Text>
          </View>
        </View>
        <View style={styles.lanButtonBox}>
          <TouchableOpacity style={styles.lanButton}
            onPress={handleConfirm}
          >
            <Text style={[styles.lanButtonLabel]}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.lanButton,styles.convButton]}
               onPress={handleClear}
            >
              <Text style={[styles.lanButtonLabel,{color:'#3851DD'}]}>Skip</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.lanReadTxt}>Note: A PDF copy of the signed quote can be found in clients Files. </Text>
      </View>
    )
  }
};

export default SignScreen;

const styles = StyleSheet.create({
  // Potrait start
  container:{
    flex: 1,
    backgroundColor: '#F5F5F5',
    marginTop:20,
    height: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  signBox: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: border.bsm,
    borderColor: color.blue,
    borderStyle: 'dashed',
  },
  border:{
    alignSelf: 'center',
    width:450,
    borderStyle: 'dotted', 
    borderColor: '#454D6A',
    marginTop:20,
    marginRight: 25, 
  },
  signText:{
    fontFamily:typography.RBTB,
    fontSize: size[2],
    color:'#454D6A', 
    textAlign:'center', 
    marginRight: 90, 
    transform:[{rotate:'90deg'}]
  },
  ReadTxt:{
    fontFamily:typography.RBTB,
    fontSize: size[3],
    color:'#1C202DCC', 
    textAlign:'center', 
    paddingVertical:10
  },
  buttonBox:{
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'space-between',
    paddingTop:20,
  },
  button:{
    backgroundColor:'#3851DD',
    width:191, 
    height:33, 
    alignItems:'center', 
    justifyContent:'center', 
    borderRadius:4,
  }, 
  convButton:{
    backgroundColor:'#fff',
    borderWidth:1.5, 
    borderColor:'#3851DD'
  }, 
  buttonLabel:{
      fontFamily:'RobotoCondensed-Black', 
      fontWeight:'700', 
      fontSize:16,
      color:'rgba(255, 255, 255, 1)'
  },
  //Potrait end
  //Landscape start
  lanBorder:{
    alignSelf: 'center',
    width:Dimensions.get('window').width-220,
    borderStyle: 'dotted', 
    borderColor: '#454D6A',
    marginTop:20,
    position:'absolute',
    right:-60,
    top:80,
    transform: [{ rotate: '0deg'}], 
  },
  lanContainer:{
    flex:1,
    backgroundColor: '#F5F5F5',
    height: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    width:Dimensions.get('window').width-100, marginTop:5
  },
  lanSignBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.white,
    borderWidth: 1,
    borderRadius: border.bsm,
    borderColor: color.blue,
    width:600,
    borderStyle: 'dashed',
    marginLeft:65,
  },
  lanButtonBox:{
    flexDirection:'row', 
    alignItems:'center', 
    // justifyContent:'space-between',
    alignSelf: 'center',
    paddingTop:5,
  },
  lanButton:{
    backgroundColor:'#3851DD',
    width:191, 
    height:33, 
    alignItems:'center', 
    borderRadius:4,
    marginLeft:100
  }, 
  lanButtonLabel:{
    fontFamily:'RobotoCondensed-Black', 
    fontWeight:'700', 
    fontSize:16,
    lineHeight:30,
    color:'rgba(255, 255, 255, 1)'
  },
  lanSignText:{
    fontFamily:typography.RBTB,
    fontSize: size[2],
    color:'#454D6A', 
    textAlign:'center', 
    marginRight: 140, 
    top:78,
    transform:[{rotate:'0deg'}]
  },
  lanReadTxt:{
    fontFamily:typography.RBTB,
    fontSize: size[3],
    color:'#1C202DCC', 
    textAlign:'center', 
    paddingVertical:0
  },
});
