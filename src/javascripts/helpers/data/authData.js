import firebase from 'firebase/app';
import 'firebase/auth';

import boardList from '../../components/boardList/boardList';

const authDiv = $('#auth');
const logoutButton = $('#navbar-logout-button');
const homeDiv = $('#homePage');
const allBoards = $('#nav-home');
const boardsDiv = $('#boards');
const newBoardDiv = $('#new-board');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      homeDiv.addClass('hide');
      logoutButton.removeClass('hide');
      allBoards.removeClass('hide');
      boardsDiv.removeClass('hide');
      newBoardDiv.removeClass('hide');

      boardList.buildBoards();
      boardList.boardEvents();
    } else {
      authDiv.removeClass('hide');
      logoutButton.addClass('hide');
      boardsDiv.addClass('hide');
      homeDiv.removeClass('hide');
      allBoards.addClass('hide');
      newBoardDiv.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
