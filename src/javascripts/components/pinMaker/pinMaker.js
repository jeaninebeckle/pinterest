import './pinMaker.scss';

const pinMaker = (pin) => {
  const domString = `
  <div class="col-sm">
  <div class="card">
    <div id="${pin.id}" class="card pin-card delete-pin">
      <img class="card-img-top" src="${pin.imgUrl}" alt="Card image cap">
        <div class="card-body">
        <h4>${pin.title}</h4>
          <a class="card-text" href=${pin.webUrl}>Follow the Link!</a>
        <div id=modify>
        <div id="${pin.id}" class="dlt"><i type="button" class="far fa-times-circle"></i> Delete Pin</div>
        <div class="edit"><i type="button" class="fas fa-edit"></i> Edit Pin</div>
        </div>
      </div>
      </div>
    </div>
  </div>
  `;
  return domString;
};

export default { pinMaker };
