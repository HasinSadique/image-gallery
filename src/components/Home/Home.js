import React from "react";
import AddItemCard from "../AddItemCard/AddItemCard";
import DisplayCard from "../DisplayCard/DisplayCard";
import ItemCard from "../ItemCard/ItemCard";

const Home = () => {
  return (
    <div className="bg-white rounded-lg divide-y-2">
      <div className="flex justify-between p-5"> Gallery</div>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 gap-4 gap-y-6 p-10">
        <div className="col-span-2 row-span-2">
          <DisplayCard></DisplayCard>
        </div>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <AddItemCard></AddItemCard>
      </div>
    </div>
  );
};

export default Home;
