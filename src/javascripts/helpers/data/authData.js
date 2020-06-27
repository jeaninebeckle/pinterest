import firebase from 'firebase/app';
import 'firebase/auth';

import boardList from '../../components/boardList/boardList';

const authDiv = $('#auth');
const logoutButton = $('#navbar-logout-button');
const homeDiv = $('#homePage');
const boardsDiv = $('#boards');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      homeDiv.addClass('hide');
      logoutButton.removeClass('hide');
      boardsDiv.removeClass('hide');

      boardList.buildBoards();
    } else {
      authDiv.removeClass('hide');
      logoutButton.addClass('hide');
      boardsDiv.addClass('hide');
      homeDiv.removeClass('hide');
    }
  });
};

export default { checkLoginStatus };
