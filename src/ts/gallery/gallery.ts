import { hideGalleryModal, showGalleryModal } from '../modal';
import { setOnHideModal } from '../state';

const galleryInner = document.querySelector('.gallery__inner');
const extendGalleryButtonEl = galleryInner.querySelector('.gallery__button');
const galleryContentEl = galleryInner.querySelector(
  '.gallery__content'
) as HTMLElement;

const galleryControlInputEl = galleryInner.querySelector(
  '.gallery__control-input'
) as HTMLInputElement;

const galleryMainEl = galleryContentEl.querySelector(
  '.gallery__content-main'
) as HTMLElement;
const galleryExtendedEl = galleryContentEl.querySelector(
  '.gallery__content-extended'
) as HTMLElement;

const loadedImagesEl = [
  ...galleryMainEl.querySelectorAll('.gallery__img'),
] as HTMLImageElement[];
const imagesToLazyLoad = galleryExtendedEl.querySelectorAll(
  'img[data-src]'
) as NodeListOf<HTMLImageElement>;

loadedImagesEl.forEach((img, i) => (img.dataset.index = String(i)));

let isExtended = false;
let isImagesLoaded = false;
let currentImgIndex = 0;

const loadExtendedImages = function () {
  if (isImagesLoaded) return;

  imagesToLazyLoad.forEach((img, i) => {
    img.src = img.dataset.src;
    img.dataset.index = String(i + loadedImagesEl.length);
  });
  loadedImagesEl.push(...imagesToLazyLoad);

  isImagesLoaded = true;
};

const getMainGalleryHeight = () => galleryMainEl.offsetHeight;
const getEntireGalleryHeight = () =>
  galleryMainEl.offsetHeight + galleryExtendedEl.offsetHeight;

let getGalleryHeight: () => number = isExtended
  ? getEntireGalleryHeight
  : getMainGalleryHeight;

export const calculateGalleryHeight = function () {
  galleryContentEl.style.height = `${getGalleryHeight()}px`;
};

const hideGallery = function () {
  hideGalleryModal();
  galleryControlInputEl.blur();
};

const showPrevImg = function () {
  currentImgIndex =
    currentImgIndex - 1 < 0 ? loadedImagesEl.length - 1 : currentImgIndex - 1;

  showGalleryModal(loadedImagesEl[currentImgIndex].src);
};

const showNextImg = function () {
  currentImgIndex =
    currentImgIndex + 1 === loadedImagesEl.length ? 0 : currentImgIndex + 1;
  showGalleryModal(loadedImagesEl[currentImgIndex].src);
};

extendGalleryButtonEl.addEventListener('click', function () {
  isExtended = !isExtended;
  if (isExtended) {
    extendGalleryButtonEl.textContent = 'Hide Gallery';
    getGalleryHeight = getEntireGalleryHeight;
    loadExtendedImages();
  } else {
    extendGalleryButtonEl.textContent = 'View All Gallery';
    getGalleryHeight = getMainGalleryHeight;
    galleryInner.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  calculateGalleryHeight();
});

galleryContentEl.addEventListener('click', function (e) {
  if (!(e.target instanceof HTMLElement)) return;

  const imgWrapperEl = e.target.closest('.gallery__img-wrapper');

  if (!imgWrapperEl) return;

  const imgEl = imgWrapperEl.querySelector('.gallery__img') as HTMLImageElement;
  showGalleryModal(imgEl.src);
  currentImgIndex = Number(imgEl.dataset.index);

  galleryControlInputEl.focus();
  setOnHideModal(hideGallery);
});

galleryControlInputEl.addEventListener('blur', function (e) {
  e.preventDefault();
});

galleryControlInputEl.addEventListener('keydown', function (e) {
  const code = e.code;
  if (code === 'ArrowLeft' || code === 'KeyA') {
    showPrevImg();
  } else if (code === 'ArrowRight' || code === 'KeyD') {
    showNextImg();
  }
});

calculateGalleryHeight();
