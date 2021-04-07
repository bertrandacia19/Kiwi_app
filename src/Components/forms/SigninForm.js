import React, { useContext, useState } from "react";
       
import {StyleSheet, View, Text,TouchableOpacity} from "react-native";
import {Input, Button} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { validate } from "email-validator";
//import { firebase } from "../../firebase";
import Alert from "../Shared/Alert";
import { context as AuthContext } from "../../Provider/AuthContext";

const SigninForm =  ({navigation}) => {
  //implemetacion del context para funcionalidades de autenticacion
  const {state, signin} = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
   setError(state.errorMessage);
  }, [state.errorMessage]);

  useEffect(() => {
    console.log(state.user);
  }, [state.user]);



 // Verifica que se ingresan los datos del email y el password
   // Verifica que se ingresan los datos del email y el password
   const handleVerify = (input) => {
    if (input === "email") {
      if (!email) setEmailError(true);
      else if (!validate(email)) setEmailError(true);
      else setEmailError(false);
    } else if (input === "password") {
      if (!password) setPasswordError(true);
      else setPasswordError(false);
    }
  };

  const handleSignin = () => {

    //iniciar sesion implementando el contexto de autenticacion
    signin(email,password);

  

    
  };
  return (
    <View>
      {error ? <Alert title={error} type="error" /> : null}
      <Input
        placeholder="Email"
        leftIcon={<Icon name="envelope" />}
        value={email}
        onChangeText={setEmail}
        onBlur={() => {
          handleVerify("email");
        }}
        errorMessage={
          emailError
            ? "Por favor ingresa tu cuenta de correo electrónico"
            : null
        }
      />
      <Input
        placeholder="Password"
        leftIcon={<Icon name="lock" />}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        onBlur={() => {
          handleVerify("password");
        }}
        errorMessage={passwordError ? "Por favor ingresa tu contraseña" : null}
      />
       <TouchableOpacity
                
                onPress={() => navigation.navigate('Recover')}
            >
                <Text style={styles.forgot}>Forgot your password?</Text>
            </TouchableOpacity>
      <Button  buttonStyle={styles.button}  title="Signin" onPress={handleSignin} />
    </View>
  );
};



const styles = StyleSheet.create({
  button: {
    width: 300,
    backgroundColor:'#527e05',
    margin: 5,
    borderRadius: 40,
    alignSelf: "center",
  },
 forgot:{
textAlign:'right',
 },

});

export default SigninForm;