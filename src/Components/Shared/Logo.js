import React from "react"
import {Dimensions, StyleSheet, View} from "react-native"
import {Image} from "react-native-elements"

const {width, height } = Dimensions.get("screen");

const Logo = () => {
    return(
        <View style={styles.container}>
            <Image
            style={styles.logo}
            source={{ uri: require("../../../assets/KIWI.png") }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
    },
    logo: {
        width: width * 0.5,
        height: height * 0.5, 
        resizeMode: "contain",
    },
});

export default Logo;