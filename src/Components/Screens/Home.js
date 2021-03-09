import React from "react";
import {View,Text,StyleSheet,SafeAreaView,TouchableOpacity} from "react-native";
import {FontAwesome5} from "@expo/vector-icons";

const Home = ({}) =>{


        return(
            <View style ={styles.container}> 
            <SafeAreaView  style={{flex:1 ,alignSelf:'flex-start'}}>
            <TouchableOpacity 
            style={{alignItems:"flex-end", margin:16}}
            onPress={this.props.navigation.openDrawe}
            >
                 <FontAwesome5 name ="bars" size={24} color="#161924"/>
            </TouchableOpacity>
            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            </View>
                <Text style={style.text}>{this.props.name}Home</Text>
            </SafeAreaView>
            </View>

        );
    }




const style = StyleSheet.create({

container:{
    flex:1,
    backgroundColor:"#fff"
},

text:{
    color:"#ffff",
    fontSize:20,
    fontWeight:"500"
}

})
export default Home;