import { calculateTextCommentHeight } from './comments/comments-slider';
import { calculateGalleryHeight } from './gallery/gallery';

window.addEventListener('resize', function () {
  calculateTextCommentHeight();
  calculateGalleryHeight();
});
