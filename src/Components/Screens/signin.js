import React, { useContext,useState}  from "react";
import { 
         StyleSheet, View, Text, TouchableOpacity,} from "react-native";
import { Input, Button} from "react-native-elements";
import Logo from "../Shared/Logo";
import SigninForm from "../forms/SigninForm";
import theme from "../../theme";
import Alert from "../Shared/Alert"
import Icon from "react-native-vector-icons/FontAwesome";
import {Context as AuthContext} from '../../providers/AuthContext';
import getEnvVars from '../../../Enviroment';
import * as Google from "expo-google-app-auth";


const Signin= ({ navigation, route }) => {
    const { state, signInWithGoogle, clearErrorMessage } = useContext(AuthContext);
    const {androidClientId} = getEnvVars();
    /*const {iosClientId} = getEnvVars();*/
    const [error, setError] = useState("");
      
    const signInWithGoogleAsync = async() => {
      try {
        const result = await Google.logInAsync({
          androidClientId: androidClientId,
         /* iosClientId: iosClientId,*/
          scopes: ['profile', 'email'],
        });
        
        if (result.type === 'success') {
          signInWithGoogle(result)
          return result.accessToken;
        } else {
          return { cancelled: true };
        }
      } catch (e) {
        return { error: true };
      }
    }
    return (
  
        <View style = {styles.container}>
            <Logo />
           
            <SigninForm navigation={navigation}/>
            <TouchableOpacity
                style={styles.create}
                onPress={() => navigation.navigate('SignUp')}
            >
               <Button icon={<Icon name="google-plus" size={15} color="white" />} onPress={() => signInWithGoogleAsync()} iconLeft buttonStyle={styles.buttonGoogle} title=" Sign In with Google" />


    {/*<Button icon={<Icon name="google-plus" size={15} color="white" />} onPress={() => signInWithGoogleAsync()} iconLeft buttonStyle={styles.buttonGoogle}  />*/}           
         <Text>New to KIWI ? <Text style={styles.register}>Create an Account.</Text></Text>
            </TouchableOpacity>
         
        </View>
 

        

         
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 10,
      
    },
 
    
  
    forgotPassword: {
        textAlign: "right",
    },
    register:{
        color:"#FF8E18",
    },
    buttonGoogle: {
        width: 220,
        backgroundColor:'#527e05',
        margin: 5,
        borderRadius: 50,
        alignSelf: "center",
      }
});

export default Signin;
