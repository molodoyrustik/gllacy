(function() {
  'use strict';
  const btnWrap = document.querySelector('.gallery__controller');
  const btns = btnWrap.querySelectorAll('button');
  const galleryImg = document.querySelector('.gallery__img');
  const body = document.body;
  
  btnWrap.addEventListener('click', (e) => {
    const current = e.target;
    if (current.tagName === 'BUTTON') {
      btns.forEach((btn) => {
        btn.classList.remove('gallery__btn--active');
      })
      const color = current.getAttribute('data-color');
      const imgSrc = current.getAttribute('data-imgsrc');
      current.classList.add('gallery__btn--active');
      galleryImg.setAttribute('src', imgSrc);
      body.style.backgroundColor = color;
    }
  })
})();