import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductGrid from "../components/ProductGrid";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products", {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TIMBU_API_KEY}`,
          },
        });

        if (response.status === 200) {
          setProducts(response.data);
          console.log("Fetched products:", response.data);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get("http://api.timbu.com/products", {
  //         headers: {
  //           Authorization: `Bearer ${import.meta.env.VITE_TIMBU_API_KEY}`,
  //         },
  //       });

  //       if (response.status === 200) {
  //         setProducts(response.data);
  //         console.log("Fetched products:", response.data);
  //       }
  //     } catch (error) {
  //       console.error("Failed to fetch products:", error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const Allfilters = [
    { name: "All", src: "/assets/all.png" },
    { name: "Fruits", src: "/assets/fruits.png" },
    { name: "Veggies", src: "/assets/vegetables.png" },
    { name: "Grain", src: "/assets/grain.png" },
  ];

  const filters = Allfilters.map((filter, index) => (
    <div
      key={index}
      onClick={() => handleFilterClick(filter.name)}
      className="flex items-center justify-center gap-1 hover:border-b-2 hover:border-green-500 cursor-pointer"
    >
      <img src={filter.src} alt={filter.name} className="w-10" />
      <p>{filter.name}</p>
    </div>
  ));

  const filteredProducts = products.filter((product) =>
    selectedCategory === "All" ? true : product.category === selectedCategory
  );

  return (
    <div className="mt-8 md:mt-16 sm:px-4">
      <div className="relative flex justify-between items-start px-4 lg:flex-row">
        <h2 className="font-bold text-xl mb-4 lg:mb-0">Fresh Produce</h2>
        <div className="lg:hidden">
          <button onClick={toggleDropdown} className="text-3xl">
            &#9776;
          </button>
          {isDropdownOpen && (
            <div className="grid grid-cols-2 gap-4 p-8 absolute top-8 right-4 w-64 bg-white shadow-md mt-2 z-10">
              {filters}
            </div>
          )}
        </div>
        <div className="hidden lg:flex gap-8">{filters}</div>
      </div>
      <ProductGrid products={filteredProducts} />
    </div>
  );
};

export default Home;
