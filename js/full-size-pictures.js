import { closeOverlay } from './user-form.js';

const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('#picture-cancel');
const socialComments = document.querySelector('.social__comments');
const commentSocial = document.querySelector('.social__comment');
const socialCaption = document.querySelector('.social__caption');
const bigPictureImg = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const body = document.body;


export const hideBigPicture = () => {
  bigPicture.classList.add('hidden'); 
  body.classList.remove('modal-open'); 

};

export const openBigPicture = () => {
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
};

export const onKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
    closeOverlay();
  }
};


const onCancelButtonClick = () => {
  hideBigPicture();
};

closeButton.addEventListener('click', onCancelButtonClick); 

const createComment = ({ avatar, name, message }) => {
  const socialComment = commentSocial.cloneNode(true);

  socialComment.querySelector('.social__picture').src = avatar;
  socialComment.querySelector('.social__picture').alt = name;
  socialComment.querySelector('.social__text').textContent = message;

  return socialComment;
};


export const renderPictureDialog = (picture) => {
  const commentFragment = document.createDocumentFragment();
  const { url, comments, likes, description } = picture;

 
  bigPictureImg.src = url;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  socialCaption.textContent = description;

  comments.forEach((comment) => {
    commentFragment.appendChild(createComment(comment));
  });

  socialComments.innerHTML = '';
  socialComments.appendChild(commentFragment);
};
