import axios from "axios";
import React, { useState, useEffect } from "react";

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
            Apiid: import.meta.env.VITE_API_ID,
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
    <div>
      <h2>{loading ? "Loading..." : "Fetched Products"}</h2>
      {error && <p>{error}</p>}
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
      <button onClick={() => setCurrentPage((p) => p + 1)}>Next Page</button>
      <button onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}>
        Previous Page
      </button>
    </div>
  );
};

export default Home;
