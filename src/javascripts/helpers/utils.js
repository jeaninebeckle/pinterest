import boardData from './data/boardData';

const printToDom = (selector, text) => {
  $(selector).html(text);
};

const idToCategory = () => {
  boardData.getBoardCategories()

    .then((boards) => {
      boards.forEach((board) => board.category);
    })
    .catch((err) => console.error('cannot turn id into category', err));
};

export default { printToDom, idToCategory };
