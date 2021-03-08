import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import {firebase} from "../../firebase";
import {validate} from "email-validator";

const SignupForm = (navigation) => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [fullnameError, setFullnameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);

    //VERIFICAR QUE LOS DATOS INGRESADOS SEAN CORRECTOS
    const handlerVerify = (input) => {
        if (input === "fullname"){
            //verificar nombre del ususario
            if(!fullname)
                setFullnameError(true)
            else
                setFullnameError(false);
        } else if (input === "email"){
            //verificar el correo electronico
            if(!email) setEmailError(true);
            else if (!validate(email)) setEmailError(true);
                else setEmailError(false)
        }else if (input === "password"){
            //verificar la contraseña
            if (!password) setPasswordError(true);
            else if (password.length < 6) setPasswordError(true);
            else setPasswordError(false);
        }   else if (input === "confirmPassword"){
            //verificar la confirmacion de la contraseña
            if (!confirmPassword) setConfirmPasswordError(true);
            else if (confirmPassword !== password) setConfirmPasswordError(true)
            else setConfirmPasswordError(false);
        }
    };
    const handleSignup = () => {
        //promesa
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
            navigation.navigate("Signin", {userCreated: true});
        })
        /* {console.log(response); */
        .catch((error) => console.log(error));
    };
    return (
        <View>
            <Input placeholder="full name"
                leftIcon={<Icon name="user-circle" />}
                value={fullname}
                onChangeText={setFullname}
                onBlur={() => {
                    handlerVerify("fullname");
                }}
                errorMessage={
                    fullnameError? "Debes de Ingresar Tu Nombre Completo" : ""
                }
                />
            <Input placeholder="Email"
                leftIcon={<Icon name="envelope" />}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                onBlur={() => {
                    handlerVerify("email");
                }}
                errorMessage={
                    emailError? "Debes de Ingresar Tu Correo" : ""
                }
                />
            <Input placeholder="Password"
                leftIcon={<Icon name="lock" />}
                value={password}
                onChangeText={setPassword} 
                secureTextEntry//ocultar contraseña
                autoCapitalize="none"
                onBlur={() => {
                    handlerVerify("password");
                }}
                errorMessage={
                    passwordError? "Debes de Ingresar Una Contraseña Con 6 Caracteres" : ""
                }
                />
            <Input placeholder="confirm Password"
                leftIcon={<Icon name="lock" />}
                value={confirmPassword}
                onChangeText={setConfirmPassword} 
                secureTextEntry//ocultar contraseña
                autoCapitalize="none"
                onBlur={() => {
                    handlerVerify("confirmPassword");
                }}
                errorMessage={
                    confirmPasswordError? "Contraseña No Coincide" : ""
                }
                />
            <Button title="Create account" onPress ={handleSignup} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SignupForm;