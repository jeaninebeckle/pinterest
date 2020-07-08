import './boardMaker.scss';

const boardMaker = (board) => {
  const domString = `
    <div class="col-3">
      <div class="card boardCard delete-board" id="${board.id}">
      <div class="card-header text-center"><h3>${board.category}</h3></div> 
        <div class="card-body">
          <h5 class="text-center">See Pins</h5>
          <div class="text-center dlt"><i type="button" id="board-delete" class="far fa-times-circle"></i> Delete Board</div>
        </div>
        </div>
        </div>
  `;

  return domString;
};

export default { boardMaker };
