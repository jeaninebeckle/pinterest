import pinData from '../../helpers/data/pinData';
import pinMaker from '../pinMaker/pinMaker';
import utils from '../../helpers/utils';

const removePinEvent = (e) => {
  const pinId = e.target.closest('.card').id;
  pinData.deletePin(pinId)
    .then((response) => {
      console.warn(response);

      rebuildSingleBoard(); //eslint-disable-line
    })
    .catch((err) => console.error('could not delete pin', err));
};

const rebuildSingleBoard = (e) => {
  const boardId = e.target.id;
  pinData.getPinsByBoardId()
    .then((response) => {
      const myPins = response.data;
      let domString = `
      <div class="card">
      `;

      myPins.forEach((pin) => {
        if (pin.boardId === boardId) {
          domString += pinMaker.pinMaker(pin);
        }
      });

      domString += '</div>';
      utils.printToDom('#pins', domString);
    })
    .catch((err) => console.error('could not reprint single board', err));
};

const changeClass = () => {
  $('#boards').addClass('hide');
  $('#pins').removeClass('hide');
};

const showPins = (e) => {
  changeClass();
  const boardId = e.target.closest('.card').id;
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
      $('body').on('click', '.delete-pin', removePinEvent);
    })
    .catch((err) => console.error('get pins not working', err));
};

export default { showPins };
