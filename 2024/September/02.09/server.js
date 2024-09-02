const axios = require("axios");
const { error } = require("console");
const express = require(`express`);
const app = express();
const baseUrl = `https://simple-grocery-store-api.glitch.me`;

app.get("/api/products", async (req, res) => {
  try {
    // Forward the request to the existing API
    const response = await axios.get(`${baseUrl}/products`, {
      params: req.query, // Forward query params if needed
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res
      .status(error.response ? error.response.status : 500)
      .json({ error: error.message || "Something went wrong" });
  }
});

app.get(`/api/products/:category`, async (req, res) => {
  const { category } = req.params;

  try {
    const response = await axios.get(`${baseUrl}/products`);
    const filteredProducts = response.data.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
    if (filteredProducts === undefined || filteredProducts.length === 0)
      throw error;

    res.json(filteredProducts);
  } catch (error) {
    res.status(500).json({ error: "Category Does not exist" });
  }
});

app.listen(3000, () => {
  console.log(`Proxy API listening at http://localhost:${3000}`);
});
