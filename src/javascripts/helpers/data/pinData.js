import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getPinsByBoardId = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((response) => {
      const pinObjects = response.data;
      console.warn(baseUrl);
      console.warn(response.data);
      const pins = [];
      Object.keys(pinObjects).forEach((boardPinId) => {
        pinObjects[boardPinId].id = boardPinId;
        pins.push(pinObjects[boardPinId]);
      });
      resolve(pins);
    })
    .catch((err) => reject(err));
});

export default { getPinsByBoardId };
