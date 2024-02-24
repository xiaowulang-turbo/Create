"use strict";

// const map = L.map("map").setView([51.505, -0.09], 13);

// L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   attribution:
//     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// }).addTo(map);

// L.marker([51.5, -0.09])
//   .addTo(map)
//   .bindPopup("A pretty CSS popup.<br> Easily customizable.")
//   .openPopup();

var map = new AMap.Map("container", {
  zoom: 11, //级别
  center: [114.3005774, 30.5930122], //中心点坐标
  viewMode: "3D", //使用3D视图
});

// 创建一个 Marker 实例：
var marker = new AMap.Marker({
  position: new AMap.LngLat(114.3005774, 30.5930122), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
  title: "武汉",
});

// 将创建的点标记添加到已有的地图实例：
map.add(marker);

// 移除已创建的 marker
// map.remove(marker);
