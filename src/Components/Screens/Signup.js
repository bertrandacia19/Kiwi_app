import React from "react"
import {Dimensions, StyleSheet, View, TouchableOpacity} from "react-native"
import { Button, Input, Text } from "react-native-elements"
import Logo from "../Shared/Logo"
import SignupForm from "../forms/SignupForm";

const { width, height } = Dimensions.get("screen");

const signup = ({navigation}) =>{
    return (
        <View>
            <Logo />
            <SignupForm navigation={navigation} />
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