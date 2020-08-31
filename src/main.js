'use strict';

(function () {
  var render = function (container, element, place) {
    container.insertAdjacentHTML(place, element);
  };

  var imagesSrc = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
  ];

  var createDivBgTempalte = (index) => {
    return (
      `<div class="image-mini-bg image-mini-bg-effect">
        <span>${index + 1}</span>
      </div>`
    );
  };

  var returnDivBgstemplate = () => {
    let layout = ``;

    for (let i = 0; i < 8; i++) {
      layout += createDivBgTempalte(i);
    }

    return (layout);
  };

  var imageTemplate = function (imageSrc) {

    return (
      `<div class="imageDiv">
        <img class="image" src="./images/${imageSrc}"/>
        <div class="image-bg">
        ${returnDivBgstemplate()}
        </div>
      </div>`
    );
  };

  var imagesContainer = document.querySelector('.images');
  for (let i = 0; i < 9; i++) {
    render(imagesContainer, imageTemplate(imagesSrc[i]), `beforeend`);
  }

  var imagesMiniDiv = imagesContainer.querySelectorAll('.image-mini-bg');
  for (const imageMiniDiv of imagesMiniDiv) {
    imageMiniDiv.addEventListener('click', function () {
      imageMiniDiv.classList.remove('image-mini-bg-effect');
    });
  }
})();
