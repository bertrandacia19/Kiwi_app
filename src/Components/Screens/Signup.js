import React from "react"
import {Dimensions, StyleSheet, View, TouchableOpacity} from "react-native"
import { Button, Input, Text } from "react-native-elements"
import Logo from "../Shared/Logo"

const signup = ({navigation}) =>{
    return (
        <View>
            <Logo />
            <Input placeholder= "full name" />
            <Input placeholder= "Email" />
            <Input placeholder= "Password" />
            <Input placeholder= "confirm Password" />
            <Button title="Create account" />
            <TouchableOpacity
                onPress={() => {
                navigation.goBack();
             }}
            >
             <Text>Already got on account? Sign in</Text>
            </TouchableOpacity>

        </View>
    );

};

const styles = StyleSheet.create({});

export default signup;