const pictureTemplate = document.querySelector('#picture');
const picturesElement = document.querySelector('.pictures');

const renderPictureMiniatures = (pictures) => {
  const picturesFragment = document.createDocumentFragment();

  pictures.forEach((item) => {
    const { url, comments, likes} = item;
    const picture = pictureTemplate.cloneNode(true).content;

    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__comments').textContent = comments;
    picture.querySelector('.picture__likes').textContent = likes;

    picturesFragment.appendChild(picture);
  });

  picturesElement.appendChild(picturesFragment);
};

export {renderPictureMiniatures};
