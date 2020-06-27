const boardMaker = (board) => {
  const domString = `
  <div class="row">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${board.category}</h5>
        </div>
      </div>
    </div>
  </div>
  `;

  return domString;
};

export default { boardMaker };
