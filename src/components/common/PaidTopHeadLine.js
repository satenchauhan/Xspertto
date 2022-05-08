import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import flags from './Flags';



const PaidTopHeadLine = ({children}) => {
    return ( 
        <View> 
            {flags.map((item,i) =>
                item.flag===children ? 
                    // item.flag ==='paid' ||  item.flag ==='invoice' ||  item.flag ==='job' ? null :
                    <View key={i} style={headStyle.MainBox}>
                        <View style={{marginBottom:3}}>
                            <Text style={[headStyle.headLineTxt, item.flag===children ? { color:item.color }: {} ]}>
                                {children==='paid' ? '' : children }
                            </Text>
                        </View>
                        <View style={[headStyle.topLine,item.flag===children ? { borderColor:item.color }: {} ]}></View> 
                    </View>
                :null 
            )}
        </View>
    ) 
}

export default PaidTopHeadLine;

const headStyle = StyleSheet.create({
    MainBox:{
        flex:1,
        marginBottom:0
    },
    headLineTxt:{
        fontFamily:'Roboto',
        fontSize:22,
        fontWeight:'700',
        textTransform:'capitalize'
    },
    topLine:{
        flex:1,
        borderWidth:2, 
        borderColor:'rgba(149, 15, 23, 1)',
    },
    
});
