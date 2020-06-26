import firebase from 'firebase/app';
import 'firebase/auth';
import utils from '../../helpers/utils';

const logIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(googleProvider);
};

const loginButton = () => {
  const domString = '<button id="google-auth" type="button" class="btn btn-outline-secondary">Log in!</button>';
  utils.printToDom('#auth', domString);
  $('#google-auth').click(logIn);
};

export default { loginButton };
