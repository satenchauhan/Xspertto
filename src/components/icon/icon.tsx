import * as React from "react"
import { View, Image, ImageStyle } from 'react-native';
import { IconProps } from './icon.props';
import { icons } from "./icons";

const ROOT: ImageStyle = {
    resizeMode: "contain"
}

export function CustomIcon(props: IconProps) {
    const { style: styleOverride, icon, containerStyle } = props

    return (
        <View style={containerStyle}>
            <Image style={[ROOT, styleOverride]} spource={icons[icon]}  />
        </View>
    )
}

