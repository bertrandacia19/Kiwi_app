import { Feather } from '@expo/vector-icons';
import {  Dimensions, StyleSheet, ScrollView, Image, Text, } from 'react-native';
const { width, height } = Dimensions.get("window");
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Header, Item, Input, Button } from "native-base";
import React from 'react';

const Busqueda = ( {navigation}  ) => {
  return (
    <Container>
      <Image
        source={require("../../../assets/KIWI.png")}
        style={styles.Zone}
      />

      <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.bubble }>
          
          <Text style={styles.text1}>Ingredientes</Text>
          <Text style={styles.text1}>¼ cup reduced-sodium soy sauce
              2 tablespoons oyster sauce
              1 tablespoon rice vinegar
              2 teaspoons sesame oil
              1 teaspoon brown sugar
              1 teaspoon Sriracha sauce
              1 teaspoon minced garlic
              1 pound raw peeled and deveined shrimp
              2 tablespoons cornstarch
              2 tablespoons cold water
          </Text>
          <Text style={styles.text1}>DirectionsInstructions Checklist
            Step 1
            Whisk soy sauce, oyster sauce, rice vinegar, sesame oil, brown sugar, Sriracha sauce, and garlic in a small bowl until smooth.

            Step 2
            Pour sauce into a multi-functional pressure cooker (such as Instant Pot®). Stir in shrimp. Close and lock the lid. Select high pressure according to manufacturer's instructions; set timer for 0 minutes. Allow 10 minutes for pressure to build.

            Step 3
            Meanwhile, whisk cornstarch and cold water together until smooth.
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: "#6AB72A",
    paddingTop: 10,

  },

  bubble: {
    width: width * 0.9,
    backgroundColor: "#F9F3DE",
    margin: 5,
    padding: 10,
    alignSelf: 'center',
    height: height * 0.70,
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

export default Busqueda;