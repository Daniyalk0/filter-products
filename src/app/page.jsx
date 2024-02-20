"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const page = () => {
  const [dataa, setdata] = useState([]);
  const [filtered, setfiltered] = useState([]);
  const [input, setinput] = useState();
  useEffect(() => {
    async function getData() {
      const res = await axios.get("https://dummyjson.com/products");
      const data = res.data.products;
      console.log(data);
      setdata(data);
    }
    getData();
  }, []);
  console.log("daniyal", dataa);
  const productFilter = () => {
    const filtereddata = dataa.filter((product) => product.price < input);
    setfiltered(filtereddata);
  };
  const resetFilter = () => {
    setfiltered([]);
  };

  const inputValue = (e) => {
    setinput(e.target.value);
  };
  return (
    <div className="container">
      <div className="buttons-cont">
        <input type="number" value={input} onChange={(e) => inputValue(e)} />
        <button
          className={"buttons filter"}
          onClick={productFilter}
        >
          Filter
        </button>
        <button className="reset buttons" onClick={resetFilter}>
          Reset
        </button>
      </div>
      <div className="product-cont">
        {(filtered.length > 0 ? filtered : dataa).map((d, index) => (
          <div className="product" key={index}>
            <img src={`${d.images[0]}`} alt="" />
            <p>{d.description}</p>
            <p>{d.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
