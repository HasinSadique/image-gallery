import React from "react";
import image from "../../assets/images/image-3.webp";

const DisplayCard = () => {
  return (
    <div className="border-2 rounded-lg ">
      <img className="rounded-lg" src={image} />{" "}
    </div>
  );
};

export default DisplayCard;
