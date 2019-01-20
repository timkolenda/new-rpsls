import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCr6cQFXFwCYl7-ClBTIAK6H6MhS6XNkC8",
    authDomain: "new-rpsls.firebaseapp.com",
    databaseURL: "https://new-rpsls.firebaseio.com",
    projectId: "new-rpsls",
    storageBucket: "new-rpsls.appspot.com",
    messagingSenderId: "783810961248"
};
firebase.initializeApp(config);

export default firebase;