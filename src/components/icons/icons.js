import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import FontFive from 'react-native-vector-icons/FontAwesome5';
import Font from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';


export const Ionicons_Icon = (props) => {
    return(
        <Ionicon name={props.name} size={props.size} color={props.color} style={[props.style]} />
    )
}

export const Font_Icon = (props) => {
    return(
        <Font name={props.name} size={props.size} color={props.color} style={[props.style]} />
    )
}

export const AntDesign_Icon = (props) => {
    return(
        <AntDesign name={props.name} size={props.size} color={props.color} style={[props.style]} />
    )
}

export const Fontisto_Icon = (props) => {
    return(
        <Fontisto name={props.name} size={props.size} color={props.color} style={[props.style]} />
    )
}

export const FontFive_Icon = (props) => {
    return(
        <FontFive name={props.name} size={props.size} color={props.color} style={[props.style]} />
    )
}
export const SimpleIcon_Icon = (props) => {
    return(
        <SimpleIcon name={props.name} size={props.size} color={props.color} style={[props.style]} />
    )
}

export const MaterialCom_Icon = (props) => {
    return(
        <MaterialCommunityIcon name={props.name} size={props.size} color={props.color} style={[props.style]} />
    )
}

export const MaterialIcons_Icon = (props) => {
    return(
        <MaterialIcon name={props.name} size={props.size} color={props.color} style={[props.style]} />
    )
}

const showIconFont = (type) => {
    switch (type){
        case 'fontisto':
            return Fontisto;
        case 'material':
            return MaterialIcon;
        case 'ant':
            return AntDesign;
        case 'simpleLine':
            return SimpleIcon;
        case 'fa5':
            return FontFive;
        case 'fa':
            return Font;
        case 'ionicon':
            return Ionicon;
        case 'materialCommunity':
            return MaterialCommunityIcon;
        default:
            return Font;
    }
}

export const Icon = ({type, ...props}) => {
    const FontIcon = showIconFont(type);
    return <FontIcon {...props} />;
}