import firebase from 'firebase/compat/app';
export default {
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
        async login({dispath, commit}, {email, password}) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
            } catch(e) {

            }
        }
    }
}
