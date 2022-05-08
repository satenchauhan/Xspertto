import React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { Title, IconButton, Checkbox } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ItemStyles } from '../ItemStyles';
import { PerEachPlacehoder } from '../Placeholder';


const Stairs = (props) => {
    const [checked, setChecked] = React.useState(false);
    return (
        <View>
            {/* Tread================ */}
            <View style={{ marginTop: 10 }}>
                <View style={ItemStyles.flex}>
                    <Text style={ItemStyles.collapstitle}>Tread</Text>
                    <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                </View>
                <View style={ItemStyles.setPadding}>
                    <Text style={ItemStyles.optionTitle}>Are you painting or staining?</Text>
                    <View style={[ItemStyles.flex, { paddingLeft: 5 }]}>
                        <View style={[ItemStyles.flex, ItemStyles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={{ color: 'black' }}>Painting</Text>
                        </View>
                        <View style={[ItemStyles.flex, ItemStyles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={{ color: 'black' }}>Staining</Text>
                        </View>
                        <Text >{''}</Text>
                        <Text >{''}</Text>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Tread Quantity</Text>
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
                                <PerEachPlacehoder />
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
                {/* Coats of Paint */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Coats of Paint</Text>
                    </View>
                    <View style={ItemStyles.setPadding}>
                        <View style={ItemStyles.inputLabel}>
                            <Text>{''}</Text>
                            <Text>{''}</Text>
                            <Text style={[ItemStyles.labelColor, { marginRight: 6 }]}>Coats:</Text>
                            <Text style={ItemStyles.txtBold}>Total:</Text>
                        </View>
                        <View style={ItemStyles.flex}>
                            <View>
                                <TextInput
                                    style={{ width: 90 }}
                                    editable={false}
                                />
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
                {/* End of coats of paint */}
                {/*  Primer required */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Primer Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={ItemStyles.setPadding}>
                        <View style={ItemStyles.inputLabel}>
                            <Text>{''}</Text>
                            <Text>{''}</Text>
                            <Text style={[ItemStyles.labelColor, { marginRight: 6 }]}>Coats:</Text>
                            <Text style={ItemStyles.txtBold}>Total:</Text>
                        </View>
                        <View style={ItemStyles.flex}>
                            <View>
                                <TextInput
                                    style={{ width: 90 }}
                                />
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
                {/* End of Primer required */}
                {/* Caluking Required */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Caluking Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={ItemStyles.setPadding}>
                        <View style={ItemStyles.inputLabel}>
                            <Text style={ItemStyles.labelColor}>Price:</Text>
                            <Text style={ItemStyles.midLabelColor}>Quantity:</Text>
                            <Text style={ItemStyles.txtBold}>Total:</Text>
                        </View>
                        <View style={ItemStyles.flex}>
                            <View>
                                <TextInput
                                    style={ItemStyles.Inpute}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}
                                />
                                {/* <PerEachPlacehoder /> */}
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
                {/* End of Caluking Required */}
                {/* Repairs Required */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Repairs Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={ItemStyles.setPadding}>
                        <View style={ItemStyles.inputLabel}>
                            <Text style={ItemStyles.labelColor}>Price:</Text>
                            <Text style={ItemStyles.midLabelColor}>Quantity:</Text>
                            <Text style={ItemStyles.txtBold}>Total:</Text>
                        </View>
                        <View style={ItemStyles.flex}>
                            <View>
                                <TextInput
                                    style={ItemStyles.Inpute}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}
                                />
                                {/* <PerEachPlacehoder /> */}
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
                {/* End of  Repairs Required */}
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
                <View style={[ItemStyles.hrLine, { opacity: 0.4 }]}></View>
            </View>
            {/* End of  Tread  */}
            {/* Landing================ */}
            <View style={{ marginTop: 10 }}>
                <View style={ItemStyles.flex}>
                    <Text style={ItemStyles.collapstitle}>Landing</Text>
                    <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                </View>
                <View style={ItemStyles.setPadding}>
                    <Text style={ItemStyles.optionTitle}>Are you painting or staining?</Text>
                    <View style={[ItemStyles.flex, { paddingLeft: 5 }]}>
                        <View style={[ItemStyles.flex, ItemStyles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={{ color: 'black' }}>Painting</Text>
                        </View>
                        <View style={[ItemStyles.flex, ItemStyles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={{ color: 'black' }}>Staining</Text>
                        </View>
                        <Text >{''}</Text>
                        <Text >{''}</Text>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Landings</Text>
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
                                <PerEachPlacehoder />
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
                {/* Coats of Paint */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Coats of Paint</Text>
                    </View>
                    <View style={ItemStyles.setPadding}>
                        <View style={ItemStyles.inputLabel}>
                            <Text>{''}</Text>
                            <Text>{''}</Text>
                            <Text style={[ItemStyles.labelColor, { marginRight: 6 }]}>Coats:</Text>
                            <Text style={ItemStyles.txtBold}>Total:</Text>
                        </View>
                        <View style={ItemStyles.flex}>
                            <View>
                                <TextInput
                                    style={{ width: 90 }}
                                    editable={false}
                                />
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
                {/* End of coats of paint */}
                {/*  Primer required */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Primer Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={ItemStyles.setPadding}>
                        <View style={ItemStyles.inputLabel}>
                            <Text>{''}</Text>
                            <Text>{''}</Text>
                            <Text style={[ItemStyles.labelColor, { marginRight: 6 }]}>Coats:</Text>
                            <Text style={ItemStyles.txtBold}>Total:</Text>
                        </View>
                        <View style={ItemStyles.flex}>
                            <View>
                                <TextInput
                                    style={{ width: 90 }}
                                />
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
                {/* End of Primer required */}
                {/* Caluking Required */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Caluking Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={ItemStyles.setPadding}>
                        <View style={ItemStyles.inputLabel}>
                            <Text style={ItemStyles.labelColor}>Price:</Text>
                            <Text style={ItemStyles.midLabelColor}>Quantity:</Text>
                            <Text style={ItemStyles.txtBold}>Total:</Text>
                        </View>
                        <View style={ItemStyles.flex}>
                            <View>
                                <TextInput
                                    style={ItemStyles.Inpute}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}
                                />
                                {/* <PerEachPlacehoder /> */}
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
                {/* End of Caluking Required */}
                {/* Repairs Required */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Repairs Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={ItemStyles.setPadding}>
                        <View style={ItemStyles.inputLabel}>
                            <Text style={ItemStyles.labelColor}>Price:</Text>
                            <Text style={ItemStyles.midLabelColor}>Quantity:</Text>
                            <Text style={ItemStyles.txtBold}>Total:</Text>
                        </View>
                        <View style={ItemStyles.flex}>
                            <View>
                                <TextInput
                                    style={ItemStyles.Inpute}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}
                                />
                                {/* <PerEachPlacehoder /> */}
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
                {/* End of  Repairs Required */}
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
                <View style={[ItemStyles.hrLine, { opacity: 0.4 }]}></View>
            </View>
            {/* End of Landing  */}
            {/* Winders================ */}
            <View style={{ marginTop: 10 }}>
                <View>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.collapstitle}>Winders</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                </View>
                <View style={ItemStyles.setPadding}>
                    <Text style={ItemStyles.optionTitle}>Are you painting or staining?</Text>
                    <View style={[ItemStyles.flex, { paddingLeft: 5 }]}>
                        <View style={[ItemStyles.flex, ItemStyles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={{ color: 'black' }}>Painting</Text>
                        </View>
                        <View style={[ItemStyles.flex, ItemStyles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={{ color: 'black' }}>Staining</Text>
                        </View>
                        <Text >{''}</Text>
                        <Text >{''}</Text>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Winders Quantity</Text>
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
                                <PerEachPlacehoder />
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
                {/* Coats of Paint */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Coats of Paint</Text>
                    </View>
                    <View style={ItemStyles.setPadding}>
                        <View style={ItemStyles.inputLabel}>
                            <Text>{''}</Text>
                            <Text>{''}</Text>
                            <Text style={[ItemStyles.labelColor, { marginRight: 6 }]}>Coats:</Text>
                            <Text style={ItemStyles.txtBold}>Total:</Text>
                        </View>
                        <View style={ItemStyles.flex}>
                            <View>
                                <TextInput
                                    style={{ width: 90 }}
                                    editable={false}
                                />
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
                {/* End of coats of paint */}
                {/*  Primer required */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Primer Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={ItemStyles.setPadding}>
                        <View style={ItemStyles.inputLabel}>
                            <Text>{''}</Text>
                            <Text>{''}</Text>
                            <Text style={[ItemStyles.labelColor, { marginRight: 6 }]}>Coats:</Text>
                            <Text style={ItemStyles.txtBold}>Total:</Text>
                        </View>
                        <View style={ItemStyles.flex}>
                            <View>
                                <TextInput
                                    style={{ width: 90 }}
                                />
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
                {/* End of Primer required */}
                {/* Caluking Required */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Caluking Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={ItemStyles.setPadding}>
                        <View style={ItemStyles.inputLabel}>
                            <Text style={ItemStyles.labelColor}>Price:</Text>
                            <Text style={ItemStyles.midLabelColor}>Quantity:</Text>
                            <Text style={ItemStyles.txtBold}>Total:</Text>
                        </View>
                        <View style={ItemStyles.flex}>
                            <View>
                                <TextInput
                                    style={ItemStyles.Inpute}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}
                                />
                                {/* <PerEachPlacehoder /> */}
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
                {/* End of Caluking Required */}
                {/* Repairs Required */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Repairs Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={ItemStyles.setPadding}>
                        <View style={ItemStyles.inputLabel}>
                            <Text style={ItemStyles.labelColor}>Price:</Text>
                            <Text style={ItemStyles.midLabelColor}>Quantity:</Text>
                            <Text style={ItemStyles.txtBold}>Total:</Text>
                        </View>
                        <View style={ItemStyles.flex}>
                            <View>
                                <TextInput
                                    style={ItemStyles.Inpute}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}
                                />
                                {/* <PerEachPlacehoder /> */}
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
                {/* End of  Repairs Required */}
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
                <View style={[ItemStyles.hrLine, { opacity: 0.4 }]}></View>
            </View>
            {/* End of Winders  */}
            {/* Risers================ */}
            <View style={{ marginTop: 10 }}>
                <View style={ItemStyles.flex}>
                    <Text style={ItemStyles.collapstitle}>Risers</Text>
                    <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                </View>
                <View style={ItemStyles.setPadding}>
                    <Text style={ItemStyles.optionTitle}>Are you painting or staining?</Text>
                    <View style={[ItemStyles.flex, { paddingLeft: 5 }]}>
                        <View style={[ItemStyles.flex, ItemStyles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={{ color: 'black' }}>Painting</Text>
                        </View>
                        <View style={[ItemStyles.flex, ItemStyles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={{ color: 'black' }}>Staining</Text>
                        </View>
                        <Text >{''}</Text>
                        <Text >{''}</Text>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Riser Quantity</Text>
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
                                <PerEachPlacehoder />
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
                {/* Coats of Paint */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Coats of Paint</Text>
                    </View>
                    <View style={ItemStyles.setPadding}>
                        <View style={ItemStyles.inputLabel}>
                            <Text>{''}</Text>
                            <Text>{''}</Text>
                            <Text style={[ItemStyles.labelColor, { marginRight: 6 }]}>Coats:</Text>
                            <Text style={ItemStyles.txtBold}>Total:</Text>
                        </View>
                        <View style={ItemStyles.flex}>
                            <View>
                                <TextInput
                                    style={{ width: 90 }}
                                    editable={false}
                                />
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
                {/* End of coats of paint */}
                {/*  Primer required */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Primer Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={ItemStyles.setPadding}>
                        <View style={ItemStyles.inputLabel}>
                            <Text>{''}</Text>
                            <Text>{''}</Text>
                            <Text style={[ItemStyles.labelColor, { marginRight: 6 }]}>Coats:</Text>
                            <Text style={ItemStyles.txtBold}>Total:</Text>
                        </View>
                        <View style={ItemStyles.flex}>
                            <View>
                                <TextInput
                                    style={{ width: 90 }}
                                />
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
                {/* End of Primer required */}
                {/* Caluking Required */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Caluking Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={ItemStyles.setPadding}>
                        <View style={ItemStyles.inputLabel}>
                            <Text style={ItemStyles.labelColor}>Price:</Text>
                            <Text style={ItemStyles.midLabelColor}>Quantity:</Text>
                            <Text style={ItemStyles.txtBold}>Total:</Text>
                        </View>
                        <View style={ItemStyles.flex}>
                            <View>
                                <TextInput
                                    style={ItemStyles.Inpute}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}
                                />
                                {/* <PerEachPlacehoder /> */}
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
                {/* End of Caluking Required */}
                {/* Repairs Required */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Repairs Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={ItemStyles.setPadding}>
                        <View style={ItemStyles.inputLabel}>
                            <Text style={ItemStyles.labelColor}>Price:</Text>
                            <Text style={ItemStyles.midLabelColor}>Quantity:</Text>
                            <Text style={ItemStyles.txtBold}>Total:</Text>
                        </View>
                        <View style={ItemStyles.flex}>
                            <View>
                                <TextInput
                                    style={ItemStyles.Inpute}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}
                                />
                                {/* <PerEachPlacehoder /> */}
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
                {/* End of  Repairs Required */}
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
                <View style={[ItemStyles.hrLine, { opacity: 0.4 }]}></View>
            </View>
            {/* End of  Risers   */}
            {/* Handrail================ */}
            <View style={{ marginTop: 10 }}>
                <View style={ItemStyles.flex}>
                    <Text style={ItemStyles.collapstitle}>Handrail</Text>
                    <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                </View>
                <View style={ItemStyles.setPadding}>
                    <Text style={ItemStyles.optionTitle}>Are you painting or staining?</Text>
                    <View style={[ItemStyles.flex, { paddingLeft: 5 }]}>
                        <View style={[ItemStyles.flex, ItemStyles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={{ color: 'black' }}>Painting</Text>
                        </View>
                        <View style={[ItemStyles.flex, ItemStyles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={{ color: 'black' }}>Staining</Text>
                        </View>
                        <Text >{''}</Text>
                        <Text >{''}</Text>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Handrail Length</Text>
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
                                <PerEachPlacehoder />
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
                {/* Coats of Paint */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Coats of Paint</Text>
                    </View>
                    <View style={ItemStyles.setPadding}>
                        <View style={ItemStyles.inputLabel}>
                            <Text>{''}</Text>
                            <Text>{''}</Text>
                            <Text style={[ItemStyles.labelColor, { marginRight: 6 }]}>Coats:</Text>
                            <Text style={ItemStyles.txtBold}>Total:</Text>
                        </View>
                        <View style={ItemStyles.flex}>
                            <View>
                                <TextInput
                                    style={{ width: 90 }}
                                    editable={false}
                                />
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
                {/* End of coats of paint */}
                {/*  Primer required */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Primer Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={ItemStyles.setPadding}>
                        <View style={ItemStyles.inputLabel}>
                            <Text>{''}</Text>
                            <Text>{''}</Text>
                            <Text style={[ItemStyles.labelColor, { marginRight: 6 }]}>Coats:</Text>
                            <Text style={ItemStyles.txtBold}>Total:</Text>
                        </View>
                        <View style={ItemStyles.flex}>
                            <View>
                                <TextInput
                                    style={{ width: 90 }}
                                />
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
                {/* End of Primer required */}
                {/* Caluking Required */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Caluking Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={ItemStyles.setPadding}>
                        <View style={ItemStyles.inputLabel}>
                            <Text style={ItemStyles.labelColor}>Price:</Text>
                            <Text style={ItemStyles.midLabelColor}>Quantity:</Text>
                            <Text style={ItemStyles.txtBold}>Total:</Text>
                        </View>
                        <View style={ItemStyles.flex}>
                            <View>
                                <TextInput
                                    style={ItemStyles.Inpute}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}
                                />
                                {/* <PerEachPlacehoder /> */}
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
                {/* End of Caluking Required */}
                {/* Repairs Required */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Repairs Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={ItemStyles.setPadding}>
                        <View style={ItemStyles.inputLabel}>
                            <Text style={ItemStyles.labelColor}>Price:</Text>
                            <Text style={ItemStyles.midLabelColor}>Quantity:</Text>
                            <Text style={ItemStyles.txtBold}>Total:</Text>
                        </View>
                        <View style={ItemStyles.flex}>
                            <View>
                                <TextInput
                                    style={ItemStyles.Inpute}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}
                                />
                                {/* <PerEachPlacehoder /> */}
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
                {/* End of  Repairs Required */}
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
                <View style={[ItemStyles.hrLine, { opacity: 0.4 }]}></View>
            </View>
            {/* End of  Handrail =============================  */}
            {/* Spindles======================================= */}
            <View style={{ marginTop: 10 }}>
                <View style={ItemStyles.flex}>
                    <Text style={ItemStyles.collapstitle}>Spindles</Text>
                    <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                </View>
                <View style={ItemStyles.setPadding}>
                    <Text style={ItemStyles.optionTitle}>Are you painting or staining?</Text>
                    <View style={[ItemStyles.flex, { paddingLeft: 5 }]}>
                        <View style={[ItemStyles.flex, ItemStyles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={{ color: 'black' }}>Painting</Text>
                        </View>
                        <View style={[ItemStyles.flex, ItemStyles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={{ color: 'black' }}>Staining</Text>
                        </View>
                        <Text >{''}</Text>
                        <Text >{''}</Text>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Spindles Quantity</Text>
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
                                <PerEachPlacehoder />
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
                {/* Coats of Paint */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Coats of Paint</Text>
                    </View>
                    <View style={ItemStyles.setPadding}>
                        <View style={ItemStyles.inputLabel}>
                            <Text>{''}</Text>
                            <Text>{''}</Text>
                            <Text style={[ItemStyles.labelColor, { marginRight: 6 }]}>Coats:</Text>
                            <Text style={ItemStyles.txtBold}>Total:</Text>
                        </View>
                        <View style={ItemStyles.flex}>
                            <View>
                                <TextInput
                                    style={{ width: 90 }}
                                    editable={false}
                                />
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
                {/* End of coats of paint */}
                {/*  Primer required */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Primer Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={ItemStyles.setPadding}>
                        <View style={ItemStyles.inputLabel}>
                            <Text>{''}</Text>
                            <Text>{''}</Text>
                            <Text style={[ItemStyles.labelColor, { marginRight: 6 }]}>Coats:</Text>
                            <Text style={ItemStyles.txtBold}>Total:</Text>
                        </View>
                        <View style={ItemStyles.flex}>
                            <View>
                                <TextInput
                                    style={{ width: 90 }}
                                />
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
                {/* End of Primer required */}
                {/* Caluking Required */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Caluking Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={ItemStyles.setPadding}>
                        <View style={ItemStyles.inputLabel}>
                            <Text style={ItemStyles.labelColor}>Price:</Text>
                            <Text style={ItemStyles.midLabelColor}>Quantity:</Text>
                            <Text style={ItemStyles.txtBold}>Total:</Text>
                        </View>
                        <View style={ItemStyles.flex}>
                            <View>
                                <TextInput
                                    style={ItemStyles.Inpute}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}
                                />
                                {/* <PerEachPlacehoder /> */}
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
                {/* End of Caluking Required */}
                {/* Repairs Required */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Repairs Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={ItemStyles.setPadding}>
                        <View style={ItemStyles.inputLabel}>
                            <Text style={ItemStyles.labelColor}>Price:</Text>
                            <Text style={ItemStyles.midLabelColor}>Quantity:</Text>
                            <Text style={ItemStyles.txtBold}>Total:</Text>
                        </View>
                        <View style={ItemStyles.flex}>
                            <View>
                                <TextInput
                                    style={ItemStyles.Inpute}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}
                                />
                                {/* <PerEachPlacehoder /> */}
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
                {/* End of  Repairs Required */}
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
                <View style={[ItemStyles.hrLine, { opacity: 0.4 }]}></View>
            </View>
            {/* end of  Spindles  */}
            {/* Stringers================ */}
            <View style={{ marginTop: 10 }}>
                <View style={ItemStyles.flex}>
                    <Text style={ItemStyles.collapstitle}>Stringers</Text>
                    <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                </View>
                <View style={ItemStyles.setPadding}>
                    <Text style={ItemStyles.optionTitle}>Are you painting or staining?</Text>
                    <View style={[ItemStyles.flex, { paddingLeft: 5 }]}>
                        <View style={[ItemStyles.flex, ItemStyles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={{ color: 'black' }}>Painting</Text>
                        </View>
                        <View style={[ItemStyles.flex, ItemStyles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                            <Text style={{ color: 'black' }}>Staining</Text>
                        </View>
                        <Text >{''}</Text>
                        <Text >{''}</Text>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Stringers Quantity</Text>
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
                                <PerEachPlacehoder />
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
                {/* Coats of Paint */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Coats of Paint</Text>
                    </View>
                    <View style={ItemStyles.setPadding}>
                        <View style={ItemStyles.inputLabel}>
                            <Text>{''}</Text>
                            <Text>{''}</Text>
                            <Text style={[ItemStyles.labelColor, { marginRight: 6 }]}>Coats:</Text>
                            <Text style={ItemStyles.txtBold}>Total:</Text>
                        </View>
                        <View style={ItemStyles.flex}>
                            <View>
                                <TextInput
                                    style={{ width: 90 }}
                                    editable={false}
                                />
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
                {/* End of coats of paint */}
                {/*  Primer required */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Primer Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={ItemStyles.setPadding}>
                        <View style={ItemStyles.inputLabel}>
                            <Text>{''}</Text>
                            <Text>{''}</Text>
                            <Text style={[ItemStyles.labelColor, { marginRight: 6 }]}>Coats:</Text>
                            <Text style={ItemStyles.txtBold}>Total:</Text>
                        </View>
                        <View style={ItemStyles.flex}>
                            <View>
                                <TextInput
                                    style={{ width: 90 }}
                                />
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
                {/* End of Primer required */}
                {/* Caluking Required */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Caluking Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={ItemStyles.setPadding}>
                        <View style={ItemStyles.inputLabel}>
                            <Text style={ItemStyles.labelColor}>Price:</Text>
                            <Text style={ItemStyles.midLabelColor}>Quantity:</Text>
                            <Text style={ItemStyles.txtBold}>Total:</Text>
                        </View>
                        <View style={ItemStyles.flex}>
                            <View>
                                <TextInput
                                    style={ItemStyles.Inpute}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}
                                />
                                {/* <PerEachPlacehoder /> */}
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
                {/* End of Caluking Required */}
                {/* Repairs Required */}
                <View style={{ marginTop: 10 }}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Repairs Required?</Text>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                    </View>
                    <View style={ItemStyles.setPadding}>
                        <View style={ItemStyles.inputLabel}>
                            <Text style={ItemStyles.labelColor}>Price:</Text>
                            <Text style={ItemStyles.midLabelColor}>Quantity:</Text>
                            <Text style={ItemStyles.txtBold}>Total:</Text>
                        </View>
                        <View style={ItemStyles.flex}>
                            <View>
                                <TextInput
                                    style={ItemStyles.Inpute}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}
                                />
                                {/* <PerEachPlacehoder /> */}
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
                {/* End of  Repairs Required */}
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
                <View style={[ItemStyles.hrLine, { opacity: 0.4 }]}></View>
            </View>
            {/* end of Stringers  */}
            {/*=========Add Note============== */}
            <View style={[ItemStyles.bottomTotal, { marginTop: 15 }]}>
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
            <View style={{marginTop: 20}}></View>
        </View>
    );
};

export default Stairs;