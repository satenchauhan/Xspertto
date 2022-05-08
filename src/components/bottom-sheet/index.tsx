import React, { useCallback, useMemo, useRef } from 'react';
import { View, StyleSheet,ViewStyle  } from 'react-native';
import { BottomSheetModal,BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import { FloatButton } from '../buttons/buttons';

const outerStyle: ViewStyle ={
    borderWidth:1, 
    borderColor:'rgba(0,0,0,0.5)', 
    borderRadius:10, 
    shadowRadius: 4,
    shadowOffset: {
        width: 0,
        height: -10,
    },
    shadowColor: '#000000',
    elevation: 5,
}

export const BottomSheetContent = ({content}) =>{
     // ref
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    // variables
    const snapPoints = useMemo(() => ['25%', '50%', '100%'], []);

    const handleModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    }, []);

    const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
    }, []);

    return (
            <BottomSheetModalProvider>
            <View>
                <FloatButton label={'plus'} style={{position:'absolute', bottom:5}} onPress={handleModalPress} />
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={1}
                    style={outerStyle}
                    snapPoints={snapPoints}
                    onChange={handleSheetChanges}
                >
                    {content}
                </BottomSheetModal>
               
            </View>
           
        </BottomSheetModalProvider>
    )
}

const QtStyles = StyleSheet.create({
    outer:{
        flex:1,
        paddingHorizontal:0,
        // backgroundColor:'#676D8F',
        borderRadius:8,
    },  
    headBox:{
        backgroundColor:'#676D8F', 
    }
});


