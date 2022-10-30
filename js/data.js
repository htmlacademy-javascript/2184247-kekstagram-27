import {getRandomNumber, getRandomArrayElement} from './util.js';

const names = [
  'Adam',
  'Adele',
  'Adrien',
  'Agathe',
  'Alan',
  'Albert',
  'Barnabe',
  'Bastien',
  'Benjamine',
  'Bernadette',
  'Berenice',
  'Bernard',
  'Blanche',
  'Brigitte',
  'Camille',
  'Carole',
  'Cassandra',
  'Chantal',
  'Charlotte',
  'Claudette',
  'Colette',
  'Damien',
  'Daphnee',
  'Deborah',
  'Desire',
];


const descriptions = [
  'Salut toi!',
  'Je suis un petit chaton, miaou!',
  'Donnez-moi quelque chose a manger, moore!',
  'Frottes-moi, mew!',
  'Est-ce que cest un chien?!',
  'Jai tres faim!',
  'Donne-moi du lait!',
];

const messages = [
  'В целом всё неплохо. Но не всё.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const PICTURES_COUNT = 25;

const generateComment = (id) => ({
  id: id + 1,
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: getRandomArrayElement(messages),
  name: getRandomArrayElement(names)
});

const generateComments = (count) => Array.from ({length: count}, (_, index) => generateComment(index));

const generatePicture = (id) => ({
  id: id + 1,
  url: `photos/${id + 1}.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: getRandomNumber (15, 200),
  comments: generateComments(getRandomNumber(0,10))
});

const generatePictures = (count) => Array.from({length: count}, (_, index) => generatePicture(index));

generatePictures(PICTURES_COUNT);

export {generatePictures};
