import './pinMaker.scss';

const pinMaker = (pin) => {
  const domString = `
  <div id="${pin.id}" class="card pin-card delete-pin" style="width: 18rem;">
    <img class="card-img-top" src="${pin.imgUrl}" alt="Card image cap">
    <div class="card-body">
    <a class="card-text" href=${pin.webUrl}>Follow the Link!</a>
    <div><i type="button" class="far fa-times-circle"></i></div>
  </div>
</div>
  `;
  return domString;
};

export default { pinMaker };
