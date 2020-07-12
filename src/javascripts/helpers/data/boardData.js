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

const getBoardCategories = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json`)
    .then((response) => {
      const boardNames = response.data;
      const categories = [];
      if (boardNames) {
        Object.keys(boardNames).forEach((boardCat) => {
          boardNames[boardCat].category = boardCat;
          categories.push(boardNames[boardCat]);
        });
      }
      resolve(categories);
    })
    .catch((err) => reject(err));
});

const deleteBoard = (boardId) => axios.delete(`${baseUrl}/boards/${boardId}.json`);

export default { getBoards, deleteBoard, getBoardCategories };
