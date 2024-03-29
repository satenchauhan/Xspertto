import React from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { Button } from "../button/button";
import { Text } from "../text/text";
import { HeaderProps } from './header.props';
import { spacing } from "../../theme";
import { CustomIcon } from "../icon/icon";

// static styles
const ROOT: ViewStyle = {
    flexDirection: "row",
    paddingHorizontal: spacing[4],
    alignItems: "center",
    paddingTop: spacing[5],
    paddingBottom: spacing[5],
    justifyContent: "flex-start",
}
const TITLE: TextStyle = { textAlign: "center" }
const TITLE_MIDDLE: ViewStyle = { flex: 1, justifyContent: "center" }
const LEFT: ViewStyle = { width: 32 }
const RIGHT: ViewStyle = { width: 32 }
/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export function Header(props: HeaderProps) {
    const {
        onLeftPress,
        onRightPress,
        rightIcon,
        leftIcon,
        headerText,
        style,
        titleStyle,
    } = props

    return(
        <View style={[ROOT, style]}>
            {leftIcon ? (
                <Button preset="link" onPress={onLeftPress}>
                    <CustomIcon  icon={leftIcon} />
                </Button>
            ):(
                <View style={LEFT} /> 
            )}
            <View style={TITLE_MIDDLE}>
                <Text style={[TITLE, titleStyle]} />
            </View>
            {rightIcon ? (
                <Button preset="link" onPress={onRightPress}>
                    <CustomIcon  icon={rightIcon} />
                </Button>
            ) : (
                <View style={RIGHT} />
            )}
        </View>
    )
}
