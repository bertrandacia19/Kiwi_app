import React from "react";
import { Dimensions,
         StyleSheet, 
         View, 
         Text, 
         TouchableOpacity
        } from "react-native";
import { Input, Button} from "react-native-elements";
/* import Icon from "react-native-vector-icons/FontAwesome"; */
import Logo from "../Shared/Logo";
import SigninForm from "../forms/SigninForm";
import theme from "../../theme";
import Alert from "../Shared/Alert"

const {width, height } = Dimensions.get("screen");

const Login = ({ navigation, route  }) => {
    const {userCreated} = route.params;

    return (
        <View style = {styles.container}>
            <Logo />
            {!userCreated ?(
             <Alert type ="success" title = "User Created! You can now sign in!" />
            ): null}
            <SigninForm/>
            {/* <Input placeholder="Email" leftIcon={<Icon name ="envelope"/>}/>
            <Input placeholder = "Password" leftIcon={<Icon name = "lock"/>}/> */}
            <Text style = {styles.forgotPassword}>Forgot your Password?</Text>
            {/* <Button title = "SignIn" /> */}
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
             <Text>Don't have an account? Sign up</Text>
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
});

export default Login;
