//importación de los modulos necesarios
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Image, Dimensions} from "react-native"; 
import { Container, Input, Icon, Item, Button, Header, H1, View, Spinner, Card, CardItem, H3,Body} from "native-base";
import { Feather } from '@expo/vector-icons';
import backend from '../../Api/Backend';
import getEnvVars from "../../EnviromentApi";
import { FlatList } from "react-native-gesture-handler";

const { apikey} = getEnvVars();
//obtener los valores 
const {width, height} = Dimensions.get("window");


//pantalla que contiene la variables de rnderizar
const Home = ({ navigation }) =>{

    //maneja el estado de las peliculas
    const[Recipes,setRecete]=useState(null);
    const[error,setError]=useState(false);
   
    //promesas y asincronia
    
    const getRecipeInfo=async() =>{
        try{
            //consultar la API de  recetas
            const response =await backend.get( 'https://api.spoonacular.com/recipes/complexSearch?apiKey=cb4ed0fc1360404aa0033a4b54f1f29d');
            setRecete(response.data);
            //console.log(response.data)
        }catch(error){
            //error al moment
           setError(true);
        }
    }


    //Hook de efecto
    useEffect(() => {
        getRecipeInfo();
      }, []);




      if (!Recipes) {
        return(
            <View style={{flex : 1, justifyContent: "center"}}>
               <Spinner color = "pink" />
            </View>  
        )
      }



    return (

            <Container>
             <Header >
               </Header>
               <Image
                source = {require("../../assets/KIWI.png")}
                style={styles.Zone}
               />
                <H1 style={{marginTop: 30 }}>Recipes</H1>
                <FlatList
                data = {Recipes}
                 keyExtractor = {(item) => item.id}
                 ListEmptyComponent = {<Text>!No contiene niguna info</Text>}
                 renderItem = {({item })=>{
                   return(
                     <View>
                        <Card>
                          <CardItem>
                            <Body>
                             <H3>{item.title} </H3>
                            </Body>
                          </CardItem>
                        </Card>
                     </View>
    )
                }}
                />
            </Container>
    );
};

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