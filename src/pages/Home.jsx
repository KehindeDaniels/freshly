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

      const API_ID = "H27ZVCZ80DF4IK1";
      const API_KEY = "5203adc5898f4a388c31673baa009d0620240712211620313589";

      console.log("Using API ID:", API_ID);
      console.log("Using API Key:", API_KEY);

      try {
        const response = await axios.get(data_Url, {
          params: {
            organization_id: "11343c2c0437476dba5536df99cbe69c",
            reverse_sort: false,
            page: currentPage,
            size: 10,
            Appid: API_ID,
            Apikey: API_KEY,
          },
        });

        console.log("API Response:", response);

        if (response.status === 200) {
          console.log("Fetched products:", response.data.items);
          setProducts(response.data.items || []);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setError("Failed to fetch products");
        console.log("API Error:", error.response || error);
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
        {products.map((product, index) => {
          const imageUrl = `https://api.timbu.cloud/images/${product.product_image}`;
          console.log(imageUrl); // Log the constructed URL
          return (
            <li key={index}>
              <h3>{product.name}</h3>
              <img
                src={imageUrl}
                alt={product.name}
                style={{ width: 100, height: 100 }}
              />
              <p>{product.description}</p>
            </li>
          );
        })}
      </ul>
      <button onClick={() => setCurrentPage((p) => p + 1)}>Next Page</button>
      <button onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}>
        Previous Page
      </button>
    </div>
  );
};

export default Home;
