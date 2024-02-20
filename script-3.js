"use strict";

const imgDetails = document.querySelectorAll(".img__details");
const detailChoose4 = document.querySelector("#img__detail--4");

const html = `
<div class="div__details">
  <div class="text__details">
    <p>白族扎染|晕染千年的一抹蓝</p>
    <p>
      【中国传统非遗手工艺】<br />
      扎染是指运用天然草木染料，用纱、线、绳等工具，对织物进行扎、缝、缚、缀、夹等多种形式组合后进行染色的一种传统工艺。扎染分为扎花和浸染两个环节，扎花是以缝为主、缝扎结合的手工扎花方法浸染；浸染是采用手工反复浸染工艺，形成以花形为中心的多层次晕纹。
    </p>
  </div>
  <div class="pic__details">
    <div class="pic__detail">
      <img src="img/C/C2-1.jpg" alt="country" />
    </div>
    <div class="pic__detail">
      <img src="img/C/C2-2.jpg" alt="country" />
    </div>
  </div>
</div>`;

detailChoose4.addEventListener("click", () => {
  imgDetails.insertAdjacentHTML("afterend", html);
  console.log("clicked");
});
