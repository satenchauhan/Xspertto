import React,{useState} from "react";
import {Text,Dimensions,Modal,View,TouchableHighlight} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ItemStyle from "./ItemStyle";

export default function ItemModel(props) {
  // const [showHide, setShowHide] = useState(false);
  const screenWidth  = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const footerHeight = (screenHeight*31)/100;
  
  const close = () =>{
    setTimeout(()=>{ props.setShowModal(false)}, 500)

  }
  return (
    <View style={[ItemStyle.centeredView]}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          props.setShowModal(false);
        }}
       
      >
          <View style={ItemStyle.modalView}>
            <View style={[ItemStyle.itemSection,{width:screenWidth}]}>
              <TouchableHighlight
                activeOpacity={0.1}
                underlayColor="lightgray"
                style={ItemStyle.closeItem}
                onPress={() => props.setShowModal(!props.showModal)}
              >
                <Text style={ItemStyle.clsTxt}>
                  <MaterialCommunityIcons 
                    color="#fff"
                    name="close"
                    size={26}
                  />
                </Text>
              </TouchableHighlight>
              <View style={ItemStyle.ItemMenu}>
                <View style={ItemStyle.itemBox}>
                  <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="#2196F3"
                    style={ItemStyle.itemBtn}
                    onPress={() => {
                      props.addPrepWork(props.index, "PrepWork");
                      props.setSlideUp(false);
                      props.setTextChange('Show');
                      props.setShowHide(true);
                      close();
                    }}
                  >
                    <Text style={[ItemStyle.itemTxt, { color: "black" }]}>
                      Prep Work
                    </Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#2196F3"
                    onPress={() => {
                      props.addCustom(props.index, "Custom");
                      props.setSlideUp(false);
                      props.setTextChange('Show');
                      props.setShowHide(true);
                      close();
                    }}
                    style={ItemStyle.itemBtn}
                  >
                    <Text style={ItemStyle.itemTxt}>Custom</Text>
                  </TouchableHighlight>
                </View>
                <View style={ItemStyle.itemBox}>
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#2196F3"
                    style={ItemStyle.itemBtn}
                    onPress={() => {
                      props.addCabinet(props.index, "Cabinets");
                      props.setShowHide(true);
                      close();
                     
                    }}
                  >
                    <Text style={ItemStyle.itemTxt}>Cabinets</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#2196F3"
                    style={ItemStyle.itemBtn}
                    onPress={() => {
                      props.addCloset(props.index, "Closets");
                      props.setSlideUp(false);
                      props.setTextChange('Show');
                      props.setShowHide(true);
                      close();
                     
                    }}
                  >
                    <Text style={ItemStyle.itemTxt}>Closets</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#2196F3"
                    style={ItemStyle.itemBtn}
                    onPress={() => {
                      props.addTrim(props.index, "Trim");
                      props.setSlideUp(false);
                      props.setTextChange('Show');
                      props.setShowHide(true);
                      close();
                     
                    }}
                  >
                    <Text style={ItemStyle.itemTxt}>Trim</Text>
                  </TouchableHighlight>
                </View>
                <View style={ItemStyle.itemBox}>
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#2196F3"
                    style={ItemStyle.itemBtn}
                    onPress={() => {
                      props.addWallpaper(props.index, "Wallpaper");
                      props.setSlideUp(false);
                      props.setTextChange('Show');
                      props.setShowHide(true);
                      close();
                     
                    }}
                  >
                    <Text style={ItemStyle.itemTxt}>Wallpaper</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#2196F3"
                    style={ItemStyle.itemBtn}
                    onPress={() => {
                      props.addWindow(props.index, "Windows");
                      props.setSlideUp(false);
                      props.setTextChange('Show');
                      props.setShowHide(true);
                      close();
                     
                    }}
                  >
                    <Text style={ItemStyle.itemTxt}>Windows</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#2196F3"
                    style={ItemStyle.itemBtn}
                    onPress={() => {
                      props.addCeiling(props.index, "Ceilings");
                      props.setSlideUp(false);
                      props.setTextChange('Show');
                      props.setShowHide(true);
                      close();
                     
                    }}
                  >
                    <Text style={ItemStyle.itemTxt}>Ceilings</Text>
                  </TouchableHighlight>
                </View>
                <View style={ItemStyle.itemBox}>
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#2196F3"
                    style={ItemStyle.itemBtn}
                    onPress={() => {
                      props.addStair(props.index, "Stairs");
                      props.setSlideUp(false);
                      props.setTextChange('Show');
                      props.setShowHide(true);
                      close();
                     
                    }}
                  >
                    <Text style={ItemStyle.itemTxt}>Stairs</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#2196F3"
                    style={ItemStyle.itemBtn}
                    onPress={() => {
                      props.addDoor(props.index, "Doors");
                      props.setSlideUp(false);
                      props.setTextChange('Show');
                      props.setShowHide(true);
                      close();
                     
                    }}
                  >
                    <Text style={ItemStyle.itemTxt}>Door</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#2196F3"
                    style={ItemStyle.itemBtn}
                    onPress={() => {
                      props.addWall(props.index, "Walls");
                      props.setSlideUp(false);
                      props.setTextChange('Show');
                      props.setShowHide(true);
                      close();
                     
                    }}
                  >
                    <Text style={ItemStyle.itemTxt}>Walls</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </View>
      </Modal>
    </View>
  );
}

