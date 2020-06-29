const pinMaker = (pin) => {
  const domString = `
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${pin.imgUrl}" alt="Card image cap">
    <div class="card-body">
    <a class="card-text" href=${pin.webUrl}>Follow the Link!</a>
  </div>
</div>
  `;
  return domString;
};

export default { pinMaker };
