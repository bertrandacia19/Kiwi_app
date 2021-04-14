import React from 'react';
import { StyleSheet, Text, ScrollView, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Input, Icon, Item, Button, Header, H1, View, Spinner, Card, CardItem, H3, Body } from "native-base";
import { Feather } from '@expo/vector-icons';

const { width, height } = Dimensions.get("window");

const Home = () => {
  return (
    <Container>
      <Header searchBar style={styles.header} androidStatusBarColor="#004e64">
        <Item>
          <Input inlineLabel placeholder="Buscar" />
          <Button icon transparent >
            <Feather name="search" size={29} color="#FFB347" />
          </Button>
        </Item>
      </Header>
      <Image
        source={require("../../../assets/KIWI.png")}
        style={styles.Zone}
      />

      <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.bubble}>
          <Text style={styles.text1}>Instant Pot® Shrimp and Broccoli</Text>
          <Text style={styles.text1}>Shrimp and broccoli stir-fry doesn't get any faster or easier than this.
           Zero minutes is not a typo. 
           The pot will take 10 minutes to come to pressure and that is all the cook time the shrimp needs.
            Serve over rice if desired</Text>
          <Image
            source={require("../../../assets/Shrimp-and-broccoli2.jpg")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bubble}>
          <Text style={styles.text1}>Crab apple and chilli glazed beef sirloin</Text>
          <Text style={styles.text1}>This glazed beef sirloin recipe is so easy. 
          It takes just 30 minutes to prepare, plus a quick blast in the oven.
           An easy, delicious Easter roast.</Text>
          <Image
            source={require("../../../assets/Crab_Apple.jpg")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bubble}>
          <Text style={styles.text1}>Vegan spaghetti bolognese</Text>
          <Text style={styles.text1}>This speedy vegan version of spaghetti bolognese is made by blitzing and browning quality plant-based sausages. 
          The use of soy and balsamic brings bold flavour in minutes, 
          so this bolognese sauce is finished by the time the pasta has cooked.</Text>
          <Image
            source={require("../../../assets/spagheitti-bolognese.jpg")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bubble}>
          <Text style={styles.text1}>Cuban Sandwich (Cubano)</Text>
          <Text style={styles.text1}>Here's how to make the BEST Traditional Cuban Sandwich, a.k.a. 
          the Cubano, at home! Layers of mojo-marinated pork roast, 
          ham, cheese, and pickles make this sandwich outstanding. Serve toasted grilled bread sandwich hot or cold!</Text>
          <Image
            source={require("../../../assets/cuban.webp")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bubble}>
          <Text style={styles.text1}>Chicken Tacos With Pineapple Salsa</Text>
          <Text style={styles.text1}>Best Healthy tacos of the world, with ingredients found at our sweet home.</Text>
          <Image
            source={require("../../../assets/tacos.webp")}
            style={styles.image}
          />
        </TouchableOpacity>

      </ScrollView>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: "#2ECFCA",
    paddingTop: 10,

  },

  bubble: {
    width: width * 0.9,
    backgroundColor: "#F9F3DE",
    margin: 5,
    padding: 10,
    alignSelf: 'center',
    height: height * 0.50,
    borderRadius: 9,

  },
  text1: {
    margin: 5,
    fontSize: 12,
  },

  Zone: {
    width: width,
    height: height * 0.10,
    margin: 10,
    padding: 10,
    resizeMode: "cover",
    
  },
  image: {
    width: width * 0.7,
    height: height * 0.3,
    alignSelf: "center",
    borderRadius: 9,
    /* resizeMode: "cover", */
  },
  header: {
    backgroundColor: "#FF8E18",
  },
});

export default Home;