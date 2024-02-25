"use strict";

const headerImgs = document.querySelectorAll(".header__img");
const btnLearnMore = document.querySelector("#btn__learnMore");
const btnGo = document.querySelector("#btn__go");
const inputCity = document.getElementById("input__city");

const countryChoose = document.querySelector("#countryChoose");
// const countryChoose = document.getElementById("img__country--2");
const countryChoose1 = document.querySelector("#img__country--1");
const countryChoose2 = document.querySelector("#img__country--2");
const countryChoose3 = document.querySelector("#img__country--3");

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
  alert("敬请期待！");
});
// countryChoose2.addEventListener("mouseover", () => {
//   countryChoose2.style.scale = "1.1";
// });

// countryChoose2.addEventListener("mouseleave", () => {
//   countryChoose2.style.scale = "1.0";
// });
countryChoose2.addEventListener("click", () => {
  alert("敬请期待！");
});
countryChoose3.addEventListener("click", () => {
  window.location.href = "./second.html";
});

btnLearnMore.addEventListener("click", () => {
  countryChoose.scrollIntoView({ behavior: "smooth" });
});

// if (inputCity.value == "") {
//   btnGo.disabled = "true";
// }

btnGo.addEventListener("click", () => {
  if (inputCity.value === "") {
    alert("请先输入目的地!");
  }
  if (inputCity.value !== "") {
    countryChoose.scrollIntoView({ behavior: "smooth" });
  }
});

// fetch(
//   "https://restapi.amap.com/v3/weather/weatherInfo?key=	df33a176e7e60e130be25b8ff98a2f2d&city=110101"
// )
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });
