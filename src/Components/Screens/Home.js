import React from 'react';
import { StyleSheet, Text, ScrollView, Dimensions,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Input, Icon, Item, Button, Header, H1, View, Spinner, Card, CardItem, H3,Body} from "native-base";
import { Feather } from '@expo/vector-icons';

const {width, height} = Dimensions.get("window");

const Home = () => {
    return (
        <Container>
        <Header searchBar style={styles.header} androidStatusBarColor="#004e64">
              <Item>
              
               <Input inlineLabel placeholder = "Buscar"  />
                  <Button icon transparent >
                    <Feather name="search" size={29} color="#FFB347" />
                  </Button>
              </Item>
         </Header>
         <Image
          source = {require("../../../assets/KIWI.png")} 
          style={styles.Zone}
         />
          
           
          <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.bubble}>
                <Text style={styles.text1}>Pollo Frito</Text>
                <Text style={styles.text1}>Ingredientes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bubble}>
                <Text style={styles.text1}>Pollo Frito</Text>
                <Text style={styles.text1}>Ingredientes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bubble}>
                <Text style={styles.text1}>Pollo Frito</Text>
                <Text style={styles.text1}>Ingredientes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bubble}>
                <Text style={styles.text1}>Pollo Frito</Text>
                <Text style={styles.text1}>Ingredientes</Text>
            </TouchableOpacity>
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        width: width,
      
        paddingTop: 41,
        
    },
    bubble1:{
        width: width ,
        backgroundColor:'#70DB42',
        marginTop: 0,
        height: height * 0.20,
        alignSelf: 'center',
        borderRadius: 15,

    },
    bubble:{
        width: width * 0.9,
        backgroundColor:'#d9f473',
        margin: 10,
        padding:10,
        alignSelf: 'center',
        height: height * 0.20,
        borderRadius: 10,

    },
    text1:{
        margin:5,
        fontSize: 30,
    },
   
    Zone: {
        width: width ,
        height: height * 0.10,
        resizeMode: "cover",
     },
         header: {
      backgroundColor: "#FF8E18",
    },
});

export default Home;