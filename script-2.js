"use strict";
const topicChoose1 = document.querySelector("#img__topic--1");
const topicChoose2 = document.querySelector("#img__topic--2");
const topicChoose3 = document.querySelector("#img__topic--3");
const topicChoose4 = document.querySelector("#img__topic--4");

topicChoose1.addEventListener("click", () => {
  window.location.href = "./third.html";
});
topicChoose2.addEventListener("click", () => {
  alert("敬请期待！");
});

topicChoose3.addEventListener("click", () => {
  alert("敬请期待！");
});

topicChoose4.addEventListener("click", () => {
  window.location.href = "./forth.html";
});
