import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';

const showEditForm = (pinId) => {
  pinData.getPinbyId(pinId)
    .then((response) => {
      const pin = response.data;
      const domString = `
      <h3>Edit Pin</h3>
      <form class="edit-pin" id=${pinId}>
      <div class="form-group">
            <label for="edit-pin-board">Board dropdown goes here</label>
            <input type="text" class="form-control" id="edit-pin-board" value=${pin.boardId}>
          </div>
        <div class="form-group">
            <label for="edit-pin-pic">Image URL:</label>
            <input type="text" class="form-control" id="edit-pin-pic" value=${pin.imgUrl}>
          </div>
          <div class="form-group">
            <label for="edit-pin-link">Web URL:</label>
            <input type="text" class="form-control" id="edit-pin-link" value=${pin.webUrl}>
          </div>
        </div>
          <button type="submit" class="btn btn-secondary" id="pin-editor">Update</button>
        </form>
      `;
      utils.printToDom('#edit-pin', domString);
    })
    .catch((err) => console.error('get single pin to edit failed', err));
};

export default { showEditForm };
