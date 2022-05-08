import React from 'react'
import { StyleSheet, Text,TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Item = (props) => {
    // console.log(props.item.length)
    return (
        <View style={Styles.tableBody}>
            {props.room !== undefined ?
            <View style={Styles.tbhead}>
                <Icon name='bars' size={25} color='#050505' style={{padding:5, paddingHorizontal:8}} />
                <Text style={Styles.groupTxt}>{props.room}</Text>
            </View>
            :
            null
            }
            <View style={Styles.line}></View>
            {props.item.length > 0  ? 
                props.item.map((data, x) => 
                <View key={x} style={Styles.itemContainer}>
                    <Text style={Styles.itemName}>{data}</Text>
                    <TextInput 
                        style={[Styles.priceInpt,,{width:40}]}
                        name={'qty'}
                        placeholder={"1"}
                        placeholderTextColor={'black'}
                    />
                    <TextInput 
                        style={[Styles.priceInpt]}
                        name={'qty'}
                        placeholder={"$75.00"}
                        placeholderTextColor={'black'}
                    />
                    <TextInput 
                        style={[Styles.priceInpt]}
                        name={'qty'}
                        placeholder={"$150.00"}
                        placeholderTextColor={'black'}
                    />
                </View> 
                )
             : 
                <View style={Styles.itemContainer}>
                    <Text style={Styles.Addtxt}>+ Drag Line Items Here  </Text>
                    <Icon name='plus'  size={20} color='#050505' />
                </View>
             }
        </View>  
    )
}

export default Item;

const Styles = StyleSheet.create({
    tableBody:{
        // flex:1,
        backgroundColor:'#FFFFFF', 
        borderWidth:2, 
        borderColor:'#D3D3D3',  
        borderRadius:5,
        marginTop:5,
        marginHorizontal:2,
        marginBottom:10,
        shadowColor:'#000000',
        elevation:3,   
    },
    tbhead:{
        flexDirection:'row', 
        alignItems:'flex-start', 
        backgroundColor:'#FFFFFF'
    },
    groupTxt:{
        fontFamily:'RobotoCondensed-Bold', 
        color:'#050505', 
        fontSize:14, 
        lineHeight:35, 
        paddingLeft:10
    },
    line:{
        width:'100%',
        borderWidth:1, 
        borderColor:'#D3D3D3'
    },
    itemContainer:{
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-between',
        paddingVertical:5, 
        paddingHorizontal:8
    },
    itemName:{
        flex:0.6,
        fontFamily:'Roboto-Regular', 
        fontWeight:'400', 
        fontSize:14, 
        color:'#3851DD', 
        lineHeight:30
    },
    priceInpt:{ 
        width:90, 
        fontFamily:'RobotoCondensed-Regular',
        fontSize:14,
        color:'#1C202D',
        padding:3,
        textAlign:'center',
        borderWidth:1, 
        backgroundColor:'white',
        borderColor:'#D2D2D2', 
        borderRadius:4,
    },
    Addtxt:{
        fontFamily:'Roboto-Bold', 
        fontSize:15, 
        color:'rgba(28, 32, 45, 0.8)'
    }

})


/* 
<Item item={'Baseboards'} />
<Item item={'Ceillings'} />
<Item item={'Wainscoting'} />
<Item item={'WallPaper'} />
*/