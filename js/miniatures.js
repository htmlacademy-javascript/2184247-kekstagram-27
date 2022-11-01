import {generatePicture} from './data.js';
import {PICTURES_COUNT} from './main.js';

const picture = document.querySelector('#picture');
const pictures = document.querySelector('.pictures');

const randomPictureInfortmation = generatePicture(PICTURES_COUNT);

const generatePicture = (posts) => {
  const photoFragment = document.createDocumentFragment();

  posts.forEach((item) => {
    const { url, comments, likes} = item;
    const randomPicture = picture.cloneNode(true);
    const randomPhoto = randomPicture.content;

    randomPhoto.querySelector('.picture__img').src = url;
    randomPhoto.querySelector('.picture__comments').textContent = comments;
    randomPhoto.querySelector('.picture__likes').textContent = likes;

    photoFragment.appendChild(randomPhoto);
  });

  pictures.appendChild(photoFragment);
};

generatePicture(randomPictureInformation);
