import React from 'react';
import { Text, View,TextInput, Image,TouchableOpacity} from 'react-native';
import {Title,IconButton,Checkbox } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ItemStyles } from '../ItemStyles';
// import { FtPlacehoder, SqftPlacehoder,LastTotalPlacehoder } from './Placeholder';


const Closets = (props) => {
    const [checked, setChecked] = React.useState(false);
    return (
        <View >
            {/* Flat and Texture */}
            <View style={{ marginTop: 10 }}>
                <Text style={ItemStyles.optionTitle}>Closet Size</Text>
                <View style={[ItemStyles.flex, { paddingLeft: 5 }]}>
                    <View style={[ItemStyles.flex, ItemStyles.rectangleBox]}>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        <Text style={{ color: 'black' }}>Small</Text>
                    </View>
                    <View style={[ItemStyles.flex, ItemStyles.rectangleBox]}>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        <Text style={{ color: 'black' }}>Medium</Text>
                    </View>
                    <View style={[ItemStyles.flex, ItemStyles.rectangleBox]}>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        <Text style={{ color: 'black' }}>Large</Text>
                    </View>
                    <Text >{''}</Text>
                </View>
            </View>
            {/* Small Closet===================================== */}
            <View style={{ marginTop: 15 }}>
                <View style={ItemStyles.flex}>
                    <Text style={ItemStyles.title}>Small Closet</Text>
                    {/* <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => {setChecked(!checked); }}/> */}
                </View>
                <View style={[ItemStyles.setPadding, { marginTop: 2 }]}>
                    <View style={ItemStyles.inputLabel}>
                        <Text style={ItemStyles.labelColor}>Price:</Text>
                        <Text style={ItemStyles.midLabelColor}>Quantity:</Text>
                        <Text style={ItemStyles.txtBold}>Total:</Text>
                    </View>
                    <View style={ItemStyles.flex}>
                        <View>
                            <TextInput
                                style={ItemStyles.OnlyInpt}
                                name={'price'}
                                placeholder={"$0.00"}
                                placeholderTextColor={'black'}
                            />
                            {/* <SqftPlacehoder />   */}
                        </View>
                        <View style={ItemStyles.flex}>
                            <IconButton icon={'minus'} color={'white'} size={23.5} style={ItemStyles.minAddBtn}
                                onPress={() => console.log('pressed')}
                            />
                            <TextInput
                                style={ItemStyles.QtytOrCoatsInpt}
                                name={'coats'}
                                placeholder={'0'}
                                placeholderTextColor="black"
                            />
                            <IconButton icon={'plus'} color={'white'} size={23.5} style={ItemStyles.minAddBtn}
                                onPress={() => console.log('pressed')}
                            />
                        </View>
                        <View>
                            <TextInput
                                style={ItemStyles.totalInpt}
                                name={'total'}
                                placeholder={"$0.00"}
                                placeholderTextColor={"black"}
                            />
                        </View>
                    </View>
                </View>
            </View>
            {/* Medium Closet======================== */}
            <View style={{ marginTop: 15 }}>
                <View style={ItemStyles.flex}>
                    <Text style={ItemStyles.title}>Medium Closet</Text>
                    {/* <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => {setChecked(!checked); }}/> */}
                </View>
                <View style={[ItemStyles.setPadding, { marginTop: 2 }]}>
                    <View style={ItemStyles.inputLabel}>
                        <Text>Price:</Text>
                        <Text style={{ color: 'black' }}>Quantity:</Text>
                        <Text style={{ fontWeight: 'bold' }}>Total:</Text>
                    </View>
                    <View style={[ItemStyles.flex]}>
                        <View>
                            <TextInput
                                style={ItemStyles.OnlyInpt}
                                name={'price'}
                                placeholder={"$0.00"}
                                placeholderTextColor={'black'}
                            />
                            {/* <SqftPlacehoder />    */}
                        </View>
                        <View style={ItemStyles.flex}>
                            <IconButton icon={'minus'} color={'white'} size={23.5} style={ItemStyles.minAddBtn}
                                onPress={() => console.log('pressed')}
                            />
                            <TextInput
                                style={ItemStyles.QtytOrCoatsInpt}
                                name={'coats'}
                                placeholder={'0'}
                                placeholderTextColor="black"
                            />
                            <IconButton icon={'plus'} color={'white'} size={23.5} style={ItemStyles.minAddBtn}
                                onPress={() => console.log('pressed')}
                            />
                        </View>
                        <View>
                            <TextInput
                                style={ItemStyles.totalInpt}
                                name={'total'}
                                placeholder={"$0.00"}
                                placeholderTextColor={"black"}
                            />
                        </View>
                    </View>
                </View>
            </View>
            {/* Large Closet======================== */}
            <View style={{ marginTop: 15 }}>
                <View style={ItemStyles.flex}>
                    <Text style={ItemStyles.title}>Large Closet</Text>
                    {/* <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => {setChecked(!checked); }}/> */}
                </View>
                <View style={[ItemStyles.setPadding, { marginTop: 2 }]}>
                    <View style={ItemStyles.inputLabel}>
                        <Text style={ItemStyles.labelColor}>Price:</Text>
                        <Text style={ItemStyles.midLabelColor}>Quantity:</Text>
                        <Text style={ItemStyles.txtBold}>Total:</Text>
                    </View>
                    <View style={[ItemStyles.flex]}>
                        <View>
                            <TextInput
                                style={ItemStyles.OnlyInpt}
                                name={'price'}
                                placeholder={"$0.00"}
                                placeholderTextColor={'black'}
                            />
                            {/* <SqftPlacehoder />      */}
                        </View>
                        <View style={ItemStyles.flex}>
                            <IconButton icon={'minus'} color={'white'} size={23.5} style={ItemStyles.minAddBtn}
                                onPress={() => console.log('pressed')}
                            />
                            <TextInput
                                style={ItemStyles.QtytOrCoatsInpt}
                                name={'coats'}
                                placeholder={'0'}
                                placeholderTextColor="black"
                            />
                            <IconButton icon={'plus'} color={'white'} size={23.5} style={ItemStyles.minAddBtn}
                                onPress={() => console.log('pressed')}
                            />
                        </View>
                        <View>
                            <TextInput
                                style={[ItemStyles.totalInpt]}
                                name={'total'}
                                placeholder={"$0.00"}
                                placeholderTextColor={"black"}
                            />
                        </View>
                    </View>
                </View>
            </View>
            {/* Include Paint Cost */}
            <View style={{ marginTop: 10 }}>
                <View style={ItemStyles.flex}>
                    <Text style={ItemStyles.title}>Include Paint Cost?</Text>
                    <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                </View>
                <View style={ItemStyles.includeCost}>
                    <View style={ItemStyles.selectBox}>
                        <Text style={ItemStyles.select}>Select Paint Finish </Text>
                        <MaterialIcons {...props} name="keyboard-arrow-down" size={28} onPress={() => setShouldShow(!shouldShow)} />
                    </View>
                    <View style={ItemStyles.selectList}>
                        {/*  
                                <Text style={ItemStyles.selectCost}>Flat Latex</Text>
                                <Text style={ItemStyles.selectCost}>Eggshell Latex</Text>
                                <Text style={ItemStyles.selectCost}>Satin Latex</Text>
                                <Text style={ItemStyles.selectCost}>Semi-Gloss Latex</Text>
                                <Text style={ItemStyles.selectCost}>Gloss Latex</Text>
                                <Text style={[ItemStyles.selectCost,{paddingBottom:10}]}>High Gloss Latex</Text>
                            */}
                    </View>
                    <View style={[ItemStyles.selectBox, { marginBottom: 0, }]}>
                        <Text style={ItemStyles.select}>Select Paint Quality </Text>
                        <MaterialIcons {...props} name="keyboard-arrow-down" size={28} onPress={() => setShouldShow(!shouldShow)} />
                    </View>
                    <View style={[ItemStyles.selectList, { marginTop: 0 }]}>
                        {/*  
                                <Text style={ItemStyles.selectCost}>Economy</Text>
                                <Text style={ItemStyles.selectCost}>Contractor</Text>
                                <Text style={ItemStyles.selectCost}>Standard</Text>
                                <Text style={ItemStyles.selectCost}>Quality</Text>
                                <Text style={ItemStyles.selectCost}>Superior</Text>
                                <Text style={[ItemStyles.selectCost,{paddingBottom:10}]}>Premium</Text>
                            */}
                    </View>
                </View>
            </View>
            {/*================Total============== */}
            <View>
                <View style={ItemStyles.bottomTotal}>
                    <View>
                        <Text style={ItemStyles.label}>Total Price:</Text>
                        <View>
                            <TextInput
                                style={[ItemStyles.lastTotalInpt, { width: 100 }]}
                                name={'price'}
                                placeholder={"$0.00"}
                                placeholderTextColor={'black'}
                            />
                        </View>
                    </View>
                </View>
                <View style={[ItemStyles.hrLine, { marginTop: 20 }]}></View>
            </View>
            {/*================Sub Total============== */}
            <View style={{ marginTop: 15 }}>
                <View style={ItemStyles.bottomTotal}>
                    <View>
                        <Text style={ItemStyles.label}>Sub Total Price:</Text>
                        <View>
                            <TextInput
                                style={[ItemStyles.lastTotalInpt, { width: 110 }]}
                                name={'price'}
                                placeholder={"$0.00"}
                                placeholderTextColor={'black'}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}></View>
            </View>
        </View>
    )
}

export default Closets;