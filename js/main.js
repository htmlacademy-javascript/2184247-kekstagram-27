const NAMES = [
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


const DESCRIPTIONS = [
  'Salut toi!',
  'Je suis un petit chaton, miaou!',
  'Donnez-moi quelque chose a manger, moore!',
  'Frottes-moi, mew!',
  'Est-ce que cest un chien?!',
  'Jai tres faim!',
  'Donne-moi du lait!',
];

const MESSAGES = [
  'В целом всё неплохо. Но не всё.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const PICTURES_COUNT = 25;

const getRandomNumber = (min, max) => {
 if (min > max) {
    return NaN;
  }
 return Math.floor (Math.random() * (max - min + 1)) + min;
};

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];


const generatePicture = (id) => ({
  id: id + 1,
  url: `photos/${ id + 1 }.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNumber (15, 200),
  comments: generateComments(getRandomNumber(0,10))
});

const generatePicture = (count) => Array.from( arrayLike: {length: count}, (_, index: number) => generatePicture(index));

generatePicture(PITURES_COUNT);
