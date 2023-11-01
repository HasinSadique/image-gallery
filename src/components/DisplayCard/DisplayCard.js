import React, { useContext, useState } from "react";
import image from "../../assets/images/image-3.webp";
import { itemInfoContext } from "../Home/Home.js";

const DisplayCard = (props) => {
  const { image, index } = props;
  //   const [] = useContext(itemInfoContext);
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
    <div className="border-2 rounded-lg ">
      <div
        className={`w-10 h-10 absolute top-2 left-2 z-20 ${
          !isChecked && !isHovered ? "opacity-0" : ""
        }`}
      >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="mr-1 cursor-pointer"
        />
      </div>
      <img className="rounded-lg mx-auto" src={image} />{" "}
    </div>
  );
};

export default DisplayCard;
