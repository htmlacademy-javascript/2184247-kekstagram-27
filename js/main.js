function getRandomPositiveInteger (min, max) {
  if (min < 0 || max < 0) {
    return NaN;
  }
  return Math.floor(Math.random() * (max - min) + min+1);
}
getRandomPositiveInteger(1,1000);

function checkStringLength (string, length) {
  return string.length <= length;
} 

