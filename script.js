"use strict";

const headerImgs = document.querySelectorAll(".header__img");

let curImg = 0;

const gotoImg = function () {
  headerImgs.forEach((img, i) => {
    //console.log(curImg);
    if (curImg === 4) {
      curImg = 0;
    }
    img.style.transform = `translateX(${100 * (i - curImg)}%`;
  });
  curImg++;
};
 gotoImg();

const refreshImg = function () {
  setTimeout(function () {
    gotoImg();
    refreshImg();
  }, 4000);
};

 refreshImg();
