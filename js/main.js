import {generatePictures} from './data.js';
import {renderPictureMiniatures} from './miniatures.js';

const PICTURES_COUNT = 25;

const pictures = generatePictures(PICTURES_COUNT);

renderPictureMiniatures(pictures);

