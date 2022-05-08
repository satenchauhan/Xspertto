import React from 'react';
import { Text, View,TextInput, Image,TouchableOpacity} from 'react-native';
import {Title,IconButton,Checkbox } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ItemStyles } from '../ItemStyles';
import { FtPlacehoder,PerSqftPlacehoder, SqftPlacehoder } from '../Placeholder';


const Wallpaper=(props)=>{
    const [checked, setChecked] = React.useState(false);
    return (
        <View>
        {/* Choose all that apply */}
            <View style={{marginTop:10}}> 
                    <Text style={ItemStyles.optionTitle}>Choose all that apply</Text>
                    <View style={[ItemStyles.flex,{paddingLeft:5}]}>
                        <View style={[ItemStyles.flex,ItemStyles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => {setChecked(!checked); }}/>
                            <Text style={{color:'black'}}>Install</Text>
                        </View>
                        <View style={[ItemStyles.flex,ItemStyles.rectangleBox]}>
                            <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => {setChecked(!checked); }}/>
                            <Text style={{color:'black'}}>Remove</Text>
                        </View>
                        <Text >{''}</Text>
                        <Text >{''}</Text> 
                    </View>
                </View>
{/* Install===================================== */}
                <View style={{marginTop:15}}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Install</Text>
                        {/* <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => {setChecked(!checked); }}/> */}
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
                    <View style={ItemStyles.setPadding}>
                        <View style={ItemStyles.inputLabel}>
                            <Text style={ItemStyles.labelColor}>Price:</Text>
                            <Text style={ItemStyles.midLabelColor}>Area:</Text>  
                            <Text style={ItemStyles.txtBold}>Total:</Text> 
                        </View>
                        <View style={[ItemStyles.flex,{marginTop:4}]}>
                            <View>
                                <TextInput 
                                    style={ItemStyles.priceInpt}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}    
                                />
                                <PerSqftPlacehoder />
                            </View>
                            <View>
                                <TextInput 
                                    style={ItemStyles.priceInpt}
                                    name={'price'}
                                    placeholder={"0"}
                                    placeholderTextColor={'black'}    
                                />
                                <SqftPlacehoder />
                            </View>
                            <View>
                                <TextInput 
                                    style={[ItemStyles.totalInpt,{width:85}]}
                                    name={'total'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={"black"}   
                                />
                            </View>
                        </View>
                    </View>
                </View>
{/* Repairs Required ======================== */}
                <View style={{marginTop:20}}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Repairs Required </Text>
                        {/* <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => {setChecked(!checked); }}/> */}
                    </View>
                    <View style={[ItemStyles.setPadding,{marginTop:2}]}>
                        <View style={ItemStyles.inputLabel}>
                            <Text style={ItemStyles.labelColor}>Price:</Text>
                            <Text style={ItemStyles.midLabelColor}>Quantity:</Text>  
                            <Text style={ItemStyles.txtBold}>Total:</Text>    
                        </View>
                        <View style={ItemStyles.flex}>
                            <View style={{flexDirection:'row'}}>
                                <TextInput 
                                    style={ItemStyles.OnlyInpt}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}    
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
                        <View style={{marginTop:15}}>
                            <View>
                                <Text style={[ItemStyles.label,{textAlign:'right'}]}>Total Price : &nbsp;</Text>
                                <View style={ItemStyles.bottomFlex}>
                                    <TextInput 
                                        style={ItemStyles.lastTotalInpt}
                                        name={'price'}
                                        placeholder={"$0.00"}
                                        placeholderTextColor={'black'}    
                                    />
                                    {/* <LastTotalPlacehoder />   */}
                                </View>
                            </View> 
                        </View>
                        <Text style={{marginTop:10, textAlign:'center'}}>Note: Wallpaper cost not included in estimate</Text>
                    </View>
                    <View style={[ItemStyles.hrLine,{opacity:0.1}]}></View>
                </View>
                {/* Remove===================================== */}
                <View style={{marginTop:15}}>
                    <View style={ItemStyles.flex}>
                        <Text style={ItemStyles.title}>Remove</Text>
                        {/* <Checkbox color={'#2196F3'} uncheckedColor={'#2196F3'} status={checked ? 'checked' : 'unchecked'} onPress={() => {setChecked(!checked); }}/> */}
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
                    <View style={[ItemStyles.setPadding,{marginTop:2}]}>
                        <View style={ItemStyles.inputLabel}>
                        <Text style={ItemStyles.labelColor}>Price:</Text>
                            <Text style={ItemStyles.midLabelColor}>Area:</Text>  
                            <Text style={ItemStyles.txtBold}>Total Price:</Text>   
                        </View>
                        <View style={[ItemStyles.flex,{marginTop:4}]}>
                            <View>
                                <TextInput 
                                    style={ItemStyles.priceInpt}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}    
                                />
                                <PerSqftPlacehoder />
                            </View>
                            <View>
                                <TextInput 
                                    style={ItemStyles.priceInpt}
                                    name={'price'}
                                    placeholder={"0"}
                                    placeholderTextColor={'black'}    
                                />
                                <SqftPlacehoder />
                            </View>
                            <View>
                                <TextInput 
                                    style={[ItemStyles.totalInpt,{width:85}]}
                                    name={'total'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={"black"}   
                                />
                            </View>
                        </View>
                    </View>
                </View>
{/*================Total============== */}
                <View style={{marginTop:15}}>
                    <View style={ItemStyles.bottomTotal}>
                        <View>
                            <Text style={ItemStyles.label}>Total Price:</Text>
                            <View>
                                <TextInput 
                                    style={[ItemStyles.lastTotalInpt,{width:100}]}
                                    name={'price'}
                                    placeholder={"$0.00"}
                                    placeholderTextColor={'black'}    
                                />
                            </View>
                        </View> 
                    </View>
                    <View style={[ItemStyles.hrLine,{marginTop:20}]}></View>
                </View>
{/*================SubTotal============== */}
                <View style={ItemStyles.bottomTotal}>
                    <View style={{marginTop:10}}>
                        <Text style={ItemStyles.label}>Sub Total Price:</Text>
                        <View>
                            <TextInput 
                                style={[ItemStyles.lastTotalInpt,{width:110}]}
                                name={'price'}
                                placeholder={"$0.00"}
                                placeholderTextColor={'black'}    
                            />
                        </View>
                    </View> 
                </View>
            <View style={{marginTop:20}}></View>
        </View>
    );
}

export default  Wallpaper;


