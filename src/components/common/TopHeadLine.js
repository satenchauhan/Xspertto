import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import flags from './Flags';



const TopHeadLine = ({children}) => {
    if(children==='invoicing req'){
        return(
            <View> 
                {children==='invoicing req' ? 
                    <View style={headStyle.MainBox}>
                        <View style={{marginBottom:3}}>
                            <Text style={[headStyle.headLineTxt,{ color:'#225091' }]}>
                            {'invoicing required'}
                            </Text>
                        </View>
                        <View style={[headStyle.topLine,{ borderColor:'#225091' }]}></View> 
                    </View>
                :null }
            </View>
        )
    }else{
        return ( 
            <View> 
                {flags.map((item,i) =>
                    item.flag===children ? 
                        <View key={i} style={headStyle.MainBox}>
                            <View style={{marginBottom:3}}>
                                <Text style={[headStyle.headLineTxt, item.flag===children ? { color:item.color }: {} ]}>
                                {children==='request' ? 'Changes Requested' : children }
                                </Text>
                            </View>
                            <View style={[headStyle.topLine,item.flag===children ? { borderColor:item.color }: {} ]}></View> 
                        </View>
                    :null 
                )}
            </View>
        ) 
    }
}

export default TopHeadLine;

const headStyle = StyleSheet.create({
    MainBox:{
        flex:1,
        marginBottom:10
    },
    headLineTxt:{
        fontFamily:'RobotoCondensed-Regular',
        fontSize:22,
        fontWeight:'700',
        textTransform:'capitalize'
    },
    topLine:{
        flex:1,
        borderWidth:1.75, 
        borderColor:'rgba(149, 15, 23, 1)',
    },
    
});
