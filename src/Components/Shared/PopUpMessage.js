import React from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import { Overlay } from 'react-native-elements'
import {Input, Button} from "react-native-elements";
import theme from '../../theme';
import Logo from './Logo';


const { width, height } = Dimensions.get("screen");

const PopUpMessage = ({navigation,visibleState, successMessage, hintMessage, logoTitle, navigationScreen}) => {
  return (
    <View>
        <Overlay isVisible={visibleState} overlayStyle={styles.overlay} >
            <View>
                <Logo title={logoTitle}/>
                <Text style={styles.successMessage}>{successMessage}</Text>
                <Text style={styles.hintMessage}>{hintMessage}</Text>
                <TouchableOpacity
                    style={styles.overlayButton}
                    onPress={() => {
                        navigation.navigate(navigationScreen)
                    }}
                >
                    <Button  buttonStyle={styles.button} title="Sign Out"  />
                </TouchableOpacity>
            </View>
        </Overlay> 
    </View>
  );
};

const styles = StyleSheet.create({
    successMessage:{
        fontWeight:'bold',
        fontSize: 20,
        color:'#0a0a0a',
    },
    hintMessage:{
        fontWeight:'bold',
        paddingTop:15,
        fontSize: 20,
        color:'#0a0a0a',
    },
    overlay:{
        width:width*0.8,
        height:height*0.7,
        backgroundColor:'#FFff',
        paddingLeft:width*0.08,
        paddingRight:width*0.08,
        justifyContent:'center',
        alignItems:'center'
    },
    overlayButton:{
        alignItems:'center',
        justifyContent:'center',
        width: width * 0.6,
        height: width *0.13,
        padding: 7,
        marginTop:height*0.03,
        color:'#0a0a0a',
    },
    overlayButtonText:{
        fontSize:30,
    },
    button: {
        width: 200,
        backgroundColor:'#527e05',
        margin: 8,
        borderRadius: 40,
        alignSelf: "center",
    
        paddingRight:width*0.08,
        justifyContent:'center',
        alignItems:'center'
      },
});

export default PopUpMessage;