import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getPins = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json`)
    .then((response) => {
      const singlePinObj = response.data;
      const singlePins = [];
      if (singlePinObj) {
        Object.keys(singlePinObj).forEach((pinId) => {
          singlePinObj[pinId].id = pinId;
          singlePins.push(singlePinObj[pinId]);
        });
      }
      resolve(singlePins);
    })
    .catch((err) => reject(err));
});

const getPinsByBoardId = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((response) => {
      const pinObjects = response.data;
      const pins = [];
      Object.keys(pinObjects).forEach((boardPinId) => {
        pinObjects[boardPinId].id = boardPinId;
        pins.push(pinObjects[boardPinId]);
      });
      resolve(pins);
    })
    .catch((err) => reject(err));
});

const getPinbyId = (pinId) => axios.get(`${baseUrl}/pins/${pinId}.json`);

const deletePin = (pinId) => axios.delete(`${baseUrl}/pins/${pinId}.json`);

const addPin = (newPinObj) => axios.post(`${baseUrl}/pins.json`, newPinObj);

const updatePin = (pinId, editedPin) => axios.put(`${baseUrl}/pins/${pinId}.json`, editedPin);

export default {
  getPinsByBoardId,
  deletePin,
  addPin,
  getPinbyId,
  updatePin,
  getPins,
};
