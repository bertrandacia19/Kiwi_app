import React, {useState} from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity} from 'react-native';
import {Input, Button} from "react-native-elements";
import UserForm from "../forms/UsersForm";
import theme from "../../theme";
import Users from '../Shared/Users';
import {firebase} from '../../firebase';
import PopUpMessage from '../Shared/PopUpMessage'

const { width, height } = Dimensions.get("screen");

const SingnOut = ({ navigation}) => {
    const [visible, setVisible] = useState(false);
    const logoTitle ="Goodbye"
    const successMessage = "You have just logged out from KIWI"
    const hintMessage = "I hope you enjoyed the experience!"
    
    const handleLogOut = () => {
        firebase
          .auth()
          .signOut()
          .then(() => {
            setVisible(!visible)
          })
          .catch((error) => {
            setError(error.message);
          });
      };
    return (
        <View style={styles.container}>
            <Users title="User" />
            <UserForm navigation={navigation} />
            <TouchableOpacity
                style={styles.logout}
                onPress={handleLogOut}
                
            >
                <Button  buttonStyle={styles.button} title="Sign Out" onPress={handleLogOut} />
            </TouchableOpacity>
            <PopUpMessage style={styles.logOutme}
                navigation={navigation} 
                navigationScreen="Signin" 
                visibleState={visible} 
                logoTitle={logoTitle} 
                successMessage={successMessage} 
                hintMessage={hintMessage} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
       
        padding:0,
    },
    logout:{
       width:width*0.8,
       alignSelf:'center',
       padding:8,
      
    },
    logOutme:{
        backgroundColor:'#5fbc85',
       
     },

    logOutText:{
        alignSelf:'center',
        fontSize:18,
    },
    button: {
        width: 380,
        backgroundColor:'#527e05',
        margin: 5,
        borderRadius: 40,
        alignSelf: "center",

      },
});

export default SingnOut ;