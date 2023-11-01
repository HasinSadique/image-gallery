import React, { useState, useEffect, useContext } from "react";
import image from "../../assets/images/image-5.webp";
import "./ItemCard.css";
import { itemInfoContext } from "../Home/Home.js";

const ItemCard = (props) => {
  const { image, index } = props;
  const [checkedNum, setCheckedNum, selectedIndex, setSelectedIndex] =
    useContext(itemInfoContext);
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  let arr = [...selectedIndex];

  const handleCheckboxChange = () => {
    console.log("Checked Num before >>> ", checkedNum);
    if (isChecked == false) {
      setIsChecked(!isChecked);
      //
      console.log("My old List : >> ", selectedIndex);
      arr.push(index);
      setSelectedIndex(arr);
      console.log("My new List : >> ", arr);
      //
      let num = checkedNum + 1;
      setCheckedNum(num);
      console.log("Checked Num after >>> ", checkedNum);
    } else {
      setIsChecked(!isChecked);

      console.log("My old List : >> ", selectedIndex);

      let newArray = selectedIndex.filter((item) => item !== index);
      console.log("My new List : >> ", newArray);
      setSelectedIndex(newArray);

      let num = checkedNum - 1;
      setCheckedNum(num);
      console.log("Checked Num after >>> ", checkedNum);
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative border-2 rounded-xl ${
        index === 0 ? "" : "lg:w-56 lg:h-56"
      }  hover:brightness-50 `}
    >
      <div
        className={`w-10 h-10 absolute top-2 left-2 z-20 
        ${!isChecked && !isHovered ? "opacity-0" : ""}
        `}
      >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="mr-1 cursor-pointer"
        />
      </div>
      <img
        className={`${isChecked ? "contrast-75" : ""} rounded-lg `}
        src={image}
      />
    </div>
  );
};

export default ItemCard;
