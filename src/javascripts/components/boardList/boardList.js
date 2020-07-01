import boardData from '../../helpers/data/boardData';
import boardMaker from '../boardMaker/boardMaker';
import utils from '../../helpers/utils';
import pinList from '../pinList/pinList';

const removeBoardEvent = (e) => {
  console.warn(e.target.closest('.card').id);
  const boardId = e.target.closest('.card').id;
  boardData.deleteBoard(boardId)
    .then((response) => {
      console.warn(response);

      buildBoards(); //eslint-disable-line
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

      utils.printToDom('#boards', domString);

      $('body').on('click', '.boardCard', pinList.showPins);
      $('#board-delete').on('click', removeBoardEvent);
    })
    .catch((err) => console.error('it broke', err));
};

export default { buildBoards };
