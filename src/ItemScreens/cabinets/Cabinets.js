import React from 'react';
import { Text, View, Image, TextInput,TouchableOpacity, Dimensions} from 'react-native';
import {Title,IconButton,Checkbox } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { PanelStyle }  from '../PanelStyle';
import { ItemStyles } from '../ItemStyles';
import {PerSqftPlacehoder } from '../Placeholder';


const Cabinets = (props) => {
    const [checked, setChecked] = React.useState(false);
    return (
        <View>
            {/* Use this area dimensions */}
            <View style={{ marginTop: 10 }}>
                <Text style={ItemStyles.optionTitle}>Cabinet Type(select all that apply)</Text>
                <View style={{ marginLeft: 10 }}>
                    <View style={PanelStyle.iconsFlex}>
                        <View style={[PanelStyle.Box, { marginRight: 10 }]}>
                            <Image style={PanelStyle.ItemIcon} resizeMode='contain' source={require('../../assets/items-img/Cabinet-door.png')} />
                            <Text style={PanelStyle.IconTitle}>1 Panel</Text>
                        </View>
                        <View style={PanelStyle.Box}>
                            <Image style={PanelStyle.ItemIcon} resizeMode='contain' source={require('../../assets/items-img/cabinet-drawers.png')} />
                            <Text style={PanelStyle.IconTitle}>3-7 Panel</Text>
                        </View>
                        <View style={PanelStyle.noBox}>
                            <Text>{''}</Text>
                        </View>
                        <View style={PanelStyle.noBox}>
                            <Text>{''}</Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* Cabinet Doors */}
            <View style={{ marginTop: 15 }}>
                <Text style={ItemStyles.optionTitle}>Cabinet Doors</Text>
                <View style={[ItemStyles.flex, { paddingLeft: 5 }]}>
                    <View style={[ItemStyles.flex, ItemStyles.rectangleBox]}>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        <Text style={{ color: 'black' }}>Flat</Text>
                    </View>
                    <View style={[ItemStyles.flex, ItemStyles.rectangleBox]}>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        <Text style={{ color: 'black' }}>Paneled</Text>
                    </View>
                    <View style={[ItemStyles.flex, ItemStyles.rectangleBox]}>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        <Text style={{ color: 'black' }}>French</Text>
                    </View>
                    <Text >{''}</Text>
                </View>
            </View>
            {/* Flat===================================== */}
            <View style={{ marginTop: 10 }}>
                <View style={ItemStyles.flex}>
                    <Text style={ItemStyles.title}>Flat</Text>
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
                                style={ItemStyles.priceInpt}
                                name={'price'}
                                placeholder={"$0.00"}
                                placeholderTextColor={'black'}
                            />
                            <PerSqftPlacehoder />
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
            {/* Paneled======================== */}
            <View style={{ marginTop: 10 }}>
                <View style={ItemStyles.flex}>
                    <Text style={ItemStyles.title}>Paneled</Text>
                </View>
                <View style={[ItemStyles.setPadding, { marginTop: 2 }]}>
                    <View style={ItemStyles.inputLabel}>
                        <Text style={ItemStyles.labelColor}>Price:</Text>
                        <Text style={ItemStyles.midLabelColor}>Quantity:</Text>
                        <Text style={ItemStyles.txtBold}>Total:</Text>
                    </View>
                    <View style={ItemStyles.flex}>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                style={ItemStyles.priceInpt}
                                name={'price'}
                                placeholder={"$0.00"}
                                placeholderTextColor={'black'}
                            />
                            <PerSqftPlacehoder />
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
            {/* French======================== */}
            <View style={{ marginTop: 10 }}>
                <View style={ItemStyles.flex}>
                    <Text style={ItemStyles.title}>French</Text>
                </View>
                <View style={[ItemStyles.setPadding, { marginTop: 2 }]}>
                    <View style={ItemStyles.inputLabel}>
                        <Text style={ItemStyles.labelColor}>Price:</Text>
                        <Text style={ItemStyles.midLabelColor}>Quantity:</Text>
                        <Text style={ItemStyles.txtBold}>Total:</Text>
                    </View>
                    <View style={ItemStyles.flex}>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                style={ItemStyles.priceInpt}
                                name={'price'}
                                placeholder={"$0.00"}
                                placeholderTextColor={'black'}
                            />
                            <PerSqftPlacehoder />
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
            {/* Repairs Required ======================== */}
            <View style={{ marginTop: 20 }}>
                <View style={ItemStyles.flex}>
                    <Text style={ItemStyles.title}>Repairs Required </Text>
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
                            {/* <SqftPlacehoder />    */}
                        </View>
                        <View style={ItemStyles.flex}>
                            <IconButton icon={'minus'} color={'white'} size={23.5} style={ItemStyles.minAddBtn}
                                onPress={() => setModalVisible(true)}
                            />
                            <TextInput
                                style={ItemStyles.QtytOrCoatsInpt}
                                name={'coats'}
                                placeholder={'0'}
                                placeholderTextColor="black"
                            />
                            <IconButton icon={'plus'} color={'white'} size={23.5} style={ItemStyles.minAddBtn}
                                onPress={() => setModalVisible(true)}
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
            <View style={[ItemStyles.hrLine, { opacity: 0.1 }]}></View>
            {/* Drawers===================== */}
            <View style={{ marginTop: 15 }}>
                <Text style={ItemStyles.title}>Drawers</Text>
                <View style={[ItemStyles.flex, { paddingLeft: 5 }]}>
                    <View style={[ItemStyles.flex, ItemStyles.rectangleBox]}>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        <Text style={{ color: 'black' }}>Flat</Text>
                    </View>
                    <View style={[ItemStyles.flex, ItemStyles.rectangleBox]}>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        <Text style={{ color: 'black' }}>Paneled</Text>
                    </View>
                    <View style={[ItemStyles.flex, ItemStyles.rectangleBox]}>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        <Text style={{ color: 'black' }}>French</Text>
                    </View>
                    <Text >{''}</Text>
                </View>
            </View>
            {/* Flat===================================== */}
            <View style={{ marginTop: 10 }}>
                <View style={ItemStyles.flex}>
                    <Text style={ItemStyles.title}>Flat</Text>
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
                                style={ItemStyles.priceInpt}
                                name={'price'}
                                placeholder={"$0.00"}
                                placeholderTextColor={'black'}
                            />
                            <PerSqftPlacehoder />
                        </View>
                        <View style={ItemStyles.flex}>
                            <IconButton icon={'minus'} color={'white'} size={23.5} style={ItemStyles.minAddBtn}
                                onPress={() => setModalVisible(true)}
                            />
                            <TextInput
                                style={ItemStyles.QtytOrCoatsInpt}
                                name={'coats'}
                                placeholder={'0'}
                                placeholderTextColor="black"
                            />
                            <IconButton icon={'plus'} color={'white'} size={23.5} style={ItemStyles.minAddBtn}
                                onPress={() => setModalVisible(true)}
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
            {/* Paneled======================== */}
            <View style={{ marginTop: 10 }}>
                <View style={ItemStyles.flex}>
                    <Text style={ItemStyles.title}>Paneled</Text>
                </View>
                <View style={[ItemStyles.setPadding, { marginTop: 2 }]}>
                    <View style={ItemStyles.inputLabel}>
                        <Text style={ItemStyles.labelColor}>Price:</Text>
                        <Text style={ItemStyles.midLabelColor}>Quantity:</Text>
                        <Text style={ItemStyles.txtBold}>Total:</Text>
                    </View>
                    <View style={ItemStyles.flex}>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                style={ItemStyles.priceInpt}
                                name={'price'}
                                placeholder={"$0.00"}
                                placeholderTextColor={'black'}
                            />
                            <PerSqftPlacehoder />
                        </View>
                        <View style={ItemStyles.flex}>
                            <IconButton icon={'minus'} color={'white'} size={23.5} style={ItemStyles.minAddBtn}
                                onPress={() => setModalVisible(true)}
                            />
                            <TextInput
                                style={ItemStyles.QtytOrCoatsInpt}
                                name={'coats'}
                                placeholder={'0'}
                                placeholderTextColor="black"
                            />
                            <IconButton icon={'plus'} color={'white'} size={23.5} style={ItemStyles.minAddBtn}
                                onPress={() => setModalVisible(true)}
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
            {/* French======================== */}
            <View style={{ marginTop: 10 }}>
                <View style={ItemStyles.flex}>
                    <Text style={ItemStyles.title}>French</Text>
                </View>
                <View style={[ItemStyles.setPadding, { marginTop: 2 }]}>
                    <View style={ItemStyles.inputLabel}>
                        <Text style={ItemStyles.labelColor}>Price:</Text>
                        <Text style={ItemStyles.midLabelColor}>Quantity:</Text>
                        <Text style={ItemStyles.txtBold}>Total:</Text>
                    </View>
                    <View style={ItemStyles.flex}>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                style={ItemStyles.priceInpt}
                                name={'price'}
                                placeholder={"$0.00"}
                                placeholderTextColor={'black'}
                            />
                            <PerSqftPlacehoder />
                        </View>
                        <View style={ItemStyles.flex}>
                            <IconButton icon={'minus'} color={'white'} size={23.5} style={ItemStyles.minAddBtn}
                                onPress={() => setModalVisible(true)}
                            />
                            <TextInput
                                style={ItemStyles.QtytOrCoatsInpt}
                                name={'coats'}
                                placeholder={'0'}
                                placeholderTextColor="black"
                            />
                            <IconButton icon={'plus'} color={'white'} size={23.5} style={ItemStyles.minAddBtn}
                                onPress={() => setModalVisible(true)}
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
            {/* Repairs Required ======================== */}
            <View style={{ marginTop: 20 }}>
                <View style={ItemStyles.flex}>
                    <Text style={ItemStyles.title}>Repairs Required </Text>
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
                            {/* <SqftPlacehoder />    */}
                        </View>
                        <View style={ItemStyles.flex}>
                            <IconButton icon={'minus'} color={'white'} size={23.5} style={ItemStyles.minAddBtn}
                                onPress={() => setModalVisible(true)}
                            />
                            <TextInput
                                style={ItemStyles.QtytOrCoatsInpt}
                                name={'coats'}
                                placeholder={'0'}
                                placeholderTextColor="black"
                            />
                            <IconButton icon={'plus'} color={'white'} size={23.5} style={ItemStyles.minAddBtn}
                                onPress={() => setModalVisible(true)}
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

export default Cabinets;