import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import Logo from '../Shared/Logo';
import { firebase } from "../../firebase";
const {width, height} = Dimensions.get("screen");
import theme from '../../theme/index';
import { validate } from "email-validator";
import Alert from '../Shared/Alert';
import { Input } from "react-native-elements";
import PopUpMessage from '../Shared/PopUpMessage';

const Recover = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [error, setError] = useState("");
    const [visible, setVisible] = useState(false);
    const logoTitle ="Success"
    const successMessage = ""
    const hintMessage = ""
    
    
    
    
    
    

    const handleVerify = (input) => {
        if (input === "email") {
          if (!email) setEmailError(true);
          else if (!validate(email)) setEmailError(true);
          else setEmailError(false);
        }
    };
    const handleRecovery = () =>{
        firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(()=>{
            navigation.navigate("Signin");
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    return (
        <View style={styles.container}>
            <Logo title="Recover Password"/>
            {error ? <Alert title={error} type="error" /> : null}
            <Input
                style={styles.input}
                containerStyle={{paddingHorizontal:width*0.10}}
                placeholder="Email"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                onBlur={() => {
                    handleVerify("email");
                }}
                errorMessage={
                    emailError
                    ? "Please verify your accounts email address"
                    : null
                }
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleRecovery}
            >
                <Text style={styles.text}>Verify</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.goBack}
                onPress={() => navigation.navigate('Signin')}
            >
                <Text style={styles.goBackText}>Go back</Text>
            </TouchableOpacity>
            {/* Success Message of the password recovery email */}
            <PopUpMessage 
                navigation={navigation} 
                navigationScreen="Signin" 
                visibleState={visible} 
                logoTitle={logoTitle} 
                successMessage={successMessage} 
                hintMessage={hintMessage} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',

    },
    button:{
        alignItems:'center',
        width: width * 0.8,
        padding: 8,
        marginTop:height*0,
        backgroundColor:theme.colors.blue,
    },
    text:{
        fontSize:20,
        fontWeight: "bold",
    },
    input:{
        fontSize:18,
       color:"#231F20",
        paddingTop:height*0.1
    },
    goBack:{
        alignSelf:'center',
        padding:8,
    },
    goBackText:{
        alignSelf:'center',
        color:"#231F20",
    },
});

export default Recover;