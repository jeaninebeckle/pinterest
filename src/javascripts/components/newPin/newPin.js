import utils from '../../helpers/utils';

const showPinForm = () => {
  const domString = `
  <form>
  <div class="form-group">
    <label for="title">Title</label>
    <input type="text" class="form-control" id="title">
  </div>
  <div class="form-group">
    <label for="img-url">Image URL</label>
    <input type="text" class="form-control" id="img-url">
  </div>
  <div class="form-group">
    <label for="web-url">Web URL</label>
    <input type="text" class="form-control" id="web-url">
  </div>
  <button type="submit" class="btn btn-outline-secondary" id="pin-creator">Create!</button>
  </form>
  `;
  utils.printToDom('#new-pin', domString);
};

export default { showPinForm };
