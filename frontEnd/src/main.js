import { createApp } from 'vue'
import {Vuelidate} from "vuelidate";
import App from './App.vue'
import router from './router'
import store from './store'

// firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyC_t4W3mH2-i5iOZP3tBgonF34kep6Mfxk",
    authDomain: "todotask-dac2d.firebaseapp.com",
    projectId: "todotask-dac2d",
    storageBucket: "todotask-dac2d.appspot.com",
    messagingSenderId: "91558362801",
    appId: "1:91558362801:web:5c7cc2f70bba5c51d7ec90",
    measurementId: "G-70G9TMGFP8"
});

let checkApp
firebase.auth().onAuthStateChanged(() => {
    // console.log(checkApp)
    if(!checkApp) {
        checkApp = createApp(App)
            .use(store)
            .use(router)
            .mount('#app')
    }
})
