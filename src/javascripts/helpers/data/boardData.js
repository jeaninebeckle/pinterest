import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json`)
    .then((response) => {
      const boardObjects = response.data;
      const boards = [];
      if (boardObjects) {
        Object.keys(boardObjects).forEach((boardId) => {
          boardObjects[boardId].id = boardId;
          boards.push(boardObjects[boardId]);
        });
      }
      resolve(boards);
    })
    .catch((err) => reject(err));
});

export default { getBoards };
