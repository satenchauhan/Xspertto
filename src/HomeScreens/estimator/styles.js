import React from 'react';
import { StyleSheet } from 'react-native';

const EstStyles = StyleSheet.create({
      safeViewArea: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ecf0f1',
      },
      container: {
            // flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:20,
            margin:10,
            // height: '100%',
            // zIndex: -10,
            // elevation: 10
      },
      bottomSec:{
          flexDirection:'column',
          alignItems:'flex-end',
          justifyContent:'flex-end',
          marginTop:85
      },
      clk:{
          fontSize:15,
          position:'absolute',
          bottom: 65,
          transform:[{ rotate: "-45deg" }],
          
      },
      arrow:{
          marginTop:30,
          width:60, 
          resizeMode:'contain', 
          transform:[{ rotate: "15deg" }]
      },
      estText:{
          color:'#576574',
          fontWeight:'bold', 
          margin:8
      }
    
});


export default EstStyles;