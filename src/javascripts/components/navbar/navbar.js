import firebase from 'firebase/app';
import 'firebase/auth';
import buildBoards from '../boardList/boardList';

const logoutEvent = () => {
  $('#navbar-logout-button').click((e) => {
    e.preventDefault();
    firebase.auth().signOut();
  });
};

const resetPage = () => {
  $('#nav-home').click((e) => {
    e.preventDefault();
    console.warn('you clicked home');
    $('#boards').removeClass('hide');
    buildBoards.buildBoards();
    $('#pins').addClass('hide');
  });
};

export default { logoutEvent, resetPage };
