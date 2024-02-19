"use strict";

const headerImgs = document.querySelectorAll(".header__img");
// const countryChoose = document.getElementById("img__country--2");
const countryChoose1 = document.querySelector("#img__country--2");

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
// gotoImg();

const refreshImg = function () {
  setTimeout(function () {
    gotoImg();
    refreshImg();
  }, 4000);
};

// refreshImg();

// console.log(headerImgs);

// console.log(countryChoose1);
countryChoose1.addEventListener("click", () => {
  window.location.href = "./second.html";
});
