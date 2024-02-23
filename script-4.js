"use strict";

// const detailChoose = document.getElementById("detailChoose");
const detailChoose1 = document.querySelector("#img__detail--1");
const detailChoose2 = document.querySelector("#img__detail--2");
const detailChoose3 = document.querySelector("#img__detail--3");
const detailChoose4 = document.querySelector("#img__detail--4");
const divDetails = document.querySelector(".div__details");

let status1 = 1;

detailChoose1.addEventListener("click", () => {
  if (status1) {
    detailChoose1.style.scale = "1.1";
    divDetails.classList.remove("hidden");
  } else {
    divDetails.classList.add("hidden");
    detailChoose1.style.scale = null;
  }
  status1 = !status1;
});

detailChoose2.addEventListener("click", () => {
  alert("敬请期待！");
});
detailChoose3.addEventListener("click", () => {
  alert("敬请期待！");
});
detailChoose4.addEventListener("click", () => {
  alert("敬请期待！");
});
