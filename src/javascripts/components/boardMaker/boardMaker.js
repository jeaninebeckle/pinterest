import './boardMaker.scss';

const boardMaker = (board) => {
  const domString = `
  <div class="row">
    <div class="col-sm-6">
      <div class="card boardCard delete-board" id="${board.id}">
        <div class="card-body">
          <h5 class="card-title">${board.category}</h5>
          <div><i type="button" id="board-delete" class="far fa-times-circle"></i></div>
        </div>
      </div>
    </div>
  </div>
  `;

  return domString;
};

export default { boardMaker };
