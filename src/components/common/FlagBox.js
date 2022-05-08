import React from 'react';
import {View} from 'react-native';
import flags from './Flags';
import FlagTag from './FlagTag';



const FlagBox = ({style,children}) => {

    return(
        <View>
            {flags.map((item,i) =>
                item.flag===children ? 
                    <FlagTag key={i} style={[style,
                        item.flag===children ? { backgroundColor:item.color, borderColor:item.color } 
                        : { backgroundColor:'#fff', borderColor:'#fff' }
                        ]}
                    >{children}</FlagTag>
                :null
            )}
        </View>
    )
};


export default FlagBox;



