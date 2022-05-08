import React, {useCallback, useMemo, useRef } from 'react';
import {ViewStyle} from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';


export const Bottomsheet = ({content}) => {
    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);
    // variables
    // const snapPoints = useMemo(() => ['12%', '60%'],[]);
    const snapPoints = useMemo(() => ["25%", "35%", "50%"], []);
    // callBack
    const handleSheetChanges = useCallback((index: number) => {
          // console.log('handleSheetChanges', index);
    },[]);

    const OuterStyle: ViewStyle = {
        backgroundColor:'rgba(38, 40, 50, 1)',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        // zIndex:5
    }
    const indictorStyle: ViewStyle = {
        borderWidth:3, 
        width:60,
        borderColor:'rgba(228, 228, 231, 0.2)', 
        borderRadius:6,
    
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
            enableOverDrag={true}
            onChange={handleSheetChanges}
        >
            <BottomSheetScrollView>
               {content}
            </BottomSheetScrollView> 
        </BottomSheet>
    )
}

