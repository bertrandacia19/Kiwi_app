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
import Icon from "react-native-vector-icons/FontAwesome";


const Signin= ({ navigation, route }) => {
   
    return (
  
        <View style = {styles.container}>
            <Logo />
           
            <SigninForm navigation={navigation}/>
            <TouchableOpacity
                style={styles.create}
                onPress={() => navigation.navigate('SignUp')}
            >
                   <Button icon={<Icon name="google-plus" size={15} color="white" />} iconLeft buttonStyle={styles.buttonGoogle}  />
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
