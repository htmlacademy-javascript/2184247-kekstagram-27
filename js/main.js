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

const picDataCounter = 25;

const getRandomNumber = (minNumber, maxNumber) => {
  let min = Math.ceil(minNumber);
  let max = Math.floor(maxNumber);

  if (max < min) {
    const number = min;
    min = max;
    max = number;
  }

  if (min < 0 || max < 0) {
    return NaN;
  }

  return Math.floor (Math.random() * (max - min + 1)) + min;
};

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];


const getRandomPicData = (id) => ({
  id: id + 1,
  url: `photos/${ id + 1 }.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: getRandomNumber (15, 200),
  comments: {
    id: id + 1,
    avatar: `img/avatar-${ getRandomNumber (1, 6) }.svg`,
    message: getRandomArrayElement(messages),
    name: getRandomArrayElement(names)
  }
});

const getRandomPicData = (length) => Array.from({length: length}, (_, index) => getRandomPicData(index));

getRandomPicData(picDataCounter);
