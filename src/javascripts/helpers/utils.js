// import boardData from './data/boardData';

const printToDom = (selector, text) => {
  $(selector).html(text);
};

export default { printToDom };
