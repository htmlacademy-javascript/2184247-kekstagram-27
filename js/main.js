import {generatePictures} from './data.js';
<<<<<<< HEAD
import './miniatures.js';
import './full-size-pictures.js';
import './users-form.js';
import './upload.js';

const PICTURES_COUNT = 25;

generatePictures(PICTURES_COUNT);
=======
import {renderPictureMiniatures} './miniatures.js';

const PICTURES_COUNT = 25;

const pictures = generatePictures(PICTURES_COUNT);

renderPictureMiniatures(pictures);
>>>>>>> master
