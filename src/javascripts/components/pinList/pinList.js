import pinData from '../../helpers/data/pinData';
import pinMaker from '../pinMaker/pinMaker';
import utils from '../../helpers/utils';
import createPin from '../newPin/newPin';

const removePinEvent = (e) => {
  const pinId = e.target.closest('.dlt').id;
  $(e.target.closest('.card')).hide();
  pinData.deletePin(pinId)
    .then((response) => {
      console.warn(response);
    })
    .catch((err) => console.error('could not delete pin', err));
};

const addPinEvent = (e) => {
  e.preventDefault();

  const newPin = {
    boardId: document.getElementById('boardTest').dataset.boardId,
    webUrl: $('#web-url').val(),
    imgUrl: $('#img-url').val(),
  };
  console.warn(newPin);

  pinData.addPin(newPin)
    .then(() => {
      const boardId = e.target.closest('.card').id;
      showPins(boardId); // eslint-disable-line
      utils.printToDom('#new-pin', '');
    })
    .catch((err) => console.error('could not add pin', err));
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
      let domString = `
      <button class="btn btn-outline-secondary" id="show-add-pin">Add New Pin</button>
      <div id="boardTest" class="card" data-board-id=${boardId}>
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

const pinEvents = () => {
  $('body').on('click', '#pin-creator', addPinEvent);
  $('body').on('click', '#show-add-pin', createPin.showPinForm);
};

export default { showPins, pinEvents };
