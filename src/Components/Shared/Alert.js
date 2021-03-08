import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";


const Alert = ({ type, title }) => {
      
        let background = "";
        let icon = "";
      
        if (type === "error") {
          background = "#fdecea";
          icon = "times-circle";
        } else if (type === "warning") {
          background = "#fff4e5";
          icon = "warning";
        } else if (type === "info") {
          background = "#e8f4fd";
          icon = "info-circle";
        } else if (type === "success") {
          background = "#edf7ed";
          icon = "check-circle";
        }
      

        return (
            <View style={[styles.container, { backgroundColor: background }]}>
              <Icon name={icon} style={styles.icon} />
              <Text>{title}</Text>
            </View>
        );
        
};

const styles = StyleSheet.create({
    container: {
      margin: 10,
      padding: 10,
      flexDirection: "row",
    },
    icon: {
      marginRight: 10,
    },
});

export default Alert; 





