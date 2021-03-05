import React from "react"
import {Dimensions, StyleSheet, View} from "react-native"
import {Image} from "react-native-elements"

const {width, height } = Dimensions.get("screen");

const Logo = () => {
    return(
        <View>
            <Image
            style= {StyleSheet.Logo}
            source={{ url: require("")}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: width * 0.4,
        height: height * 0.2,
        resizeMode: "contain"
    },
});

export default Logo;