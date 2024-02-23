"use strict";
const topicChoose1 = document.querySelector("#img__topic--1");
const topicChoose2 = document.querySelector("#img__topic--2");
const topicChoose3 = document.querySelector("#img__topic--3");
const topicChoose4 = document.querySelector("#img__topic--4");

topicChoose1.addEventListener("click", () => {
  window.location.href = "./third.html";
});

// topicChoose1.addEventListener("mouseover", () => {
//   topicChoose1.style.scale = "1.1";
// });

// topicChoose1.addEventListener("mouseleave", () => {
//   topicChoose1.style.scale = "1.0";
// });

topicChoose2.addEventListener("click", () => {
  alert("敬请期待！");
});

topicChoose3.addEventListener("click", () => {
  alert("敬请期待！");
});

// topicChoose4.addEventListener("click", () => {
//   window.location.href = "./forth.html";
// });

// topicChoose4.addEventListener("mouseover", () => {
//   topicChoose4.style.scale = "1.1";
// });

topicChoose4.addEventListener("mouseleave", () => {
  topicChoose4.style.scale = "1.0";
});
