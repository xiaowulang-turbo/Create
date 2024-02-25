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
  zoom: 10, //级别
  // 25.9938561,
  center: [100.4, 25.5], //中心点坐标
  viewMode: "3D", //使用3D视图
});

// 创建一个 Marker 实例：
const marker = new AMap.Marker({
  position: new AMap.LngLat(99.927, 25.99), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
  title: "凤羽古镇所在地",
});

marker.setLabel({
  offset: new AMap.Pixel(5, -15), //设置文本标注偏移量
  content: "<div class='info'>凤羽古镇</div>", //设置文本标注内容
  direction: "right", //设置文本标注方位
});

// 创建一个 Marker 实例：
const marker1 = new AMap.Marker({
  position: new AMap.LngLat(100.33, 25.55), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
  title: "大理所在地",
});

marker1.setLabel({
  offset: new AMap.Pixel(5, -15), //设置文本标注偏移量
  content: "<div class='info'>云南·大理</div>", //设置文本标注内容
  direction: "right", //设置文本标注方位
});

// 将创建的点标记添加到已有的地图实例：
map.add([marker, marker1]);
// map.add(marker1);

// 移除已创建的 marker
// map.remove(marker);
