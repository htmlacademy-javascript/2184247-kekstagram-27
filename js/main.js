import {generatePictures} from './data.js';
import {renderPictureMiniatures} './miniatures.js';

const PICTURES_COUNT = 25;

const pictures = generatePictures(PICTURES_COUNT);

renderPictureMiniatures(pictures);

