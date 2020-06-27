import boardData from '../../helpers/data/boardData';
import boardMaker from '../boardMaker/boardMaker';
import utils from '../../helpers/utils';

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
    })
    .catch((err) => console.error('it broke', err));
};

export default { buildBoards };
