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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gIGNvbnN0IGJ0bldyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeV9fY29udHJvbGxlcicpO1xyXG4gIGNvbnN0IGJ0bnMgPSBidG5XcmFwLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xyXG4gIGNvbnN0IGdhbGxlcnlJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeV9faW1nJyk7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgXHJcbiAgYnRuV3JhcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50ID0gZS50YXJnZXQ7XHJcbiAgICBpZiAoY3VycmVudC50YWdOYW1lID09PSAnQlVUVE9OJykge1xyXG4gICAgICBidG5zLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdnYWxsZXJ5X19idG4tLWFjdGl2ZScpO1xyXG4gICAgICB9KVxyXG4gICAgICBjb25zdCBjb2xvciA9IGN1cnJlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbG9yJyk7XHJcbiAgICAgIGNvbnN0IGltZ1NyYyA9IGN1cnJlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWltZ3NyYycpO1xyXG4gICAgICBjdXJyZW50LmNsYXNzTGlzdC5hZGQoJ2dhbGxlcnlfX2J0bi0tYWN0aXZlJyk7XHJcbiAgICAgIGdhbGxlcnlJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWdTcmMpO1xyXG4gICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gICAgfVxyXG4gIH0pXHJcbn0pKCk7Il19
