import React from 'react';
import { Text, View,TextInput} from 'react-native';
import {IconButton,Checkbox} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ItemStyles } from '../ItemStyles';
import { FtPlacehoder,PerSqftPlacehoder } from '../Placeholder';



const WallInput = (props) => {
    const [checked, setChecked] = React.useState(false);
    return (
        <View>
            {/* Use this area dimensions */}
            <View style={{ marginTop: 10 }}>
                <Text style={ItemStyles.optionTitle}>Use this area dimensions</Text>
                <View style={[ItemStyles.flex, { paddingLeft: 5 }]}>
                    <View style={ItemStyles.flex}>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        <Text>Yes</Text>
                    </View>
                    <View style={[ItemStyles.flex, { marginRight: 100 }]}>
                        <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        <Text>No</Text>
                    </View>
                </View>
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
                        <Text style={ItemStyles.inputLabel}>Height:</Text>
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
                <View style={ItemStyles.l_w_h_container}>
                    <View>
                        <View style={ItemStyles.l_w_h_box}>
                            <Text style={[ItemStyles.inputLabel, { fontWeight: 'bold' }]}>Total Area:</Text>
                            <TextInput
                                style={ItemStyles.L_W_H_Input}
                                name={'length'}
                                placeholder={'0'}
                                placeholderTextColor="black"
                            />
                            <FtPlacehoder />
                        </View>
                    </View>
                </View>
            </View>
            {/* Include Paint Cost */}
            <View style={{ marginTop: 5 }}>
                <View style={ItemStyles.flex}>
                    <Text style={ItemStyles.title}>Include Paint Cost?</Text>
                    <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                </View>
                <View style={ItemStyles.includeCost}>
                    <View style={ItemStyles.selectBox}>
                        <Text style={ItemStyles.select}>Select Paint Finish </Text>
                        <MaterialIcons {...props} name="keyboard-arrow-down" size={28} onPress={() => console.log('pressed')} />
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
                        <MaterialIcons {...props} name="keyboard-arrow-down" size={28} onPress={() => console.log('pressed')} />
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
            {/* Coats of Paint===================================== */}
            <View style={{ marginTop: 15 }}>
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
            {/* Primer Required======================== */}
            <View style={{ marginTop: 15 }}>
                <View style={ItemStyles.flex}>
                    <Text style={ItemStyles.title}>Primer Required</Text>
                </View>
                <View style={[ItemStyles.setPadding, { marginTop: 2 }]}>
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
            {/* Any Repairs Required======================== */}
            <View style={{ marginTop: 15, marginBottom: 10 }}>
                <View style={ItemStyles.flex}>
                    <Text style={ItemStyles.title}>Any Repairs Required</Text>
                </View>
                <View style={[ItemStyles.setPadding, { marginTop: 2 }]}>
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
    );
}

export default WallInput;


