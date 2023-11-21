{
  const aboutEl = document.querySelector('.about');
  const aboutContentEl = aboutEl.querySelector('.about__content');
  const observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          aboutEl.classList.add('show');
          aboutContentEl.classList.add('show-delay');
          observer.unobserve(aboutEl);
        }
      });
    },
    {
      rootMargin: '-20px',
    }
  );

  observer.observe(aboutEl);
}

{
  const promoEl = document.querySelector('.promo');
  const menuEl = promoEl.querySelector('.menu');
  const promoSliderEl = promoEl.querySelector('.promo-slider');
  const promoFormEl = promoEl.querySelector('.promo-form');

  const observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          menuEl.classList.add('show-opacity');
          promoSliderEl.classList.add('show-opacity');
          promoFormEl.classList.add('show-opacity');
          observer.unobserve(promoEl);
        }
      });
    },
    {
      rootMargin: '-20px',
    }
  );

  observer.observe(promoEl);
}

{
  const trackContentEl = document.querySelector('.track__content');

  const observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          trackContentEl.classList.add('show');
          observer.unobserve(trackContentEl);
        }
      });
    },
    {
      rootMargin: '-20px',
    }
  );

  observer.observe(trackContentEl);
}

{
  const serviceEl = document.querySelector('.service');
  const serviceBoxEl = serviceEl.querySelector('.service__box');
  const observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          serviceEl.classList.add('show');
          serviceBoxEl.classList.add('show-delay');
          observer.unobserve(serviceEl);
        }
      });
    },
    {
      rootMargin: '-20px',
    }
  );

  observer.observe(serviceEl);
}

{
  const howEl = document.querySelector('.how');
  const howTitleEl = howEl.querySelector('.how__title-wrapper');
  const howImgEl = howEl.querySelector('.how__img-box');
  const howItemsEl = howEl.querySelectorAll('.how-item');
  const observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          howTitleEl.classList.add('show');
          howImgEl.classList.add('show-opacity-delay');
          howItemsEl.forEach((item) =>
            item.classList.add('show-opacity-delay')
          );

          observer.unobserve(howEl);
        }
      });
    },
    {
      rootMargin: '-20px',
    }
  );

  observer.observe(howEl);
}

{
  const galleryEl = document.querySelector('.gallery');
  const galleryContentEl = galleryEl.querySelector('.gallery__content');
  const observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          galleryEl.classList.add('show');
          galleryContentEl.classList.add('show-opacity-delay');

          observer.unobserve(galleryEl);
        }
      });
    },
    {
      rootMargin: '-20px',
    }
  );

  observer.observe(galleryEl);
}

{
  const commentsEl = document.querySelector('.comments');
  const observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          commentsEl.classList.add('show-opacity');

          observer.unobserve(commentsEl);
        }
      });
    },
    {
      rootMargin: '-20px',
    }
  );

  observer.observe(commentsEl);
}
