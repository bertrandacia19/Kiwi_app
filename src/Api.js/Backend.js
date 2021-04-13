import axios from "axios";
import getEnvVars from "../../EnviromentApi";

const {ApiKey}=getEnvVars();

//crear una instancia de conexion

const instance = axios.create({
baseURL:apiUrl,


})

export default instance;