import React, { useEffect, useState } from "react";
import { getProducts } from "../api";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p._id}>
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <p>{p.farmer}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
