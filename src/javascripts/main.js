import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

// import auth from './components/auth/auth';
// import navbar from './components/navbar/navbar';

import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
};

init();
