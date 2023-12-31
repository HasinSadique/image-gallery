import React, { createContext, useState } from "react";
import AddItemCard from "../AddItemCard/AddItemCard";
import DisplayCard from "../DisplayCard/DisplayCard";
import ItemCard from "../ItemCard/ItemCard";
import image1 from "../../assets/images/image-1.webp";
import image2 from "../../assets/images/image-2.webp";
import image3 from "../../assets/images/image-3.webp";
import image4 from "../../assets/images/image-4.webp";
import image5 from "../../assets/images/image-5.webp";
import image6 from "../../assets/images/image-6.webp";
import image7 from "../../assets/images/image-7.webp";
import image8 from "../../assets/images/image-8.webp";
import image9 from "../../assets/images/image-9.webp";
import image10 from "../../assets/images/image-10.jpeg";
import image11 from "../../assets/images/image-11.jpeg";

export const itemInfoContext = createContext("ItemInfo");

const Home = () => {
  const [checkedNum, setCheckedNum] = useState(0);
  const [items, setItems] = useState([
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
  ]);
  const [selectedIndex, setSelectedIndex] = useState([]);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDeleteSelected = () => {
    if (selectedIndex.length > 0) {
      // run a loop on main-data array and search for those selected Indexes and remove them.
      let newArray = items.filter(
        (item, index) => !selectedIndex.includes(index)
      );
      setSelectedIndex([]);
      setCheckedNum(0);
      setItems(newArray);
      console.log("Target >>> ", newArray);
      // setItems("wow>>", newArr);
    } else {
      console.log("Selected Nai ", selectedIndex);
    }
  };
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
    setDraggedIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();

    const sourceIndex = e.dataTransfer.getData("text/plain");
    console.log("My Current Items: >>> ", items);
    const updatedItems = [...items];

    // Reorder the items in the array
    const [draggedItem] = updatedItems.splice(sourceIndex, 1);
    updatedItems.splice(targetIndex, 0, draggedItem);
    console.log("My New Items: >>> ", updatedItems);
    setItems(updatedItems);
    setDraggedIndex(null);
    setSelectedIndex([]);
    setCheckedNum(0);
  };

  return (
    <itemInfoContext.Provider
      value={[checkedNum, setCheckedNum, selectedIndex, setSelectedIndex]}
    >
      <div className="bg-white rounded-lg divide-y-2">
        <div className="flex justify-between p-5">
          {checkedNum > 0 ? (
            <div>
              <input
                checked={checkedNum > 0}
                onChange={() => {}}
                type="checkbox"
              />{" "}
              {checkedNum} Items selected
            </div>
          ) : (
            <div>Gallery</div>
          )}

          <button
            onClick={() => {
              handleDeleteSelected();
            }}
            className="text-red-600"
          >
            {checkedNum > 0
              ? checkedNum > 1
                ? "Delete Items"
                : "Delete Item"
              : ""}
          </button>
        </div>

        <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 gap-4 gap-y-6 p-10">
          {items.map((item, index) =>
            index == 0 ? (
              // Feature Image
              <div
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleDrop(e, index)}
                className={`col-span-2 row-span-2 ${
                  index === draggedIndex ? "scale-105" : ""
                }`}
              >
                <ItemCard key={item} index={0} image={item}></ItemCard>
              </div>
            ) : (
              <div
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleDrop(e, index)}
                className={`${
                  index === draggedIndex
                    ? "border-2 bg-blue-300 rounded-xl "
                    : ""
                }`}
              >
                <ItemCard key={item} index={index} image={item}></ItemCard>
              </div>
            )
          )}
          {<AddItemCard></AddItemCard>}
        </div>
      </div>
    </itemInfoContext.Provider>
  );
};

export default Home;
