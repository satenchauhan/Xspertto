import React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { Title, IconButton, Checkbox } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ItemStyles } from '../ItemStyles';
import { FtPlacehoder, PerLftPlacehoder } from '../Placeholder';


const Trim = (props) => {
    const [checked, setChecked] = React.useState(false);
    return (
            <View style={{ marginTop: 18 }}>
                <View style={ItemStyles.lwhSection}>
                    <View>
                        <Text style={ItemStyles.inputLabel}>Length:</Text>
                        <View style={ItemStyles.inptFlex}>
                            <TextInput
                                style={ItemStyles.L_W_H_Input}
                                name={'length'}
                                placeholder={'0'}
                                placeholderTextColor="black"
                            />
                            <FtPlacehoder />
                        </View>
                    </View>
                    <View>
                        <Text style={ItemStyles.inputLabel}>Width:</Text>
                        <View style={ItemStyles.inptFlex}>
                            <TextInput
                                style={ItemStyles.L_W_H_Input}
                                name={'width'}
                                placeholder={'0'}
                                placeholderTextColor="black"
                            />
                            <FtPlacehoder />
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Total Linear:</Text>
                        <View style={ItemStyles.inptFlex}>
                            <TextInput
                                style={ItemStyles.L_W_H_Input}
                                name={'height'}
                                placeholder={'0'}
                                placeholderTextColor="black"
                            />
                            <FtPlacehoder />
                        </View>
                    </View>
                </View>
                <View style={[ItemStyles.hrLine, { opacity: 0.1 }]}></View>
                {/* Baseboards======================================== */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.collapstitle}>Baseboards</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Coats of Paint</Text>
                    </View>
                    <View style={[ItemStyles.setPadding, { marginTop: 2 }]}>
                        <View style={ItemStyles.inputLabel}>
                            <Text style={ItemStyles.labelColor}>Price:</Text>
                            <Text style={ItemStyles.midLabelColor}>Coats:</Text>
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
                                <PerLftPlacehoder />
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
                    {/* Primer Required======================== */}
                    <View style={{ marginTop: 10 }}>
                        <View style={ItemStyles.flex}>
                            <Text style={ItemStyles.title}>Primer Required</Text>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        </View>
                        <View style={[ItemStyles.setPadding]}>
                            <View style={ItemStyles.inputLabel}>
                                <Text style={ItemStyles.labelColor}>Price:</Text>
                                <Text style={ItemStyles.midLabelColor}>Coats:</Text>
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
                                    <PerLftPlacehoder />
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
                    {/* Caulking Required======================== */}
                    <View style={{ marginTop: 10 }}>
                        <View style={ItemStyles.flex}>
                            <Text style={ItemStyles.title}>Caulking requried?</Text>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        </View>
                        <View style={[ItemStyles.setPadding]}>
                            <View style={ItemStyles.inputLabel}>
                                <Text style={ItemStyles.labelColor}>Price:</Text>
                                <Text style={ItemStyles.midLabelColor}>Total Linear:</Text>
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
                                    <PerLftPlacehoder />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <TextInput
                                        style={ItemStyles.priceInpt}
                                        name={'price'}
                                        placeholder={"$0.00"}
                                        placeholderTextColor={'black'}
                                    />
                                    <PerLftPlacehoder />
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
                    {/* Any Repairs Required========= */}
                    <View style={{ marginTop: 10 }}>
                        <View style={ItemStyles.flex}>
                            <Text style={ItemStyles.title}>Any Repairs Required</Text>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        </View>
                        <View style={[ItemStyles.setPadding]}>
                            <View style={ItemStyles.inputLabel}>
                                <Text style={ItemStyles.labelColor}>Price:</Text>
                                <Text style={ItemStyles.midLabelColor}>Coats:</Text>
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
                                    <PerLftPlacehoder />
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
                    <View style={ItemStyles.hrLine}></View>
                </View>
                {/* Baseboards End========================================= */}
                {/*Door Casing/Frames====================================== */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.collapstitle}>Door Casing/Frames</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={ItemStyles.setPadding}>
                        <Text style={ItemStyles.optionTitle}>Choose all that apply</Text>
                        <View style={[ItemStyles.flex, { paddingLeft: 5 }]}>
                            <View style={[ItemStyles.flex, ItemStyles.rectangleBox]}>
                                <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                                <Text style={{ color: 'black' }}>Door Casing</Text>
                            </View>
                            <View style={[ItemStyles.flex, ItemStyles.rectangleBox]}>
                                <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                                <Text style={{ color: 'black' }}>Door Frames</Text>
                            </View>
                            <Text >{''}</Text>
                            <Text >{''}</Text>
                        </View>
                    </View>
                    {/* Door Casing======================== */}
                    <View style={{ marginTop: 10 }}>
                        <View style={ItemStyles.flex}>
                            <Text style={ItemStyles.title}>Door Casing</Text>
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
                                    <PerLftPlacehoder />
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
                    {/* caulking Required======================== */}
                    <View style={{ marginTop: 10 }}>
                        <View style={ItemStyles.flex}>
                            <Text style={ItemStyles.title}>Caulking requried?</Text>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        </View>
                        <View style={ItemStyles.setPadding}>
                            <View style={ItemStyles.inputLabel}>
                                <Text style={ItemStyles.labelColor}>Price:</Text>
                                <Text style={ItemStyles.midLabelColor}>Total Linear:</Text>
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
                                    <PerLftPlacehoder />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <TextInput
                                        style={ItemStyles.priceInpt}
                                        name={'price'}
                                        placeholder={"$0.00"}
                                        placeholderTextColor={'black'}
                                    />
                                    <PerLftPlacehoder />
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
                    {/* Repairs Required======================== */}
                    <View style={{ marginTop: 10 }}>
                        <View style={ItemStyles.flex}>
                            <Text style={ItemStyles.title}>Repairs Required</Text>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        </View>
                        <View style={ItemStyles.setPadding}>
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
                                    <PerLftPlacehoder />
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
                            <View style={[ItemStyles.selectBox, { marginBottom: 0 }]}>
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
                    <View style={[ItemStyles.hrLine, { opacity: 0.1 }]}></View>
                    {/* Door Frame======================== */}
                    <View style={{ marginTop: 10 }}>
                        <View style={ItemStyles.flex}>
                            <Text style={ItemStyles.title}>Door Frame</Text>
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
                                    <PerLftPlacehoder />
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
                        {/* Repairs Required========= */}
                        <View style={{ marginTop: 10 }}>
                            <View style={ItemStyles.flex}>
                                <Text style={ItemStyles.title}>Repairs Required</Text>
                                <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            </View>
                            <View style={ItemStyles.setPadding}>
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
                                        <PerLftPlacehoder />
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
                                <View style={[ItemStyles.selectBox, { marginBottom: 0 }]}>
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
                            {/*================Total============== */}
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
                            {/* <View style={[ItemStyles.hrLine, { opacity: 0.1 }]}></View> */}
                        </View>
                    </View>
                </View>
                {/* End of Door Casing================== */}
                <View style={ItemStyles.hrLine}></View>
                {/* End of Door Casing/Frame =================== */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.collapstitle}>Window Casing/Frames</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <Text style={ItemStyles.optionTitle}>Choose all that apply</Text>
                    <View style={[ItemStyles.flex, { paddingLeft: 5 }]}>
                        <View style={[ItemStyles.flex, ItemStyles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={ItemStyles.labelColor}>Window Casing</Text>
                        </View>
                        <View style={[ItemStyles.flex, ItemStyles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={ItemStyles.labelColor}>Window Frames</Text>
                        </View>
                        <Text >{''}</Text>
                        <Text >{''}</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <View style={ItemStyles.flex}>
                            <Text style={ItemStyles.title}>Window Casing</Text>
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
                                    <PerLftPlacehoder />
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
                    {/* caulking Required======================== */}
                    <View style={{ marginTop: 10 }}>
                        <View style={ItemStyles.flex}>
                            <Text style={ItemStyles.title}>Caulking requried?</Text>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        </View>
                        <View style={ItemStyles.setPadding}>
                            <View style={ItemStyles.inputLabel}>
                                <Text style={ItemStyles.labelColor}>Price:</Text>
                                <Text style={ItemStyles.midLabelColor}>Total Linear:</Text>
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
                                    <PerLftPlacehoder />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <TextInput
                                        style={ItemStyles.priceInpt}
                                        name={'price'}
                                        placeholder={"$0.00"}
                                        placeholderTextColor={'black'}
                                    />
                                    <PerLftPlacehoder />
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
                    {/* Repairs Required======================== */}
                    <View style={{ marginTop: 10 }}>
                        <View style={ItemStyles.flex}>
                            <Text style={ItemStyles.title}>Repairs Required</Text>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        </View>
                        <View style={ItemStyles.setPadding}>
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
                                    <PerLftPlacehoder />
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
                            <View style={[ItemStyles.selectBox, { marginBottom: 0 }]}>
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
                        {/*================Total============== */}
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
                        <View style={[ItemStyles.hrLine, { opacity: 0.1 }]}></View>
                    </View>
                    {/* End of Window Casing==========================================*/}

                    {/* Issues here========================= */}
                    {/* Window Frame===============================================*/}
                    <View style={{ marginTop: 10 }}>
                        <View style={ItemStyles.flex}>
                            <Text style={ItemStyles.title}>Window Frame</Text>
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
                                    <PerLftPlacehoder />
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
                        <View>
                            {/* Repairs Required======== */}
                            <View style={{ marginTop: 10 }}>
                                <View style={ItemStyles.flex}>
                                    <Text style={ItemStyles.title}>Repairs Required</Text>
                                    <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                                </View>
                                <View style={ItemStyles.setPadding}>
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
                                            <PerLftPlacehoder />
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
                                    <View style={[ItemStyles.selectBox, { marginBottom: 0 }]}>
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
                        </View>
                        {/*==========Total========== */}
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
                    </View>
                    {/* End of  Window Frame===============================================*/}
                    {/* Issues here========================= */}
                </View>
                <View style={{ marginTop: 20 }}></View>
            </View>
    )
}

export default Trim;