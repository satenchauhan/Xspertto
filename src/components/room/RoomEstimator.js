import React, { useState, useEffect, useRef } from 'react'
import { Text, View,StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { EstmStyles } from './EstmStyles';
// import CabinetFrame from '../ItemsComponents/CabinateFrame';
import CeilingFrame from '../../ItemScreens/ceilings/CeilingFrame';
import ClosetFrame from '../../ItemScreens/closets/ClosetFrame';
import CustomFrame from '../../ItemScreens/customs/CustomFrame';
import DoorFrame from '../../ItemScreens/doors/DoorFrame';
import PrepWorkFrame from '../../ItemScreens/prepwork/PrepWorkFrame';
import StairFrame from '../../ItemScreens/stairs/StairsFrame';
import TrimFrame from '../../ItemScreens/trim/TrimFrame';
import WallFrame from '../../ItemScreens/walls/WallFrame';
import WallpaperFrame from '../../ItemScreens/wallpaper/WallpaperFrame';
import WindowFrame from '../../ItemScreens/window/WindowFrame';
import CabinetFrame from '../../ItemScreens/cabinets/CabinateFrame';

const RoomEstimator =(props) =>{
    const [MarginTop, setMarginTop] = useState(0)
    const [input, setTextInput] = useState('');


    let  prepWorks = props.prepWorkArray.map((item, i) => {
        if ((props.prepWorkName)=="PrepWork"){
            if((i)==props.index){
                return(
                    <PrepWorkFrame key={i} prepId={i} deleteItem={props.deleteItem} />
                )
            }else{
                return(
                    <PrepWorkFrame key={i} prepId={i} deleteItem={props.deleteItem} />
                )
            }
        }
    });

    let  customs = props.customArray.map((item, i) => {
        if ((props.customItemName)=="Custom"){
            if((i)==props.index){
                return(
                    <CustomFrame key={i} custId={i} deleteItem={props.deleteItem}/>
                )
            }else{
                return(
                    <CustomFrame key={i} custId={i} deleteItem={props.deleteItem}/>
                )
            }
        }
    });

    let  cabinets = props.cabinetArray.map((item, i) => {
        if ((props.cabinetName)=="Cabinets"){
            if((i)==props.index){
                return(
                    <CabinetFrame key={i} cabId={i} deleteItem={props.deleteItem}/>
                )
            }else{
                return(
                    <CabinetFrame key={i} cabId={i} deleteItem={props.deleteItem}
                    />
                )
            }
        }
    });

    let  closets = props.closetArray.map((item, i) => {
        if ((props.closetName)=="Closets"){
            if((i)==props.index){
                return(
                    <ClosetFrame key={i} />
                )
            }else{
                return(
                    <ClosetFrame key={i} />
                )
            }
        }
    });

    let  trim = props.trimArray.map((item, i) => {
        if ((props.trimName)=="Trim"){
            if((i)==props.index){
                return(
                    <TrimFrame key={i} />
                )
            }else{
                return(
                    <TrimFrame key={i} />
                )
            }
        }
    });

    let  Wallpapers = props.wallpaperArray.map((item, i) => {
        if ((props.wallpaperName)=="Wallpaper"){
            if((i)==props.index){
                return(
                    <WallpaperFrame key={i} itemId={i} />
                )
            }else{
                return(
                    <WallpaperFrame key={i} itemId={i} />
                )
            }
        }
    });

    
    let  windows = props.windowArray.map((item, i) => {
        if ((props.windowName)=="Windows"){
            if((i)==props.index){
                return(
                    <WindowFrame key={i} />
                )
            }else{
                return(
                    <WindowFrame key={i} />
                )
            }
        }
    });
    let  doors = props.doorArray.map((item, i) => {
        if ((props.doorName)=="Doors"){
            if((i)==props.index){
                return(
                    <DoorFrame key={i} />
                )
            }else{
                return(
                    <DoorFrame key={i} />
                )
            }
        }
    });
    
    let  ceilings = props.ceilingArray.map((item, i) => {
        if ((props.ceilingName)=="Ceilings"){
            if((i)==props.index){
                return(
                    <CeilingFrame key={i} />
                )
            }else{
                return(
                    <CeilingFrame key={i} />
                )
            }
        }
    });
    let  walls = props.wallArray.map((item, i) => {
        if ((props.wallName)=="Walls"){
            if((i)==props.index){
                return(
                    <WallFrame key={i} />
                )
            }else{
                return(
                    <WallFrame key={i} />
                )
            }
        } 
    });

    let  stairs = props.stairArray.map((item, i) => {
        if ((props.stairName)=="Stairs"){
            if((i)==props.index){
                return(
                    <StairFrame key={i} />
                )
            }else{
                return(
                    <StairFrame key={i} />
                )
            }
        }
    }); 
    
    const ref_inputSecond = useRef();
    const ref_inputThird = useRef();

    const setShow = () => {
        props.setTextChange('Hide');
        props.setSlideUp(true);
    }

    const resetShow = () =>{
        props.setTextChange('Show');
        props.setSlideUp(false);
    }

    useEffect(() => {
        props.setSlideUp(true);
        props.setTextChange('Hide')
    }, []);

    
    return (
      <View>
        <View style={[EstmStyles.estimatecard]}>
          <View style={EstmStyles.defaultField}>
            <TouchableOpacity
              style={EstmStyles.eyeBtn}
              onPress={() => {
                props.textChange === "Hide" ? resetShow() : setShow();
              }}
            >
              <MaterialIcons name="remove-red-eye" size={25} color="#2196F3" />
              <Text style={EstmStyles.eyeTxt}>{" "}
                {props.textChange} default measurements for this Room
              </Text>
            </TouchableOpacity>
          </View>
          {props.slideUp === true ? (
            <View style={EstmStyles.inputSection}>
              <View style={EstmStyles.inpt}>
                <Text style={EstmStyles.inptTxt}>Length:</Text>
                <TextInput
                  style={EstmStyles.inputs}
                  name="length"
                  keyboardType="decimal-pad"
                  returnKeyType="next"
                  placeholder="0"
                  placeholderTextColor="#333"
                  autoFocus={false}
                  onSubmitEditing={() => ref_inputSecond.current.focus()}
                  blurOnSubmit={false}
                />
                <Text>{""}</Text>
              </View>
              <View style={EstmStyles.inpt}>
                <Text style={EstmStyles.inptTxt}>Width:</Text>
                <TextInput
                  style={EstmStyles.inputs}
                  name="width"
                  keyboardType="decimal-pad"
                  returnKeyType="next"
                  placeholder="0"
                  placeholderTextColor="#333"
                  onSubmitEditing={() => ref_inputThird.current.focus()}
                  ref={ref_inputSecond}
                  blurOnSubmit={false}
                />
                <Text>{""}</Text>
              </View>
              <View style={EstmStyles.inpt}>
                <Text style={EstmStyles.inptTxt}>Height:</Text>
                <TextInput
                  style={EstmStyles.inputs}
                  name="height"
                  keyboardType="decimal-pad"
                  placeholder="0"
                  placeholderTextColor="#333"
                  ref={ref_inputThird}
                />
                <Text>{""}</Text>
              </View>
            </View>
          ) : null}

          {props.showHide === false ? (
            <View
              style={{
                width: "100%",
                paddingLeft: 3,
                paddingRight: 5,
                marginBottom: 25,
              }}
            >
              <View style={EstmStyles.clickBox}>
                <Text>Add your first item by clicking the </Text>
                <View style={EstmStyles.IconTxt}>
                  <Text style={EstmStyles.plusIcon}> + </Text>
                  <Text> Button </Text>
                </View>
              </View>
            </View>
          ) : null}
        </View>
        <View style={{marginTop: -20}}>
          {customs}
          {Wallpapers}
          {stairs}
          {cabinets}
          {closets}
          {windows}
          {doors}
          {trim}
          {ceilings}
          {walls}
          {prepWorks}
        </View>
      </View>
    );
}

export default RoomEstimator;


