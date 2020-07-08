import pinData from '../../helpers/data/pinData';
import pinMaker from '../pinMaker/pinMaker';
import utils from '../../helpers/utils';

const removePinEvent = (e) => {
  const pinId = e.target.closest('.dlt').id;
  $(e.target.closest('.card')).hide();
  pinData.deletePin(pinId)
    .then((response) => {
      console.warn(response);
      // reprintBoards(pinId); // eslint-disable-line
    })
    .catch((err) => console.error('could not delete pin', err));
};

// const reprintBoards = (boardId) => {
//   pinData.getPinsByBoardId(boardId)
//     .then((pins) => {
//       let domString = `
//     <div class="card ${boardId}">
//     `;

//       pins.forEach((pin) => {
//         domString += pinMaker.pinMaker(pin);
//       });

//       domString += '</div>';

//       utils.printToDom('#pins', domString);
//     })
//     .catch((err) => console.error('could not reprint pins', err));
// };

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
      <div class="card ${boardId}">
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
