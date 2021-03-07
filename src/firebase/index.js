import firebase from "firebase/app";
/* import * as firebase from "firebase"; */
import "@firebase/auth";
import "@firebase/firestore";
import getEnVars from "../../Enviroment";

const {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId 
} = getEnVars();



//valores de la configuracion de firebase
const firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
};

//inicializar firebase si no existe una instancia ejecutandose
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export { firebase };