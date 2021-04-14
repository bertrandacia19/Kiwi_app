<a href=""><img src="assets/KIWI.png" alt="título " width="200" ></a>


# Kiwi_app
Es una aplicación que te permite conectar a la API de 
spoonacular recipe and food API y mostrar información
sobre recetas ,realiza busqueda y ver la información 
general sobre una receta.



## Tecnologias utilizadas
- React Native 
- Expo
- React Navigation
- Native Base
- Axios
- Firebase

## Intrucciones para la instalación
Clona este repositorio. Necesitas tener instalado node, npm y expo-cli de manera global en tu computadora.

###### **Spoonacular recipe and food DB API key:**
Para que la aplicación pueda funcionar, requieres de una API key válida para poder comunicarte con la API de Spoonacular recipe and food  DB. 

Una vez que obtengas tu API key, debes crear el archivo enviroment.js en la raíz del directorio y configurarlo de la siguiente manera:

import Constant from "expo-constants";

const ENV = {
  dev: {
    apiKey: "cb4ed0fc1360404aa0033a4b54f1f29d",
    apiUrl:"https://api.spoonacular.com/",
    apiImageUrl: "https://spoonacular.com/recipeImages",

 
  },
  production: {
    apiKey: "cb4ed0fc1360404aa0033a4b54f1f29d",
    apiUrl:"https://api.spoonacular.com/",
    apiImageUrl: "https://spoonacular.com/recipeImages",

    
  },
};
const getEnvVarsApi = (env = Constant.manifest.releaseChannel) => {
  if (_DEV_) return ENV.dev;
  else if (env === "production" || env === "default") return ENV.production;
};
export default getEnvVarsApi;


## Documentación
https://docs.google.com/document/d/11jI37CNhx1v0Grn3E-3NnpQGxtFKrbBP9iWI6XmhXcU/edit?usp=drivesdk

## Contribuidores
- Rocio Lopez
- Nicole Aguilar
- Dacia Bertrand

## Instalación
npm install

## Iniciar Expo Metro 
expo start
