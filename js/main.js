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

const getRandomPhotoInformation = (id) => ({
  id: id + 1,
  url: `photos/${ id + 1 }.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNumber (15, 200),
  comments: {
    id: id + 1,
    avatar: `img/avatar-${ getRandomNumber (1, 6) }.svg`,
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAME)
  }
});
