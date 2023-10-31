import React, { useState, useEffect } from "react";
import image from "../../assets/images/image-3.webp";
import "../../styles/commonStyles.css";

const ItemCard = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className=" relative border-2 rounded-xl lg:w-56 lg:h-56 hover:brightness-75 "
    >
      <div
        className={`absolute top-2 left-2 ${
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
      {/* <input
        type="checkbox"
        // checked={isChecked}
        // onChange={toggleCheckbox}
        className={`${isChecked}?"opacity-100":"opacity-0" w-5 h-5 absolute top-2 left-2`}
      /> */}
      <img className="rounded-lg " src={image} />
    </div>
  );
};

export default ItemCard;
