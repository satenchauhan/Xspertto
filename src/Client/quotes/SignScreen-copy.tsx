import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';

import SignatureScreen from 'react-native-signature-canvas';

const SignScreen = () => {
  const [signature, setSignature] = useState(null);

  const handleOK = (signature) => {
    console.log(signature);
    onOK(signature);
  };

  const handleClear = () => {
    ref.current.clearSignature();
  };

  const handleConfirm = () => {
    console.log("end");
    ref.current.readSignature();
  };
  return (
    <>
      <View style={styles.preview}>
        {signature && (
          <Image style={styles.previewImage} source={{uri: signature}} />
        )}
      </View>
      <SignatureScreen
        onOK={setSignature}
        onEmpty={() => console.log('onEmpty')}
        onClear={() => setSignature(null)}
        autoClear={true}
        imageType={'image/png+xml'}
      />
   </>
  );
};

export default SignScreen;
const styles = StyleSheet.create({
  preview: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
    
  },
  previewImage: {
    width: '100%',
    height: '50%',
    resizeMode: 'contain',
  },
});

