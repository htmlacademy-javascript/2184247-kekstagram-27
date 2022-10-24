export const getRandomNumber = (min, max) => {
  if (min > max) {
    return NaN;
  }
  return Math.floor (Math.random() * (max - min + 1)) + min;
};

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

function checkStringLength (string, length) {
  return string.length <= length;
}
checkStringLength (1, 300);
