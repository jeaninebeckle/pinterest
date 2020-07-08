import boardData from '../../helpers/data/boardData';
import boardMaker from '../boardMaker/boardMaker';
import utils from '../../helpers/utils';
import pinList from '../pinList/pinList';
import navbar from '../navbar/navbar'; //eslint-disable-line

const removeBoardEvent = (e) => {
  const boardId = e.target.closest('.boardCard').id;
  boardData.deleteBoard(boardId)
    .then((response) => {
      console.warn(response);

      $('#boards').removeClass('hide');
      buildBoards(); //eslint-disable-line
      $('#pins').addClass('hide');
    })
    .catch((err) => console.error('could not delete board', err));
};

const buildBoards = () => {
  boardData.getBoards()
    .then((boards) => {
      let domString = `
      <div class="card">
      `;

      boards.forEach((board) => {
        domString += boardMaker.boardMaker(board);
      });

      domString += '</div>';

      utils.printToDom('#showBoards', domString);

      $('body').on('click', '.boardCard', pinList.showPins);
      $('body').on('click', '#board-delete', removeBoardEvent);
    })
    .catch((err) => console.error('it broke', err));
};

export default { buildBoards };
