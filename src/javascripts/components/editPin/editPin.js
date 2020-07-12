import pinData from '../../helpers/data/pinData';
// import boardData from '../../helpers/data/boardData';
import utils from '../../helpers/utils';

const showEditForm = (pinId) => {
  pinData.getPinbyId(pinId)
    .then((response) => {
      const pin = response.data;
      console.warn(utils.idToCategory); // this is not working
      const domString = `
      <h3>Edit Pin</h3>
      <form class="edit-pin" id=${pinId}>
  
    <div class="form-group">
    <label for="edit-pin-pic">Board</label>
    <input type="text" class="form-control" id="edit-pin-board" value=${utils.idToCategory}>
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
          <button type="submit" class="btn btn-secondary" id="cancel-edit">Cancel</button>
        </form>
      `;
      utils.printToDom('#edit-pin', domString);
    })
    .catch((err) => console.error('get single pin to edit failed', err));
};

export default { showEditForm };
