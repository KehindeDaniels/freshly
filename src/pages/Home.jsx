import React, { useState } from "react";
import ProductGrid from "../components/ProductGrid";
import products from "../../data";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const Allfilters = [
    { name: "All", src: "/assets/all.png" },
    { name: "Fruits", src: "/assets/fruits.png" },
    { name: "Veggies", src: "/assets/vegetables.png" },
    { name: "Grain", src: "/assets/grain.png" },
  ];

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  const filters = Allfilters.map((filter, index) => (
    <div
      key={index}
      onClick={() => handleFilterClick(filter.name)}
      className="flex flex-col items-center justify-center gap-1 hover:border-b-2 hover:border-green-500 cursor-pointer"
    >
      <img src={filter.src} alt={filter.name} className="w-10" />
      <p>{filter.name}</p>
    </div>
  ));

  const filteredProducts = products.filter((product) =>
    selectedCategory === "All" ? true : product.category === selectedCategory
  );

  return (
    <div className="px-4 md:px-8 lg:px-16">
      <div className="mb-6 mt-4 px-4 md:flex md:justify-between md:items-center">
        <h2 className="font-bold text-xl mb-4 text-center md:text-left">
          Fresh Produce
        </h2>
        <div className="filters grid grid-cols-2 gap-4 md:flex md:gap-16">
          {filters}
        </div>
      </div>
      <ProductGrid products={filteredProducts} />
    </div>
  );
};

export default Home;
