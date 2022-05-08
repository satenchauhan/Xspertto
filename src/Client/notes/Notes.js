import React,{useContext, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Trash from 'react-native-vector-icons/MaterialCommunityIcons';
import { ImageModal } from '../../components/image/image-modal';
import { SuperContext } from '../../context/ContextProvider';
import LinkNoteModal from './LinkNoteModal';

const Notes = () => {
    const {setLinkModal, linkKey} = useContext(SuperContext);
    const {setCamereModal} = useContext(SuperContext)

    const showCameraModal = () => {
         setCamereModal(true);
    }

    useEffect(() => {
        setLinkModal(false)
    }, [])
    return (
        <View style={{flex:1, padding:5}}>
             <StatusBar backgroundColor='#23BF7E' barStyle="light-content" />
            <View style={{flex:1, padding:10}}>
                <Text>
                    This is where the text part or “commet” will appear. 
                    There will be no limitations for text and the box will dynamicall resize to account for more text. 
                    Picture area will only appear if there are pictures added.
                </Text>
            </View>
            <View> 
                <Icon name="link" color="#3851DD" size={18}> 
                    {'  '}<Text style={Styles.LinkTxt}>Linked To: {linkKey==="" ? 'Quotes' : linkKey}</Text>
                </Icon>
            </View>
            <View style={Styles.divider}></View>
            <TouchableOpacity style={[Styles.addBtn]}
                onPress={showCameraModal}
            >
                <Text style={Styles.btnLabel}>Add Attachment</Text>
            </TouchableOpacity>
            <Text style={Styles.attachTxt}>Attachments</Text>
            <View style={Styles.fileBox}>
                <View style={Styles.file}>
                    <Image source={require('../../assets/images/pdf.png')} size={50} />
                    <TouchableOpacity style={Styles.delIconBtn}
                        onPress={() => console.log('Deleted')}
                    >
                        <Trash name="trash-can-outline" color="#E00000" size={15} />
                    </TouchableOpacity> 
                </View>
                <View style={Styles.file}>
                    <Image source={require('../../assets/images/client.png')} size={50} />
                    <TouchableOpacity style={Styles.delIconBtn}
                        onPress={() => console.log('Deleted')}
                    >
                        <Trash name="trash-can-outline" color="#E00000" size={15} />
                    </TouchableOpacity>
                </View>
                <View style={Styles.file}>
                    <Image source={require('../../assets/images/client.png')} size={50} />
                    <TouchableOpacity style={Styles.delIconBtn}
                        onPress={() => console.log('Deleted')}
                    >
                        <Trash name="trash-can-outline" color="#E00000" size={15} />
                    </TouchableOpacity>
                </View>
                <View style={Styles.file}>
                    <Image source={require('../../assets/images/client.png')} size={50} />
                    <TouchableOpacity style={Styles.delIconBtn}
                        onPress={() => console.log('Deleted')}
                    >
                        <Trash name="trash-can-outline" color="#E00000" size={15} />
                    </TouchableOpacity>
                </View>
                <View style={Styles.file}>
                    <Image source={require('../../assets/images/ppt.png')} size={50} />
                    <TouchableOpacity style={Styles.delIconBtn}
                        onPress={() => console.log('Deleted')}
                    >
                        <Trash name="trash-can-outline" color="#E00000" size={15} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={Styles.divider}></View>
            <View style={Styles.NoteBottomBox}>
                <TouchableOpacity style={[Styles.addBtn]}
                        onPress={() => setLinkModal(true)}
                >
                    <Icon name="link" color="#3851DD" size={15}> 
                       {' '}<Text style={Styles.labelTxt}>Link to Note</Text>
                    </Icon>
                </TouchableOpacity>
                <TouchableOpacity style={[Styles.delBtn]}
                        onPress={() => console.log('Amson')}
                >
                    <Trash name="trash-can-outline" color="#E00000" size={18}> 
                    {' '}<Text style={[Styles.labelTxt,{color:'#E00000'}]}>Delete Note</Text>
                    </Trash>
                </TouchableOpacity>
                
            </View>
            <View style={{flex:0.1, position:'absolute'}}>
               <LinkNoteModal />
               <ImageModal />
            </View>
        </View>
    );

}

export default Notes;

const Styles = StyleSheet.create({
    LinkTxt:{
        color:'#484848', 
        fontFamily:'Roboto-Bold', 
        fontSize:16
    },
    divider:{
        borderWidth:1, 
        borderColor:'#DEDEDE',
        marginTop:5, 
        marginBottom:12
    },
    addBtn:{
        backgroundColor:'#FFFFFF',
        width:163, 
        height:33, 
        alignItems:'center', 
        justifyContent:'center', 
        alignSelf:'flex-end',
        borderRadius:4,
        borderWidth:1.5, 
        borderColor:'#3851DD'  
    }, 
    btnLabel:{
        fontFamily:'Roboto-Bold', 
        fontSize:12,
        fontStyle:'normal',
        color:'#3851DD'
    },
    attachTxt:{
        fontFamily:'Roboto-Black', 
        fontWeight:'500', 
        fontSize:12, 
        color:'#2D2D2D',
        paddingVertical:8
    },
    fileBox:{
        // flex:0.2,
        flexDirection:'row', 
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        paddingBottom:8
    },
    file:{
        // flex:1,
        alignSelf:'flex-end',
        margin:10,
        height:60
    },
    delIconBtn:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFFFFF', 
        borderColor:'rgba(0,0,0,0.2)',
        width:20, 
        height:20, 
        borderRadius:10,
        position:'absolute',
        top:-5,
        right:-4,
        elevation:5
    },
    NoteBottomBox:{
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between', 
        paddingHorizontal:5, 
        paddingTop:25,
        marginBottom:10
    },
    labelTxt:{
        fontFamily:'Roboto-Bold', 
        fontSize:16,
        fontStyle:'normal',
        color:'#3851DD'
    },
    delBtn:{
        backgroundColor:'#FFFFFF',
        width:163, 
        height:33, 
        alignItems:'center', 
        justifyContent:'center', 
        alignSelf:'flex-end',
        borderRadius:4,
        borderWidth:1.5, 
        borderColor:'#E00000'  
    }, 
    
});

