import constant from "expo-constants"

const ENV = {
    dev: {
        apiKey: "AIzaSyCVOgzm24HJDGPqAPgKrFWI_UGkCxDvfSQ",
        authDomain: "quickrkiwi-app.firebaseapp.com",
        projectId: "quickrkiwi-app",
        storageBucket: "quickrkiwi-app.appspot.com",
        messagingSenderId: "436201155677",
        appId: "1:436201155677:web:7c73e3817bf0587fda71b4"

    },
    production:{
        apiKey: "AIzaSyCVOgzm24HJDGPqAPgKrFWI_UGkCxDvfSQ",
        authDomain: "quickrkiwi-app.firebaseapp.com",
        projectId: "quickrkiwi-app",
        storageBucket: "quickrkiwi-app.appspot.com",
        messagingSenderId: "436201155677",
        appId: "1:436201155677:web:7c73e3817bf0587fda71b4"

    },

};

const getEnvVars = (env = constant.manifest.releaseChannel) =>{
    if(_DEV_) return ENV.dev;
    else if(env == "production" || env == "default") return ENV.production;
};

export default getEnvVars;