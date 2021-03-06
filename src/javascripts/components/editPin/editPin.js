import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';
import boardData from '../../helpers/data/boardData';

const showEditForm = (pinId) => {
  boardData.getBoards()
    .then((boards) => {
      let domString = `
      <h3>Edit Pin</h3>
      <form class="edit-pin" id=${pinId}>
      <h6>Change Board</h6>
      <select id="chooseBoard" class="select">`;

      boards.forEach((board) => {
        const boardId = $('#chooseBoard').data('board');
        console.warn(board.id, boardId);
        if (board.id === boardId) {
          domString += `
          <option data-board-id=${board.id} id="edit-pin-board" value="${board.category}" selected>${board.category}</option>`;
        } else {
          domString += `
          <option data-board-id=${board.id} id="edit-pin-board" value="${board.category}">${board.category}</option>`;
        }
      });

      domString += `
      </select>
      `;
      pinData.getPinbyId(pinId)
        .then((response) => {
          const pin = response.data;
          domString += `
          <div class="form-group">
            <label for="edit-pin-title">Title</label>
            <input type="text" class="form-control" id="edit-pin-title" value="${pin.title}">
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
    });
};

export default { showEditForm };
