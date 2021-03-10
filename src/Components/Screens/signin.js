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



const Signin= ({ navigation, route }) => {
    const { userCreated } = route.params;
    return (
  
        <View style = {styles.container}>
            <Logo />
            {userCreated ?(
             <Alert type ="success" title = "User Created! You can now sign in!" />
            ): null}
            <SigninForm navigation={navigation}/>
            <TouchableOpacity
                style={styles.forgot}
                onPress={() => navigation.navigate('Recover')}
            >
                <Text>Forgot your password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.create}
                onPress={() => navigation.navigate('SignUp')}
            >
                <Text>Dont have an account? <Text style={styles.register}>Register Now</Text></Text>
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

export default Signin;
