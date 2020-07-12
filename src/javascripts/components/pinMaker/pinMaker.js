import './pinMaker.scss';

const pinMaker = (pin) => {
  const domString = `
  <div class="container">
    <div id="${pin.id}" class="card pin-card delete-pin" style="width: 18rem;">
      <img class="card-img-top" src="${pin.imgUrl}" alt="Card image cap">
        <div class="card-body">
        <h3>${pin.title}</h3>
          <a class="card-text" href=${pin.webUrl}>Follow the Link!</a>
        <div id="${pin.id}" class="dlt"><i type="button" class="far fa-times-circle"></i> Delete Pin</div>
        <div class="edit"><i type="button" class="fas fa-edit"></i> Edit Pin</div>
      </div>
    </div>
  </div>
  `;
  return domString;
};

export default { pinMaker };
