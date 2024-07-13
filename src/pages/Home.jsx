// Home.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductGrid from "../components/ProductGrid"; // Adjust the path as necessary

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
            size: 10,
            Appid: "H27ZVCZ80DF4IK1",
            Apikey: "5203adc5898f4a388c31673baa009d0620240712211620313589",
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
    <div>
      <h2>{loading ? "Loading..." : "Fetched Products"}</h2>
      {error && <p>{error}</p>}
      <ProductGrid products={products} />
      <button onClick={() => setCurrentPage((p) => p + 1)}>Next Page</button>
      <button onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}>
        Previous Page
      </button>
    </div>
  );
};

export default Home;
