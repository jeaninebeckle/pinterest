import boardData from '../../helpers/data/boardData';
import boardMaker from '../boardMaker/boardMaker';
import utils from '../../helpers/utils';
import pinList from '../pinList/pinList';
import createBoard from '../newBoard/newBoard';
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

const addBoardEvent = (e) => {
  e.preventDefault();
  const newBoard = {
    category: $('#board-category').val(),
  };
  console.warn(newBoard);
  boardData.addBoard(newBoard)
    .then(() => {
      buildBoards(); // eslint-disable-line
      utils.printToDom('#new-board', '');
    })
    .catch((err) => console.error('could not add board', err));
};

const buildBoards = () => {
  boardData.getBoards()
    .then((boards) => {
      let domString = `
      <button class="btn btn-outline-secondary" id="show-add-board">Add New Board</button>
      <div class="row">
      `;

      boards.forEach((board) => {
        domString += boardMaker.boardMaker(board);
      });

      domString += `</div>
      `;

      utils.printToDom('#showBoards', domString);
    })
    .catch((err) => console.error('it broke', err));
};

const boardEvents = () => {
  $('body').on('click', '.boardCard', pinList.showPins);
  $('body').on('click', '#board-delete', removeBoardEvent);
  $('body').on('click', '#board-creator', addBoardEvent);
  $('body').on('click', '#show-add-board', createBoard.showForm);
};

export default { buildBoards, boardEvents };
