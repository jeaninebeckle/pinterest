import pinData from '../../helpers/data/pinData';
import pinMaker from '../pinMaker/pinMaker';
import utils from '../../helpers/utils';

const showPins = (e) => {
  const boardId = e.target.closest('.card').id;
  console.warn(boardId);
  pinData.getPinsByBoardId(boardId)
    .then((pins) => {
      console.warn('Get pins worked');
      let domString = `
      <div class="card">
      `;

      pins.forEach((pin) => {
        domString += pinMaker.pinMaker(pin);
      });

      domString += '</div>';

      utils.printToDom('#pins', domString);
    })
    .catch((err) => console.error('get pins not working', err));
};

export default { showPins };
