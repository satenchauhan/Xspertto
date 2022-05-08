import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet,ViewStyle, Button, StatusBar } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

export const Bottomsheet = () => {

    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);
    // const bottomSheetRef = React.useRef(null);

    // variables
    const snapPoints = useMemo(() => ['12%', '60%'],[]);

    // callnacks 
    const handleSheetChanges = useCallback((index: number) => {
        // console.log('handleSheetChanges', index);
    },[]);

    // const handleClosePress = () => bottomSheetRef.current.close();
    
    const OuterStyle: ViewStyle = {
        backgroundColor:'rgba(38, 40, 50, 1)',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    }
    const indictorStyle: ViewStyle = {
        borderWidth:3, 
        width:60,
        borderColor:'rgba(228, 228, 231, 0.2)', 
        borderRadius:6
    }
    return (
            <BottomSheet
                ref={bottomSheetRef}
                index={1}
                snapPoints={snapPoints}
                backgroundStyle={OuterStyle}
                handleIndicatorStyle={indictorStyle}
                enableHandlePanningGesture={true}
                enableContentPanningGesture={true}
                onChange={handleSheetChanges}
            >
                {/* <View style={styles.sheetContainer}> */}
                  <Text style={{color:'black', position:'absolute', textAlign:'left', paddingLeft:10}}> Activities </Text>
                {/* </View> */}
            </BottomSheet>
            
       
    )
}

// export default HomeScreen

const styles = StyleSheet.create({
    mainContainer:{ 
        // flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor:'transparent'
    },
    sheetContainer: {
        // flex: 1,
        // alignItems: 'center',
        backgroundColor:'rgba(38, 40, 50, 0.4)'
    },
    
})
