//importación de los modulos necesarios
import React, { useEffect, useState } from "react";
import { StyleSheet, Text,View, Image,FlatList,Dimensions} from "react-native"; 
import { Container, Input, Icon, Item, Button, Header, H1, Spinner, Card, CardItem, H3,Body} from "native-base";
import backend from '../../Api.js/Backend';
import getEnvVars from "../../../EnviromentApi";

const {apikey} = getEnvVars();

// Obtener los valores por destructuring
const { width, height } = Dimensions.get("window");

// Variable que contiene la pantalla (renderizar)
const Home = ({ navigation }) => {
  // Maneja el estado de las recetas
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(false);
  
  const getRecipe = async () => {
    try {
      // Consultar la API de recetas
      const response = await backend.get(
        `recipes/complexSearch?apiKey=cb4ed0fc1360404aa0033a4b54f1f29d`
      );

      setRecipe(response.data);
    } catch (error) {
      // Error al momento de ejecutar la petición a la API
      setError(true);
    }
};
 

// Hook de efecto
useEffect(() => {
  // Efecto secundario realizar la petición a la API
  getRecipe();
}, []);

if (!recipe) {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Spinner color="#7ae582" />
    </View>
  );
}

return (
  <Container>
    <Header >
     
    </Header>
    <Image
      source={require("../../../assets/KIWI.png")}
      style={styles.logoApp}
    />
    <H1 style={styles.title}>Recipe</H1>
    <FlatList
      data={recipe.results}
      keyExtractor={(item) => item.id.toString()}
      ListEmptyComponent={<Text>¡There is no Recipe at the moment!</Text>}
      renderItem={({ item }) => {
        return (
          <View>
              <Card>
                <CardItem>
                  <Body style={{ flex: 1, flexDirection: "row" }}>
                    <View>
                      <H3>{item.title}</H3>
                    </View>
                  </Body>
                </CardItem>
              </Card>
          </View>
        );
      }}
    />
  </Container>
);
};

// Estilos de nuestra pantalla
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    margin: 15,
  },
 
  logoApp: {
    width: width,
    height: height * 0.15,
    resizeMode: "contain",
  },
  header: {
    backgroundColor: "#00a5cf",
  },

  title: {
    color: "#00a5cf",
    textAlign: "center",
    marginBottom: 5,
  },
  
});

export default Home;