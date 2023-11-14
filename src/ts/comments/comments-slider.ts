const avatarItemsToDisplay = 5; // It have to be ODD number because it centered
const itemsDiff = Math.floor(avatarItemsToDisplay / 2);
const initialItemIndex = itemsDiff; //value have to be 0 or positive

let currentAvatarIndex = initialItemIndex + itemsDiff;
let currentTextIndex = initialItemIndex;

const avatarsWrapperEl = document.querySelector('.comments__avatars');
const commentsWrapperEl = document.querySelector(
  '.comments__text-wrapper'
) as HTMLElement;
commentsWrapperEl.addEventListener('load', function () {});
const avatarItems = avatarsWrapperEl.children;
const commentsItems = commentsWrapperEl.children;
const nextButton = document.querySelector('.comments__next-button');
const prevButton = document.querySelector('.comments__prev-button');

for (let index = 0; index < itemsDiff; index++) {
  let stubAvatarElement = document.createElement('div');
  stubAvatarElement.classList.add('comments__avatar-wrapper');

  avatarsWrapperEl.prepend(stubAvatarElement);

  stubAvatarElement = document.createElement('div');
  stubAvatarElement.classList.add('comments__avatar-wrapper');

  avatarsWrapperEl.append(stubAvatarElement);
}

([...avatarItems] as HTMLElement[]).forEach((el, i) => {
  el.dataset.index = String(i);
});

const setClassesOnItems = function () {
  avatarItems[currentAvatarIndex].classList.add(
    'comments__avatar-wrapper--current'
  );
  avatarItems[currentAvatarIndex + 1]?.classList.add(
    'comments__avatar-wrapper--secondary'
  );
  avatarItems[currentAvatarIndex - 1]?.classList.add(
    'comments__avatar-wrapper--secondary'
  );
  for (let i = 2; i <= itemsDiff; i++) {
    avatarItems[currentAvatarIndex + i]?.classList.add(
      'comments__avatar-wrapper--tertiary'
    );
    avatarItems[currentAvatarIndex - i]?.classList.add(
      'comments__avatar-wrapper--tertiary'
    );
  }
};

export const calculateTextCommentHeight = function () {
  const activeComment = commentsItems[currentTextIndex] as HTMLElement;

  activeComment.classList.add('comments__text-item--active');

  commentsWrapperEl.style.height = `${activeComment.offsetHeight}px`;
};

const removeClassesOnCurrentItems = function () {
  avatarItems[currentAvatarIndex].classList.remove(
    'comments__avatar-wrapper--current'
  );
  avatarItems[currentAvatarIndex + 1]?.classList.remove(
    'comments__avatar-wrapper--secondary'
  );
  avatarItems[currentAvatarIndex - 1]?.classList.remove(
    'comments__avatar-wrapper--secondary'
  );
  for (let i = 2; i <= itemsDiff; i++) {
    avatarItems[currentAvatarIndex + i]?.classList.remove(
      'comments__avatar-wrapper--tertiary'
    );
    avatarItems[currentAvatarIndex - i]?.classList.remove(
      'comments__avatar-wrapper--tertiary'
    );
  }
  commentsItems[currentAvatarIndex - itemsDiff].classList.remove(
    'comments__text-item--active'
  );
};

const slideNext = function () {
  if (currentAvatarIndex + 1 === avatarItems.length - itemsDiff) return;
  removeClassesOnCurrentItems();
  currentAvatarIndex++;
  currentTextIndex++;
  setClassesOnItems();
  calculateTextCommentHeight();
};

const slidePrev = function () {
  if (currentAvatarIndex === itemsDiff) return;
  removeClassesOnCurrentItems();
  currentAvatarIndex--;
  currentTextIndex--;
  setClassesOnItems();
  calculateTextCommentHeight();
};

nextButton.addEventListener('click', function () {
  slideNext();
});

prevButton.addEventListener('click', function () {
  slidePrev();
});

avatarsWrapperEl.addEventListener('click', function (e) {
  if (!(e.target instanceof HTMLElement)) return;

  const avatarWrapper = e.target.closest('.comments__avatar-wrapper');
  if (!avatarWrapper) return;

  const index = Number((avatarWrapper as HTMLElement).dataset.index);

  if (index < itemsDiff || index >= avatarItems.length - itemsDiff) return;

  removeClassesOnCurrentItems();
  currentAvatarIndex = index;
  currentTextIndex = index - itemsDiff;

  setClassesOnItems();
  calculateTextCommentHeight();
});

setClassesOnItems();
calculateTextCommentHeight();
