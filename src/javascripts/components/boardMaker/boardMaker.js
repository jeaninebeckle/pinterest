const boardMaker = (board) => {
  const domString = `
  <div class="row">
    <div class="col-sm-6">
      <div id="boardCard" class="card">
        <div class="card-body">
          <h5 class="card-title">${board.category}</h5>
          <button id="boardButton" type="button" class="btn btn-light">See Pins</button>
        </div>
      </div>
    </div>
  </div>
  `;

  return domString;
};

export default { boardMaker };
