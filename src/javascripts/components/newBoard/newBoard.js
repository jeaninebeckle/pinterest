import utils from '../../helpers/utils';

const showForm = () => {
  const domString = `
  <form class="text-center">
  <div class="form-group">
    <label for="board-category">Category:</label>
    <input type="text" class="form-control" id="board-category" placeholder="DIY Projects">
  </div>
  <button type="submit" class="btn btn-outline-secondary" id="board-creator">Create!</button>
  <button type="submit" class="btn btn-outline-danger" id="board-creator">Cancel</button>
  </form>
  `;
  utils.printToDom('#new-board', domString);
};

export default { showForm };
