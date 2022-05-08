import React,{useState,useContext} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { AddInput } from '../../components/addInput/add-input';
import { SuperContext } from '../../context/ContextProvider';

const TotalSection = ({style}) => {
    const {addBtn, setAddBtn, addVal, setAddVal} = useContext(SuperContext);
   
    const value = [
       { val: 'discount'},
       { val: 'surcharge'},
       { val: 'tax'},
       { val: 'deposit'},
    ]
    
    const showAddField = (text) => {
        for (let i = 0; i < value.length; i++) {
            if(value[i].val===text){
                setAddBtn(text); 
                setAddVal('0.00')
            }
        }    
    }

    return (
        <View style={[styles.TotalBox, style]}>
            <View style={styles.row}>
                <Text style={styles.LeftLabel}>Subtotal</Text>
                <Text style={[styles.RightValueTxt]}>$950,000,000.00</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.LeftLabel}>Discount</Text>
                {addVal !== null && addBtn===value[0].val ? 
                <Text style={[styles.RightValueTxt]}>{ addVal }</Text>
                :
                <TouchableOpacity onPress={() => showAddField(value[0].val)}>
                    <Text style={[styles.RightValueTxt,{color:'#3851DD'}]}>Add Discount</Text>
                </TouchableOpacity>
                }
            </View>
            {addBtn===value[0].val ? (<AddInput name="Discount" />): null}
            <View style={styles.row}>
                <Text style={styles.LeftLabel}>Surcharge</Text>
                {addVal !== null && addBtn===value[1].val ? 
                <Text style={[styles.RightValueTxt]}>{ addVal }</Text>
                :
                <TouchableOpacity onPress={() => showAddField(value[1].val)}>
                    <Text style={[styles.RightValueTxt,{color:'#3851DD'}]}>Add Surcharge</Text>
                </TouchableOpacity>
                }
            </View>
            {addBtn===value[1].val  ? ( <AddInput name="Surcharge" /> ): null }
            <View style={styles.row} >
                <Text style={styles.LeftLabel}>Tax</Text>
                {addVal !== null && addBtn===value[2].val ? 
                <Text style={[styles.RightValueTxt]}>{ addVal }</Text>
                :
                <TouchableOpacity onPress={() => showAddField(value[2].val)}>
                    <Text style={[styles.RightValueTxt,{color:'#3851DD'}]}>Add tax</Text>
                </TouchableOpacity>
                }
            </View>
            {addBtn===value[2].val ? ( <AddInput name="Tax" /> ) : null }
            <View style={styles.row}>
                <Text style={[styles.LeftLabel,{fontFamily:'Roboto-Bold',color:'#D85D17'}]}>GRAND TOTAL</Text>
                <Text style={[styles.RightValueTxt]}>$950,000,000.00</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.LeftLabel}>Required Deposit</Text>
                {addVal !== null && addBtn===value[3].val ? 
                <Text style={[styles.RightValueTxt]}>{ addVal }</Text>
                :
                <TouchableOpacity onPress={() => showAddField(value[3].val)}>
                    <Text style={[styles.RightValueTxt,{color:'#3851DD'}]}>Add Deposit</Text>
                </TouchableOpacity>
                }
            </View>
            {addBtn===value[3].val  ? ( <AddInput name="Deposit" /> ) : null }
        </View>
    )
}

export default TotalSection

const styles = StyleSheet.create({
    TotalBox:{ 
        flex:1,      
        paddingVertical:5,
        paddingHorizontal:10,
        marginTop:50,
        marginBottom:50,
        marginHorizontal:2,
        backgroundColor:'#FFFFFF',
        borderWidth:3,
        borderColor:'#3851DD',
        borderRadius:5,
        elevation:3
    },
    row:{
        flexDirection:'row', 
        alignItems:'flex-start', 
        justifyContent:'space-between',
        paddingVertical:8,
    },
    LeftLabel:{
        fontFamily:'RobotoCondensed-Regular', 
        fontSize:14, 
        color:'#323338'
    },
    RightValueTxt:{
        fontFamily:'RobotoCondensed-Bold', 
        fontSize:14, 
        color:'#323338', 
        textAlign:'right'
    },
    
})
