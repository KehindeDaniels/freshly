// Home.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductGrid from "../components/ProductGrid";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");
      const data_Url = "https://timbu-get-all-products.reavdev.workers.dev/";
      try {
        const response = await axios.get(data_Url, {
          params: {
            organization_id: "11343c2c0437476dba5536df99cbe69c",
            reverse_sort: false,
            page: currentPage,
            size: 8,
            Appid: import.meta.env.VITE_APP_ID,
            Apikey: import.meta.env.VITE_API_KEY,
          },
        });
        if (response.status === 200) {
          setProducts(response.data.items || []);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [currentPage]);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-lg font-bold mb-4">
        {loading ? "Loading..." : "Freshly Project"}
      </h2>
      {error && <p className="text-red-500">{error}</p>}
      <ProductGrid products={products} />
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage((p) => p + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
