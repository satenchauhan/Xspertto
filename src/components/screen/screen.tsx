import * as React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StatusBar, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { isNonScrolling, offsets, presets } from "./screen.presets";
import { ScreenProps } from './screen.props';

const isIos = Platform.OS === "ios"

function ScreenWithoutScrolling(props: ScreenProps){
    const insets = useSafeAreaInsets();
    const preset = presets.fixed
    const style  = props.style || {}
    const backgroundColor = props.backgroundColor ? { backgroundColor: props.backgroundColor } : {}
    const insetStyle = { paddingTop: props.unsafe ? 0 : insets.top}

    return (
        <KeyboardAvoidingView
            style={[preset.outer, backgroundColor]}
            behavior={isIos ? "padding" : "undefined"}
            keyboardVerticalOffset={offsets[props.keyboardOffset || "none"]}
        >
            <StatusBar barStyle={props.statusBar || "light-content"} />
            <View> </View>
        </KeyboardAvoidingView>
    )
}

function ScreenWidthScrolling(props: ScreenProps) {
    const insets  = useSafeAreaInsets()
    const preset  = presets.scroll
    const style   = props.style || {}
    const backgroundStyle = props.backgroundColor ? {backgroundColor:props.backgroundColor} : {}
    const insetStyle = { paddingTop: props.unsafe ? 0 : insets.top}
    
    console.log(props.children)
    return(
        <KeyboardAvoidingView
            style={[preset.outer, backgroundStyle]}
            behavior={isIos ? "padding" : "undefined"}
            keyboardVerticalOffset={offsets[props.keyboardOffset || "none"]}
        >
            <StatusBar barStyle ={props.statusBar || "light-content"}  />
            <View  styles={[preset.outer, backgroundStyle]}>
                <ScrollView
                    style={[preset.outer, backgroundStyle]}
                    contentContainerStyle={[preset.inner, style]}
                    keyboardShouldPersistTaps={props.keyboardShouldPersistTaps || "handled"}
                >
                    { props.children }
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}
/**
 * The starting component on every screen in the app.
 * 
 * @param props The screen props
 */

export function Screen(props: ScreenProps) {
    if (isNonScrolling(props.preset)){
        return <ScreenWidthScrolling {...props} />
    }else{
        return <ScreenWidthScrolling {...props} />
    }
}


