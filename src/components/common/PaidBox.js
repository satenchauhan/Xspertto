import React from 'react';
import {View} from 'react-native';
import FlagTag from './FlagTag';
import { PaidStamp } from './PaidStamp';


const PaidBox = ({children}) => {

    return(
        <View>
            <PaidStamp>{children}</PaidStamp>
        </View>
    )
};


export default PaidBox;
