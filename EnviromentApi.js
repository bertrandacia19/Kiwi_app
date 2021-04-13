import Constant from "expo-constants";

const ENV = {
  dev: {
    apiKey: "cb4ed0fc1360404aa0033a4b54f1f29d"
   
  },
  production: {
    apiKey: "cb4ed0fc1360404aa0033a4b54f1f29d"
  },
};
const getEnvVarsApi = (env = Constant.manifest.releaseChannel) => {
  if (__DEV__) return ENV.dev;
  else if (env === "production" || env === "default") return ENV.production;
};
export default getEnvVarsApi;