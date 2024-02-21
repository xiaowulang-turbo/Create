"use strict";

const detailChoose = document.getElementById("detailChoose");
const detailChoose1 = document.querySelector("#img__detail--1");
const detailChoose2 = document.querySelector("#img__detail--2");
const detailChoose3 = document.querySelector("#img__detail--3");
const detailChoose4 = document.querySelector("#img__detail--4");
const divDetails = document.querySelector(".div__details");
// console.log(detailChoose4);

let status4 = 1;

detailChoose4.addEventListener("click", () => {
  if (status4) {
    divDetails.classList.remove("hidden");
  } else {
    divDetails.classList.add("hidden");
  }
  status4 = !status4;
  // detailChoose.insertAdjacentHTML("beforeend", html);
  // console.log("clicked");
});

detailChoose1.addEventListener("click", () => {
  alert("敬请期待！");
});
detailChoose2.addEventListener("click", () => {
  alert("敬请期待！");
});
detailChoose3.addEventListener("click", () => {
  alert("敬请期待！");
});
