import boardData from '../../helpers/data/boardData';
import boardMaker from '../boardMaker/boardMaker';
import utils from '../../helpers/utils';
import pinList from '../pinList/pinList';

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

      $('body').on('click', '#boardButton', pinList.showPins);
    })
    .catch((err) => console.error('it broke', err));
};

export default { buildBoards };
