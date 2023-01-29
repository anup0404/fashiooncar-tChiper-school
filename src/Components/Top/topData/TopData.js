import React from "react";
import "./TopData.css";
import Top from "../Top";
function TopData() {
  let topdata = [
    {
      image: (
        <img src="https://5.imimg.com/data5/ANDROID/Default/2022/6/MZ/SG/BV/144274768/product-jpeg-500x500.jpeg" />
      ),
      desc: "White traditional long dress",
      detail: "Monday Happy",
      brand: "#MONHPY",
    },
    {
      image: (
        <img src="https://img.joomcdn.net/b0f6ef4a569ac34c2dcbb8ffae269477a0a1367f_original.jpeg" />
      ),
      desc: "Long sleeve denim jacket",
      detail: "Payday Surprise",
      brand: "#SRPSPYDY",
    },
    {
      image: (
        <img src="https://cdn.shopify.com/s/files/1/0549/6307/7299/products/1_1c3e3d1c-5be6-40f3-9733-17b186d22fd4_1024x1024@2x.jpg?v=1658963055" />
      ),
      desc: "Hush Pupples",

      detail: "First order",
      brand: "#HPYFERST",
    },
    {
      image: (
        <img src="https://cdn.shopify.com/s/files/1/0435/4880/3232/products/small-7073_2_360x.jpg?v=1633103361" />
      ),
      desc: "Anthes skirt",
      detail: "Vegetarian Food",
      brand: "#VEGANLOVE",
    },
  ];
  return (
    <div className="topdata_container">
      {topdata.map((ele, index) => (
        <Top
          key={index}
          image={ele.image}
          desc={ele.desc}
          detail={ele.detail}
          brand={ele.brand}
        />
      ))}
    </div>
  );
}

export default TopData;
