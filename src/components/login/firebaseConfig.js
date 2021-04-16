import env from "react-dotenv";

const firebaseConfig = {
    apiKey: `${env.API_KEY}`,
    authDomain: `${env.AUTH_DOMAIN}`,
    projectId: `${env.PROJECT_ID}`,
    storageBucket: `${env.STORAGE_BUCKET}`,
    messagingSenderId: `${env.MESSAGING_SENDER_ID}`,
    appId:`${env.APP_ID}`
  };

  export default firebaseConfig;


  // apiKey: "AIzaSyDzOFCAs0JZ5HDx-eSSqrFAWpmbTABxf_k",
  //   authDomain: "creative-agency-51071.firebaseapp.com",
  //   projectId: "creative-agency-51071",
  //   storageBucket: "creative-agency-51071.appspot.com",
  //   messagingSenderId: "463477963929",
  //   appId: "1:463477963929:web:0423e89aeb58a673c44c08"